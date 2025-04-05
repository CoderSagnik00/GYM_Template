/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from 'react';
import {  CreditCard, User, Activity, Settings, ChevronRight, Bell, LogOut, CreditCard as PaymentIcon } from 'lucide-react';

const GymDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animation effect when component mounts
    setIsVisible(true);
  }, []);

  // Sample user data
  const userData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+91 98765 43210",
    membershipType: "ELITE",
    startDate: "January 15, 2025",
    nextPayment: "May 15, 2025",
    paymentAmount: "₹1999",
    recentPayments: [
      { date: "April 15, 2025", amount: "₹1999", status: "Completed" },
      { date: "March 15, 2025", amount: "₹1999", status: "Completed" },
      { date: "February 15, 2025", amount: "₹1999", status: "Completed" }
    ],
    progress: {
      daysAttended: 18,
      classesAttended: 12,
      workoutsCompleted: 24
    }
  };

  const renderOverviewTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-red-600">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Membership Status</h3>
          <div className="p-2 bg-red-600 rounded-full">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Membership</span>
            <span className="text-white font-semibold">{userData.membershipType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Start Date</span>
            <span className="text-white">{userData.startDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Next Payment</span>
            <span className="text-white">{userData.nextPayment}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Amount</span>
            <span className="text-white font-semibold">{userData.paymentAmount}/mo</span>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 rounded text-white font-bold transition-all duration-300">
            Renew Membership
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-red-600">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Gym Activity</h3>
          <div className="p-2 bg-red-600 rounded-full">
            <Activity className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-black bg-opacity-40 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{userData.progress.daysAttended}</div>
            <div className="text-sm text-gray-400">Days Attended</div>
          </div>
          <div className="bg-black bg-opacity-40 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{userData.progress.classesAttended}</div>
            <div className="text-sm text-gray-400">Classes</div>
          </div>
          <div className="bg-black bg-opacity-40 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{userData.progress.workoutsCompleted}</div>
            <div className="text-sm text-gray-400">Workouts</div>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full py-3 px-6 bg-transparent border-2 border-red-600 hover:bg-red-600 rounded text-white font-bold transition-all duration-300">
            Book a Class
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-red-600 md:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Recent Payments</h3>
          <div className="p-2 bg-red-600 rounded-full">
            <PaymentIcon className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-gray-400 font-medium text-left py-3">Date</th>
                <th className="text-gray-400 font-medium text-left py-3">Amount</th>
                <th className="text-gray-400 font-medium text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {userData.recentPayments.map((payment, index) => (
                <tr key={index} className="border-b border-gray-800 last:border-0">
                  <td className="py-3 text-white">{payment.date}</td>
                  <td className="py-3 text-white">{payment.amount}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-900 text-green-300 rounded-full text-xs">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 text-red-500 hover:text-red-400 text-sm flex items-center">
          View all payment history <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );

  const renderPaymentsTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Payment Methods</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-black bg-opacity-40 rounded-lg border border-gray-800">
            <div className="flex items-center">
              <div className="p-2 bg-blue-800 rounded mr-4">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">•••• •••• •••• 4242</p>
                <p className="text-gray-400 text-sm">Expires 12/26</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-green-900 text-green-300 rounded-full text-xs">Default</span>
          </div>
          
          <button className="py-3 px-6 bg-red-600 hover:bg-red-700 rounded text-white font-bold transition-all duration-300 w-full">
            Add Payment Method
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-gray-400 font-medium text-left py-3">Date</th>
                <th className="text-gray-400 font-medium text-left py-3">Description</th>
                <th className="text-gray-400 font-medium text-left py-3">Amount</th>
                <th className="text-gray-400 font-medium text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[...userData.recentPayments, 
                { date: "January 15, 2025", amount: "₹1999", status: "Completed", description: "Monthly Membership - ELITE" },
                { date: "December 15, 2024", amount: "₹1999", status: "Completed", description: "Monthly Membership - ELITE" }
              ].map((payment, index) => (
                <tr key={index} className="border-b border-gray-800 last:border-0">
                  <td className="py-3 text-white">{payment.date}</td>
                  <td className="py-3 text-white">{payment.amount}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-900 text-green-300 rounded-full text-xs">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Subscription Management</h3>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Current Plan</span>
            <span className="text-white font-bold">{userData.membershipType}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Billing Cycle</span>
            <span className="text-white">Monthly</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Next Payment</span>
            <span className="text-white">{userData.nextPayment}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Amount</span>
            <span className="text-white font-bold">{userData.paymentAmount}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 py-3 px-6 bg-red-600 hover:bg-red-700 rounded text-white font-bold transition-all duration-300">
            Upgrade Plan
          </button>
          <button className="flex-1 py-3 px-6 bg-transparent border border-gray-700 hover:border-red-600 rounded text-white font-bold transition-all duration-300">
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white text-3xl font-bold">
              {userData.name.charAt(0)}
            </div>
            <button className="absolute bottom-0 right-0 bg-red-600 rounded-full p-2">
              <User className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">{userData.name}</h3>
            <p className="text-gray-400">{userData.membershipType} Member</p>
            <p className="text-red-500 mt-2">Member since {userData.startDate}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              defaultValue={userData.name}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              defaultValue={userData.email}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Phone Number</label>
            <input 
              type="tel" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              defaultValue={userData.phone}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Date of Birth</label>
            <input 
              type="date" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              defaultValue="1990-01-01"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-gray-400 mb-2">Street Address</label>
            <input 
              type="text" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              defaultValue="123 Fitness Street"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">City</label>
            <input 
              type="text" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              defaultValue="Mumbai"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Postal Code</label>
            <input 
              type="text" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              defaultValue="400001"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 rounded text-white font-bold transition-all duration-300">
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Password & Security</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Current Password</label>
            <input 
              type="password" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">New Password</label>
            <input 
              type="password" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Confirm New Password</label>
            <input 
              type="password" 
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-red-600 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 rounded text-white font-bold transition-all duration-300">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Gym interior" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Red Accent Lights */}
        <div className="absolute top-0 right-0 w-1/3 h-40 bg-red-600 opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-10 w-1/3 h-40 bg-red-600 opacity-20 blur-xl"></div>
      </div>

      {/* Header */}
      <header className="bg-black bg-opacity-70 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              FORGE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-900 rounded-full relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white text-xs font-bold">
                {userData.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className={`bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                <p className="text-gray-400 mb-2">Welcome back,</p>
                <p className="text-xl font-bold">{userData.name}</p>
              </div>
              <nav className="mt-2">
                {[
                  { id: 'overview', label: 'Overview', icon: <Activity className="w-5 h-5" /> },
                  { id: 'payments', label: 'Payments', icon: <CreditCard className="w-5 h-5" /> },
                  { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
                  { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
                ].map(item => (
                  <button
                    key={item.id}
                    className={`flex items-center w-full px-6 py-4 text-left transition-all duration-300 ${
                      activeTab === item.id 
                        ? 'bg-red-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="p-6 mt-4 border-t border-gray-800">
                <button className="flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {activeTab === 'overview' && renderOverviewTab()}
              {activeTab === 'payments' && renderPaymentsTab()}
              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'settings' && (
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Settings</h2>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-gray-800">
                      <div>
                        <h3 className="text-lg font-medium">Email Notifications</h3>
                        <p className="text-gray-400 text-sm">Receive emails about your account activity</p>
                      </div>
                      <div className="w-12 h-6 bg-red-600 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full transform translate-x-6"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-800">
                      <div>
                        <h3 className="text-lg font-medium">SMS Notifications</h3>
                        <p className="text-gray-400 text-sm">Receive text messages for important updates</p>
                      </div>
                      <div className="w-12 h-6 bg-gray-700 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-800">
                      <div>
                        <h3 className="text-lg font-medium">Dark Mode</h3>
                        <p className="text-gray-400 text-sm">Toggle between light and dark theme</p>
                      </div>
                      <div className="w-12 h-6 bg-red-600 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full transform translate-x-6"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-gray-800">
                      <div>
                        <h3 className="text-lg font-medium">Data Sharing</h3>
                        <p className="text-gray-400 text-sm">Allow us to share your fitness data with trainers</p>
                      </div>
                      <div className="w-12 h-6 bg-red-600 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full transform translate-x-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GymDashboard;