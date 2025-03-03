/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear password error when user types in either password field
    if (name === 'password' || name === 'confirmPassword') {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, password: 'Passwords do not match' });
      return;
    }
    
    setLoading(true);
    
    // Here you would handle registration
    // For example: const response = await registerUser(formData);
    
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      // Redirect or show success message
    }, 1500);
  };

  return (
    <div>
    <Navbar />
    
    <main className="min-h-screen bg-black flex items-center justify-center relative py-10">
       
        
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
      
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80"></div>
        <img 
          src="https://img.freepik.com/premium-photo/gym-backgrond_1003030-14797.jpg" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Red Accent Lights */}
        <div className="absolute top-0 right-0 w-1/4 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-10 w-1/4 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
      </div>
      
      {/* Signup Card */}
      <div className="w-full max-w-md px-4 relative z-10">
        <div className="backdrop-blur-sm bg-gray-900/70 p-8 rounded-xl border border-gray-800">
          {/* Logo/Branding */}
          <div className="flex justify-center mb-6">
            <h1 className="text-4xl font-black">
              <span className="relative">
                <span className="relative z-10 text-white">FORGE</span>
                <span className="absolute -left-1 -top-1 text-red-600 blur-[1px] z-0 opacity-80">FORGE</span>
              </span>
            </h1>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Account</h2>
          
          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="+91 1234567890"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-gray-800 border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`}
                placeholder="••••••••"
                required
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {loading ? 'Creating Account...' : 'SIGN UP'}
              </span>
              <div className="absolute inset-0 w-full h-full scale-0 transition-all duration-500 ease-in-out group-hover:scale-100 bg-red-800 -z-0"></div>
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      
    </main>
    <Footer />

    </div>
  );
};

export default SignupPage;