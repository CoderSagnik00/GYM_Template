// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription logic here
        alert(`Thanks for subscribing with: ${email}`);
        setEmail('');
    };
    
    return (
        <footer className="bg-black text-white relative overflow-hidden">
            {/* Red accent glow */}
            <div className="absolute bottom-0 left-20 w-1/3 h-40 bg-red-600 opacity-20 blur-[120px]"></div>
            <div className="absolute top-20 right-0 w-1/4 h-40 bg-red-600 opacity-10 blur-[100px]"></div>
            
            {/* Main footer content */}
            <div className="container mx-auto px-6 lg:px-16 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Brand section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Link href="/" className="inline-block group relative">
                                <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                    FORGE
                                </span>
                                <span className="absolute top-0 left-0.5 text-3xl font-black text-red-600 blur-[1px] opacity-80 transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-100">
                                    FORGE
                                </span>
                            </Link>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-xs">
                            Transform your body. Elevate your mind. 
                            Unleash your full potential with premium 
                            fitness facilities and expert training.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                                <a 
                                    key={social}
                                    href={`https://${social}.com`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 hover:border-red-600 hover:bg-red-600/10 hover:text-red-500"
                                >
                                    <span className="sr-only">{social}</span>
                                    <svg 
                                        className="w-5 h-5" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24" 
                                        aria-hidden="true"
                                    >
                                        {/* Simple icon placeholder - replace with actual icons */}
                                        <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
                                        <path d={
                                            social === 'facebook' ? 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' :
                                            social === 'twitter' ? 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' :
                                            social === 'instagram' ? 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87a.5.5 0 10.5.5.5.5 0 00-.5-.5zM21.54 9a6.91 6.91 0 01-.33 2.16A8 8 0 0112 21.54a7.77 7.77 0 01-2.16-.33 6.27 6.27 0 01-1.1-.36 8 8 0 01-4.89-7 6.91 6.91 0 01.33-2.16A8 8 0 0112 2.46a7.77 7.77 0 012.16.33 8 8 0 015.38 5.33A7.13 7.13 0 0121.54 9zM12 0a12 12 0 00-3.8.62 12 12 0 00-6.75 16.44 12.06 12.06 0 001.93 2.76v.01a12 12 0 005.64 2.93A12 12 0 0012 24a12.06 12.06 0 008.22-3.25 12.1 12.1 0 003.79-7A12 12 0 0012 0z' :
                                            'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'
                                        } />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Quick links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'Programs', 'Trainers', 'Facilities', 'About'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href={`/${item.toLowerCase()}`} 
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-red-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Membership */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative inline-block">
                            Membership
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Premium Plans', 'Corporate Offers', 'Day Pass', 'Student Discount', 'Training Sessions'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href="/membership" 
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-red-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative inline-block">
                            Join The Community
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600"></span>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to receive workout tips, nutrition guides, and exclusive offers.
                        </p>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    required
                                    className="bg-gray-900 border border-gray-700 px-4 py-2 rounded-l outline-none focus:border-red-600 text-white w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div className="py-3 px-4 bg-gray-900 border border-gray-800 rounded text-sm text-gray-400">
                            <div className="flex items-start mb-2">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Open 24/7 for members</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Call us: (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom section with copyright */}
                <div className="pt-8 border-t border-gray-800 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            &copy; {year} FORGE Fitness. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
                            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-white transition-colors duration-300">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}