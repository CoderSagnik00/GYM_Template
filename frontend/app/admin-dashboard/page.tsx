"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  BarChart, Bar, PieChart, Pie, Cell, LineChart, 
  Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Users, Dumbbell, Calendar, CreditCard, 
  MessageSquare, Home, Settings, Bell, 
  LogOut, Menu, ChevronDown, BarChart as BarChartIcon 
} from 'lucide-react';

type MembershipDataType = {
  name: string;
  active: number;
  expired: number;
  new: number;
};

type RevenueDataType = {
  name: string;
  revenue: number;
};

type ProgramDistributionType = {
  name: string;
  value: number;
};

type NotificationType = {
  id: number;
  text: string;
  time: string;
};

const AdminPanel: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Sample data
  const membershipData: MembershipDataType[] = [
    { name: 'Jan', active: 150, expired: 20, new: 35 },
    { name: 'Feb', active: 165, expired: 15, new: 30 },
    { name: 'Mar', active: 180, expired: 18, new: 33 },
    { name: 'Apr', active: 195, expired: 22, new: 38 },
    { name: 'May', active: 210, expired: 19, new: 42 },
    { name: 'Jun', active: 228, expired: 21, new: 39 },
  ];
  
  const revenueData: RevenueDataType[] = [
    { name: 'Jan', revenue: 25000 },
    { name: 'Feb', revenue: 27500 },
    { name: 'Mar', revenue: 29000 },
    { name: 'Apr', revenue: 32500 },
    { name: 'May', revenue: 36000 },
    { name: 'Jun', revenue: 39500 },
  ];
  
  const programDistribution: ProgramDistributionType[] = [
    { name: 'Strength', value: 35 },
    { name: 'HIIT', value: 25 },
    { name: 'Cardio', value: 20 },
    { name: 'Nutrition', value: 10 },
    { name: 'Rehab', value: 10 },
  ];
  
  const COLORS = ['#FF5252', '#FF9800', '#4CAF50', '#2196F3', '#9C27B0'];
  
  const notificationsData: NotificationType[] = [
    { id: 1, text: "5 memberships expiring in 7 days", time: "2 hours ago" },
    { id: 2, text: "New membership purchased", time: "5 hours ago" },
    { id: 3, text: "3 new contact form submissions", time: "Yesterday" },
  ];
  
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className={`bg-black text-white w-64 flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center">
            <Dumbbell className="w-8 h-8 text-red-600 mr-2" />
            <div>
              <h1 className="text-lg font-bold">GYM ADMIN</h1>
              <p className="text-xs text-gray-400">Management System</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 hover:text-white md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="pt-6">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </div>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 bg-gray-800 border-l-4 border-red-600">
            <Home className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <Users className="w-5 h-5 mr-3" />
            <span>Members</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <Dumbbell className="w-5 h-5 mr-3" />
            <span>Trainers</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <Calendar className="w-5 h-5 mr-3" />
            <span>Programs</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <CreditCard className="w-5 h-5 mr-3" />
            <span>Memberships</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <MessageSquare className="w-5 h-5 mr-3" />
            <span>Inquiries</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <BarChartIcon className="w-5 h-5 mr-3" />
            <span>Reports</span>
          </a>
          
          <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Settings
          </div>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </a>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-gray-800 shadow-md">
          <div className="flex items-center justify-between p-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-300 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center">
              <div className="relative mr-4">
                <Bell className="w-6 h-6 text-gray-300 cursor-pointer" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </div>
              
              <div className="relative">
                <div className="flex items-center cursor-pointer">
                  <div className="h-8 w-8 rounded-full bg-gray-600 overflow-hidden">
                    <Image 
                      src="/api/placeholder/32/32" 
                      alt="Profile"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="ml-2 font-medium text-gray-300">John Doe</span>
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100">Dashboard Overview</h2>
            <p className="text-gray-400">Welcome back, here&apos;s what&apos;s happening with your gym today.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-900 text-red-400">
                  <Users className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm">Total Members</p>
                  <h3 className="text-2xl font-bold text-white">348</h3>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-400 flex items-center">
                <span>+8% from last month</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-900 text-blue-400">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm">Monthly Revenue</p>
                  <h3 className="text-2xl font-bold text-white">$39,500</h3>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-400 flex items-center">
                <span>+12% from last month</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-900 text-green-400">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm">Active Programs</p>
                  <h3 className="text-2xl font-bold text-white">15</h3>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-400 flex items-center">
                <span>+2 new this month</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-orange-900 text-orange-400">
                  <Bell className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm">Due Renewals</p>
                  <h3 className="text-2xl font-bold text-white">24</h3>
                </div>
              </div>
              <div className="mt-4 text-sm text-yellow-400 flex items-center">
                <span>8 due in 7 days</span>
              </div>
            </div>
          </div>
          
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-100">Membership Overview</h3>
                <div className="text-sm text-gray-400 flex items-center">
                  <span>Last 6 months</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={membershipData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: "#1F2937", borderColor: "#4B5563", color: "#F9FAFB" }} 
                           labelStyle={{ color: "#F9FAFB" }}
                           itemStyle={{ color: "#F9FAFB" }} />
                  <Legend wrapperStyle={{ color: "#F9FAFB" }} />
                  <Bar dataKey="active" fill="#4CAF50" name="Active" />
                  <Bar dataKey="expired" fill="#FF5252" name="Expired" />
                  <Bar dataKey="new" fill="#2196F3" name="New" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-100">Revenue Trends</h3>
                <div className="text-sm text-gray-400 flex items-center">
                  <span>Last 6 months</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: "#1F2937", borderColor: "#4B5563", color: "#F9FAFB" }}
                           labelStyle={{ color: "#F9FAFB" }}
                           itemStyle={{ color: "#F9FAFB" }} />
                  <Legend wrapperStyle={{ color: "#F9FAFB" }} />
                  <Line type="monotone" dataKey="revenue" stroke="#FF5252" activeDot={{ r: 8 }} name="Revenue ($)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg shadow p-6 lg:col-span-1">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-100">Program Distribution</h3>
              </div>
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={programDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }: { name: string; percent: number }) => 
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {programDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: "#1F2937", borderColor: "#4B5563", color: "#F9FAFB" }}
                             labelStyle={{ color: "#F9FAFB" }}
                             itemStyle={{ color: "#F9FAFB" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-100">Recent Notifications</h3>
                <a href="#" className="text-red-400 text-sm font-medium hover:text-red-300">View All</a>
              </div>
              <div className="space-y-4">
                {notificationsData.map(notification => (
                  <div key={notification.id} className="border-b border-gray-700 pb-4">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-red-900 text-red-400 mr-3">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-gray-300">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="text-center pt-2">
                  <button className="text-red-400 font-medium text-sm hover:text-red-300 hover:underline">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;