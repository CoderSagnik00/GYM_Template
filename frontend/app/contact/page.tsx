/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const ContactPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
  const [expandedLocation, setExpandedLocation] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    location: 'downtown'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Define locations data
  const locations = [
    {
      id: 1,
      name: "DOWNTOWN HQ",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      address: "123 Fitness Blvd, Downtown Metro",
      phone: "+91 7003390611",
      email: "downtown@forgefitness.com",
      hours: "Monday-Friday: 5am-11pm\nSaturday-Sunday: 7am-9pm",
      description: "Our flagship location featuring 25,000 sq ft of premium training space with state-of-the-art equipment, dedicated powerlifting zone, olympic lifting platforms, recovery center with cold plunge and sauna, and specialized training studios.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872418555!3d40.74076427932743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA0JzI3LjQiTiA3NMKwMDAnMTUuMyJX!5e0!3m2!1sen!2sus!4v1646852483046!5m2!1sen!2sus",
    },
    {
      id: 2,
      name: "WESTSIDE FORGE",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      address: "456 Strength Avenue, Westside District",
      phone: "+91 7003390612",
      email: "westside@forgefitness.com",
      hours: "Monday-Friday: 6am-10pm\nSaturday-Sunday: 8am-8pm",
      description: "Our Westside location specializes in strength training with 15 power racks, 10 deadlift platforms, specialized strongman equipment, and a combat training area for our Combat Conditioning program. Features a dedicated HIIT zone and recovery lounge.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6770198851493!2d-73.98956772418525!3d40.74669227932636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA0OC4xIk4gNzPCsDU5JzIyLjQiVw!5e0!3m2!1sen!2sus!4v1646852609363!5m2!1sen!2sus",
    },
    {
      id: 3,
      name: "EASTSIDE ELITE",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      address: "789 Cardio Lane, Eastside Quarter",
      phone: "+91 7003390613",
      email: "eastside@forgefitness.com",
      hours: "Monday-Friday: 5:30am-10:30pm\nSaturday-Sunday: 7am-8pm",
      description: "Our Eastside location focuses on metabolic conditioning and cardio excellence with premium treadmills, rowers, bikes, and specialized HIIT equipment. Features an indoor sprint track, dedicated mobility zone, and specialized Precision Cardio studio.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2341987851696!2d-73.97347772418693!3d40.71612677933064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzU4LjEiTiA3M8KwNTgnMjAuNSJX!5e0!3m2!1sen!2sus!4v1646852721186!5m2!1sen!2sus",
    }
  ];

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          location: 'downtown'
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      
      {/* Hero Section with Premium Feel */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Premium Filter */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)`,
              filter: 'brightness(0.3) contrast(1.2) saturate(1.1)',
            }}
          ></div>
        </div>
        
        {/* Refined Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
        
        {/* Symmetrical Red Accents */}
        <div className="absolute top-0 left-0 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
        
        {/* Hero Content with Improved Alignment */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-16">
            <div 
              className={`max-w-3xl transform transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                <div className="overflow-hidden">
                  <span 
                    className={`block mb-2 transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                  >
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">CONNECT</span>
                      <span className="absolute -left-1 -top-1 text-red-600 blur-[1px] z-0 opacity-80">CONNECT</span>
                    </span>
                  </span>
                  <span 
                    className={`block transition-all duration-1000 delay-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                  >
                    <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">WITH US</span>
                  </span>
                </div>
              </h1>
              
              <p 
                className={`text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-light text-gray-300 transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                Reach out to our team to <span className="text-white font-medium">start your journey</span> or <span className="text-red-500 font-bold">visit a location</span> near you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Tabs */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => setActiveTab('form')}
              className={`px-8 py-3 rounded-full border-2 transition-all duration-300 text-sm md:text-base font-bold tracking-wider ${
                activeTab === 'form' 
                  ? 'border-red-600 bg-red-600 text-white shadow-lg shadow-red-900/30' 
                  : 'border-gray-800 hover:border-red-600 text-gray-300 hover:text-white'
              }`}
            >
              CONTACT FORM
            </button>
            <button 
              onClick={() => setActiveTab('locations')}
              className={`px-8 py-3 rounded-full border-2 transition-all duration-300 text-sm md:text-base font-bold tracking-wider ${
                activeTab === 'locations' 
                  ? 'border-red-600 bg-red-600 text-white shadow-lg shadow-red-900/30' 
                  : 'border-gray-800 hover:border-red-600 text-gray-300 hover:text-white'
              }`}
            >
              OUR LOCATIONS
            </button>
          </div>
          
          {/* Contact Form Section */}
          <div className={`transition-all duration-500 ${activeTab === 'form' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className={`transition-all duration-700 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-300 mb-8">
                  Ready to transform your fitness journey? Fill out the form, and one of our team members will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-gray-900 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-400">+91 7003390611</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-900 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-400">info@forgefitness.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-900 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                      <p className="text-gray-400">Monday-Friday: 9am-6pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center transition-all duration-300 hover:bg-red-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center transition-all duration-300 hover:bg-red-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center transition-all duration-300 hover:bg-red-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center transition-all duration-300 hover:bg-red-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className={`transition-all duration-700 transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <form onSubmit={handleSubmit} className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
                  {!submitSuccess ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">Preferred Location</label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                        >
                          <option value="downtown">Downtown HQ</option>
                          <option value="westside">Westside Forge</option>
                          <option value="eastside">Eastside Elite</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                          placeholder="Tell us how we can help you..."
                          required
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative overflow-hidden group bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold tracking-wider transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            SENDING MESSAGE...
                          </span>
                        ) : (
                          <span className="relative z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 inline-block">
                            SEND MESSAGE
                          </span>
                        )}
                        <div className="absolute inset-0 w-full h-full scale-0 rounded transition-all duration-500 ease-in-out group-hover:scale-100 bg-red-700 -z-0"></div>
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 mb-6">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2"></h3>
                      <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-300 mb-4">Thank you for reaching out to us. We'll get back to you within 24 hours.</p>
                      <div className="w-16 h-1 bg-green-500 mx-auto my-4"></div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          
          {/* Locations Section */}
          <div className={`transition-all duration-500 ${activeTab === 'locations' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Our Locations</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Visit one of our premium fitness facilities to experience the Forge Fitness difference. 
                Each location offers unique amenities tailored to different training styles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div 
                  key={location.id}
                  className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-red-600 ${
                    expandedLocation === location.id ? 'lg:col-span-3' : ''
                  }`}
                >
                  <div className={`${expandedLocation === location.id ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : ''}`}>
                    <div className="relative">
                      <img 
                        src={location.image} 
                        alt={location.name} 
                        className={`w-full object-cover ${expandedLocation === location.id ? 'h-full' : 'h-48'}`}
                      />
                      <div className="absolute top-0 left-0 bg-red-600 px-4 py-2">
                        <span className="text-xs font-bold tracking-wider">{location.name}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                      <p className="text-gray-400 mb-4">{location.address}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                          <span className="text-gray-300">{location.phone}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <span className="text-gray-300">{location.email}</span>
                        </div>
                        
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="text-gray-300 whitespace-pre-line">{location.hours}</span>
                        </div>
                      </div>
                      
                      {expandedLocation === location.id ? (
                        <>
                          <p className="text-gray-300 mb-6">{location.description}</p>
                          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                            <iframe 
                              src={location.mapEmbed} 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }}
                              allowFullScreen={true}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`Map for ${location.name}`}
                              className="rounded-lg"
                            ></iframe>
                          </div>
                          <button
                            onClick={() => setExpandedLocation(null)}
                            className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-300"
                          >
                            View Less
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setExpandedLocation(location.id)}
                          className="inline-flex items-center text-red-500 font-semibold hover:text-red-400 transition-colors duration-300"
                        >
                          View Details
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection id={''} phoneNumber={''} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;