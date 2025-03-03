/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Here you would handle authentication
    // For example: const response = await signIn(formData);
    
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      // Redirect or show success message
    }, 1500);
  };

  return (
    <div>
        <Navbar />
    
    <main className="min-h-screen bg-black flex items-center justify-center relative">
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
      
      {/* Login Card */}
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
          
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Welcome Back</h2>
          
          {/* Login Method Tabs */}
          <div className="flex mb-6">
            <button 
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 text-center font-medium transition-colors ${
                loginMethod === 'email' 
                  ? 'text-white border-b-2 border-red-600' 
                  : 'text-gray-400 border-b border-gray-700'
              }`}
            >
              Email
            </button>
            <button 
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-2 text-center font-medium transition-colors ${
                loginMethod === 'phone' 
                  ? 'text-white border-b-2 border-red-600' 
                  : 'text-gray-400 border-b border-gray-700'
              }`}
            >
              Phone
            </button>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {loginMethod === 'email' ? (
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
            ) : (
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
            )}
            
            <div className="mb-6">
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
              <div className="flex justify-end mt-1">
                <Link href="/forgot-password" className="text-sm text-red-500 hover:text-red-400 transition-colors">
                  Forgot password?
                </Link>
              </div>
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
                {loading ? 'Logging in...' : 'LOGIN'}
              </span>
              <div className="absolute inset-0 w-full h-full scale-0 transition-all duration-500 ease-in-out group-hover:scale-100 bg-red-800 -z-0"></div>
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don&lsquo;t have an account?{' '}
              <Link href="/signup" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                Sign up
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

export default LoginPage;