/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewMembershipPage: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    pincode: '',
    
    // Membership Selection
    membershipType: 'ELITE', // Default to recommended plan
    
    // Gym Location
    location: '',
    
    // Payment Details
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    
    // Terms
    agreeTerms: false,
  });

  // Dummy gym locations
  const gymLocations = [
    { id: 1, name: "FORGE Central", address: "123 Main Street, Central District" },
    { id: 2, name: "FORGE East Side", address: "456 Park Avenue, East District" },
    { id: 3, name: "FORGE West Plaza", address: "789 West Boulevard, West District" },
    { id: 4, name: "FORGE South Point", address: "321 South Road, South District" },
  ];

  // Membership plans from the previous page
  const membershipPlans = [
    { 
      name: "STARTER", 
      price: "₹1499", 
      features: [
        "Full gym access", 
        "2 group classes/week", 
        "Basic fitness assessment", 
        "Locker access",
        "Water station access"
      ] 
    },
    { 
      name: "ELITE", 
      price: "₹1999", 
      features: [
        "24/7 gym access", 
        "Unlimited group classes", 
        "1 PT session/month", 
        "Nutrition consultation", 
        "Access to all facilities",
        "Mobile app access"
      ],
      highlighted: true
    },
    { 
      name: "PREMIER", 
      price: "₹2999", 
      features: [
        "24/7 VIP access", 
        "Unlimited premium classes", 
        "4 PT sessions/month", 
        "Personalized nutrition plan", 
        "Recovery zone access", 
        "Guest privileges",
        "Premium apparel package"
      ] 
    }
  ];

  useEffect(() => {
    // Animation effect when component mounts
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
    // Scroll to top when changing steps
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
    // Scroll to top when changing steps
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Navigate to success page or show success message
    router.push('/membership-success');
  };

  // Form progress indicator
  const renderProgressBar = () => {
    const steps = ["Personal Details", "Membership", "Location", "Payment"];
    
    return (
      <div className="w-full max-w-3xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 
                  ${formStep > index + 1 ? 'bg-red-600 border-red-600' 
                    : formStep === index + 1 ? 'border-red-600 text-red-600' 
                    : 'border-gray-500 text-gray-500'}`}>
                  {formStep > index + 1 ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className={`text-xs md:text-sm mt-1 ${formStep === index + 1 ? 'text-red-600' : 'text-gray-400'}`}>
                  {step}
                </span>
              </div>
              
              {/* Connector Line (except after last item) */}
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${
                  formStep > index + 1 ? 'bg-red-600' : 'bg-gray-500'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // Form step content
  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Personal Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-300 mb-1">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-300 mb-1">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Choose Your Membership</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {membershipPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative rounded-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 ${
                    formData.membershipType === plan.name ? 'ring-2 ring-red-600' : 'ring-1 ring-gray-700'
                  }`}
                  onClick={() => setFormData({...formData, membershipType: plan.name})}
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-red-600 to-red-900' 
                      : 'bg-gray-900'
                  }`}></div>
                  
                  {/* Selected Indicator */}
                  {formData.membershipType === plan.name && (
                    <div className="absolute top-3 right-3 bg-red-600 rounded-full p-1 z-10">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    <h4 className="text-xl font-bold mb-2 text-center">
                      {plan.name}
                    </h4>
                    
                    <div className="mb-4 text-center">
                      <div className="inline-block relative">
                        <span className="text-3xl font-black">{plan.price}</span>
                        <span className="absolute -top-1 -right-4 text-sm font-medium">/mo</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6 flex-grow text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg 
                            className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.highlighted && (
                      <div className="absolute -top-1 -right-1 bg-white text-red-600 font-bold text-xs py-1 px-3 rotate-12 shadow-lg">
                        BEST VALUE
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Select Your Preferred Location</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gymLocations.map((location) => (
                <div
                  key={location.id}
                  className={`relative p-6 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    formData.location === location.name ? 'bg-gradient-to-br from-red-800 to-red-900 ring-2 ring-red-600' : 'bg-gray-900 ring-1 ring-gray-700'
                  }`}
                  onClick={() => setFormData({...formData, location: location.name})}
                >
                  {/* Selected Indicator */}
                  {formData.location === location.name && (
                    <div className="absolute top-3 right-3 bg-red-600 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  )}
                  
                  <h4 className="text-xl font-bold mb-2">{location.name}</h4>
                  <p className="text-gray-300">{location.address}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Open 24/7
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Payment Details</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
              <h4 className="text-lg font-medium mb-4">Order Summary</h4>
              
              <div className="flex justify-between mb-2">
                <span>Membership Plan:</span>
                <span className="font-medium">{formData.membershipType}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span>Location:</span>
                <span className="font-medium">{formData.location || "Not selected"}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span>Price:</span>
                <span className="font-medium">
                  {membershipPlans.find(plan => plan.name === formData.membershipType)?.price || "₹1999"}
                </span>
              </div>
              
              <div className="border-t border-gray-700 my-4"></div>
              
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>
                  {membershipPlans.find(plan => plan.name === formData.membershipType)?.price || "₹1999"}
                </span>
              </div>
            </div>
            
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-300 mb-1">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300 mb-1">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-start mt-6">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="h-5 w-5 text-red-600 rounded-md border-gray-600 bg-gray-800 focus:ring-red-600 focus:ring-offset-gray-900"
                required
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-300">
                I agree to the <a href="#" className="text-red-500 hover:text-red-400">Terms & Conditions</a> and <a href="#" className="text-red-500 hover:text-red-400">Privacy Policy</a>
              </label>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section id="new-membership" className="relative py-16 sm:py-24 overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent"></div>
          <img 
            src="https://wallpaperaccess.com/full/640344.jpg"
            alt="Gym interior" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Red Accent Lights */}
          <div className="absolute top-0 right-0 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-10 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Animation */}
          <div className={`mb-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-center">
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">JOIN</span>
                <span className="absolute -left-1 -top-1 text-red-600 blur-[1px] z-0 opacity-80">JOIN</span>
              </span>
              <span className="block text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">FORGE FITNESS</span>
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mt-6 font-light mx-auto text-center px-4">
              Complete your registration to start your fitness journey with premium 
              facilities and expert coaching at <span className="text-white font-medium">FORGE</span>.
            </p>
          </div>
          
          {/* Form Container */}
          <div className={`max-w-3xl mx-auto bg-black/80 backdrop-blur-sm rounded-xl p-6 sm:p-10 ring-1 ring-gray-800 shadow-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Progress Bar */}
            {renderProgressBar()}
            
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {renderFormStep()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                  </button>
                )}
                
                {formStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className={`px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all flex items-center ml-auto`}
                  >
                    Next
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all flex items-center ml-auto font-medium"
                  >
                    Complete Registration
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Additional Information */}
          <div className={`mt-8 max-w-2xl mx-auto text-center transition-all duration-1000 delay-300 px-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-sm text-gray-400">
              Need assistance with your membership? Call us at <span className="text-white">+91 98765 43210</span> or email <span className="text-white">support@forgefitness.com</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NewMembershipPage;