/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react';
import { 
  Users, Calendar, PlusCircle, Search, Filter, 
  CheckCircle, XCircle, RefreshCw, Edit, Trash, 
  MessageSquare, ArrowUpDown, Download, ChevronDown
} from 'lucide-react';
import Sidebar from '@/app/components/Sidebar';

// Define the Membership interface if you haven't already
interface Membership {
    id: number;
    memberName: string;
    membershipType: string;
    startDate: string;
    endDate: string;
    status: string;
    paymentMethod: string;
    autoRenew: boolean;
    email: string;
    phone: string;
    notes?: string;
  }

const MembershipManagementPage = () => {
  // State for managing memberships
  const [showNewMembershipForm, setShowNewMembershipForm] = useState(false);
  const [membershipFilter, setMembershipFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editMembership, setEditMembership] = useState<Membership | null>(null);
const [showEditModal, setShowEditModal] = useState(false);
  

  // Sample membership plans
  const membershipPlans = [
    { id: 1, name: 'Basic', duration: '1 month', price: 29.99 },
    { id: 2, name: 'Standard', duration: '3 months', price: 79.99 },
    { id: 3, name: 'Premium', duration: '6 months', price: 139.99 },
    { id: 4, name: 'Elite', duration: '12 months', price: 249.99 },
  ];

  // Sample memberships data
  const [memberships, setMemberships] = useState([
    { 
      id: 1, 
      memberName: 'Sarah Johnson', 
      membershipType: 'Premium', 
      startDate: '2025-01-15', 
      endDate: '2025-07-15', 
      status: 'active',
      paymentMethod: 'online',
      autoRenew: true,
      email: 'sarah.j@example.com',
      phone: '555-123-4567'
    },
    { 
      id: 2, 
      memberName: 'Mike Wilson', 
      membershipType: 'Basic', 
      startDate: '2025-02-01', 
      endDate: '2025-03-01', 
      status: 'active',
      paymentMethod: 'cash',
      autoRenew: false,
      email: 'mike.w@example.com',
      phone: '555-987-6543'
    },
    { 
      id: 3, 
      memberName: 'Emily Rodriguez', 
      membershipType: 'Elite', 
      startDate: '2024-12-10', 
      endDate: '2025-12-10', 
      status: 'active',
      paymentMethod: 'online',
      autoRenew: true,
      email: 'emily.r@example.com',
      phone: '555-456-7890'
    },
    { 
      id: 4, 
      memberName: 'David Kim', 
      membershipType: 'Standard', 
      startDate: '2025-01-05', 
      endDate: '2025-04-05', 
      status: 'expiring',
      paymentMethod: 'cash',
      autoRenew: false,
      email: 'david.k@example.com',
      phone: '555-789-1234'
    },
    { 
      id: 5, 
      memberName: 'Jennifer Smith', 
      membershipType: 'Basic', 
      startDate: '2025-02-15', 
      endDate: '2025-03-15', 
      status: 'expired',
      paymentMethod: 'online',
      autoRenew: false,
      email: 'jen.s@example.com',
      phone: '555-321-6547'
    },
    { 
      id: 6, 
      memberName: 'Robert Brown', 
      membershipType: 'Premium', 
      startDate: '2024-11-01', 
      endDate: '2025-05-01', 
      status: 'expired',
      paymentMethod: 'cash',
      autoRenew: false,
      email: 'robert.b@example.com',
      phone: '555-654-9871'
    },
    { 
        id: 7, 
        memberName: 'Robert Brown', 
        membershipType: 'Premium', 
        startDate: '2024-11-01', 
        endDate: '2025-05-01', 
        status: 'expired',
        paymentMethod: 'cash',
        autoRenew: false,
        email: 'robert.b@example.com',
        phone: '555-654-9871'
      },
      { 
        id: 8, 
        memberName: 'Robert Brown', 
        membershipType: 'Premium', 
        startDate: '2024-11-01', 
        endDate: '2025-05-01', 
        status: 'expired',
        paymentMethod: 'cash',
        autoRenew: false,
        email: 'robert.b@example.com',
        phone: '555-654-9871'
      },
      { 
        id: 9, 
        memberName: 'Robert Brown', 
        membershipType: 'Premium', 
        startDate: '2024-11-01', 
        endDate: '2025-05-01', 
        status: 'expired',
        paymentMethod: 'cash',
        autoRenew: false,
        email: 'robert.b@example.com',
        phone: '555-654-9871'
      },
      { 
        id: 10, 
        memberName: 'Robert Brown', 
        membershipType: 'Premium', 
        startDate: '2024-11-01', 
        endDate: '2025-05-01', 
        status: 'expired',
        paymentMethod: 'cash',
        autoRenew: false,
        email: 'robert.b@example.com',
        phone: '555-654-9871'
      },{ 
        id: 11, 
        memberName: 'Robert Brown', 
        membershipType: 'Premium', 
        startDate: '2024-11-01', 
        endDate: '2025-05-01', 
        status: 'expired',
        paymentMethod: 'cash',
        autoRenew: false,
        email: 'robert.b@example.com',
        phone: '555-654-9871'
      },{ 
        id: 12, 
        memberName: 'Robert Brown', 
        membershipType: 'Premium', 
        startDate: '2024-11-01', 
        endDate: '2025-05-01', 
        status: 'expired',
        paymentMethod: 'cash',
        autoRenew: false,
        email: 'robert.b@example.com',
        phone: '555-654-9871'
      },
  ]);

  // Function to handle adding a new membership
  const handleAddMembership = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // In a real app, this would add the membership to the database
    setShowNewMembershipForm(false);
  };

  // Function to handle membership renewal
  const handleRenewMembership = (id: number) => {
    setMemberships(memberships.map(membership => {
      if (membership.id === id) {
        const newEndDate = new Date(membership.endDate);
        // Add the appropriate duration based on membership type
        if (membership.membershipType === 'Basic') newEndDate.setMonth(newEndDate.getMonth() + 1);
        if (membership.membershipType === 'Standard') newEndDate.setMonth(newEndDate.getMonth() + 3);
        if (membership.membershipType === 'Premium') newEndDate.setMonth(newEndDate.getMonth() + 6);
        if (membership.membershipType === 'Elite') newEndDate.setMonth(newEndDate.getMonth() + 12);
        
        return {
          ...membership,
          status: 'active',
          endDate: newEndDate.toISOString().split('T')[0]
        };
      }
      return membership;
    }));
  };

  // Function to edit membership
  const openEditModal = (membership: Membership) => {
    setEditMembership(membership);
    setShowEditModal(true);
  };
  // Function to filter memberships
  const filteredMemberships = memberships.filter(membership => {
    // Filter by status
    if (membershipFilter !== 'all' && membership.status !== membershipFilter) return false;
    
    // Filter by search query
    if (searchQuery && !membership.memberName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar defaultOpen={true} />
      {/* Page Header */}
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
      <div className="bg-gray-800 p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Membership Management</h1>
            <p className="text-gray-400">Manage gym memberships and payment information</p>
          </div>
          <button 
            onClick={() => setShowNewMembershipForm(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center hover:bg-red-700 transition"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            <span>New Membership</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        
        {/* Membership Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-900 text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-400 text-sm">Total Members</p>
                <h3 className="text-xl font-bold text-white">348</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-900 text-green-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-400 text-sm">Active Memberships</p>
                <h3 className="text-xl font-bold text-white">287</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-900 text-yellow-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-400 text-sm">Expiring Soon</p>
                <h3 className="text-xl font-bold text-white">24</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-900 text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <p className="text-gray-400 text-sm">Expired</p>
                <h3 className="text-xl font-bold text-white">37</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-gray-800 rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by member name..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-gray-400 mr-2" />
                <select 
                  className="border border-gray-700 rounded-md bg-gray-700 text-white py-2 px-3"
                  value={membershipFilter}
                  onChange={(e) => setMembershipFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="expiring">Expiring Soon</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
              
              <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md">
                <Download className="w-5 h-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
        
        {/* Memberships Table */}
        <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      Member
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      Membership
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      Period
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      Status
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      Payment
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredMemberships.map((membership) => (
                  <tr key={membership.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
                          {membership.memberName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{membership.memberName}</div>
                          <div className="text-sm text-gray-400">{membership.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{membership.membershipType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{membership.startDate}</div>
                      <div className="text-sm text-gray-400">to {membership.endDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${membership.status === 'active' ? 'bg-green-900 text-green-300' : 
                          membership.status === 'expiring' ? 'bg-yellow-900 text-yellow-300' : 
                          'bg-red-900 text-red-300'}`}>
                        {membership.status.charAt(0).toUpperCase() + membership.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white capitalize">{membership.paymentMethod}</div>
                      <div className="text-sm text-gray-400">
                        {membership.paymentMethod === 'online' ? 
                          (membership.autoRenew ? 'Auto-renewal ON' : 'Auto-renewal OFF') : 
                          'Manual renewal'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                      <button 
                        className="text-blue-400 hover:text-blue-300"
                        onClick={() => openEditModal(membership)}
                        >
                        <Edit className="w-5 h-5" />
                        </button>
                        
                        {(membership.status === 'expired' || membership.status === 'expiring') && 
                         membership.paymentMethod === 'cash' && (
                          <button 
                            className="text-green-400 hover:text-green-300"
                            onClick={() => handleRenewMembership(membership.id)}
                          >
                            <RefreshCw className="w-5 h-5" />
                          </button>
                        )}
                        
                        <button className="text-red-400 hover:text-red-300">
                          <Trash className="w-5 h-5" />
                        </button>
                        
                        <button className="text-gray-400 hover:text-gray-300">
                          <MessageSquare className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-gray-700 px-4 py-3 flex items-center justify-between border-t border-gray-600">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                  <span className="font-medium">348</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-600 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-gray-800 text-sm font-medium text-white">1</button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600">2</button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600">3</button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-gray-700 text-sm font-medium text-gray-300">...</span>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600">35</button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-600 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* New Membership Form Modal */}
      {showNewMembershipForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">New Membership</h3>
                <button 
                  onClick={() => setShowNewMembershipForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <form onSubmit={(e) => {
  e.preventDefault();
  // In a real app, this would update the membership in the database
  setShowEditModal(false);
}}>
  <div className="p-6">
    {/* Personal Details */}
    <div className="mb-4">
      <h4 className="text-lg font-medium text-white mb-2">Member Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input 
            type="text"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            defaultValue={editMembership?.memberName}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input 
            type="email"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            defaultValue={editMembership?.email}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
          <input 
            type="tel"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            defaultValue={editMembership?.phone}
            required
          />
        </div>
      </div>
    </div>
    
    {/* Membership Details */}
    <div className="mb-4">
      <h4 className="text-lg font-medium text-white mb-2">Membership Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Membership Type</label>
          <select 
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            defaultValue={editMembership?.membershipType}
          >
            {membershipPlans.map(plan => (
              <option key={plan.id} value={plan.name}>
                {plan.name} - ${plan.price} / {plan.duration}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
          <select 
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            defaultValue={editMembership?.status}
          >
            <option value="active">Active</option>
            <option value="expiring">Expiring Soon</option>
            <option value="expired">Expired</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Start Date</label>
          <input 
            type="date"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            defaultValue={editMembership?.startDate}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">End Date</label>
          <input 
            type="date"
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            defaultValue={editMembership?.endDate}
            required
          />
        </div>
      </div>
    </div>
    
    {/* Payment Method */}
    <div className="mb-4">
      <h4 className="text-lg font-medium text-white mb-2">Payment Method</h4>
      <div className="flex flex-col space-y-4">
        <div className="bg-gray-700 border border-gray-600 rounded-md p-4">
          <div className="flex items-center mb-4">
            <input 
              id="edit-payment-online" 
              type="radio" 
              name="paymentMethod" 
              value="online" 
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-500"
              defaultChecked={editMembership?.paymentMethod === 'online'} 
            />
            <label htmlFor="edit-payment-online" className="ml-2 block text-sm font-medium text-white">
              Online Payment
            </label>
          </div>
          <div className="pl-6">
            <div className="flex items-center">
              <input 
                id="edit-auto-renew" 
                type="checkbox" 
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-500"
                defaultChecked={editMembership?.autoRenew} 
              />
              <label htmlFor="edit-auto-renew" className="ml-2 block text-sm text-gray-300">
                Enable auto-renewal
              </label>
            </div>
            {editMembership?.paymentMethod === 'online' && (
              <div className="mt-4 bg-gray-800 p-3 rounded-md text-sm text-gray-400">
                Last payment: {editMembership?.startDate} - ${membershipPlans.find(p => p.name === editMembership?.membershipType)?.price || '0.00'}
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-gray-700 border border-gray-600 rounded-md p-4">
          <div className="flex items-center mb-4">
            <input 
              id="edit-payment-cash" 
              type="radio" 
              name="paymentMethod" 
              value="cash" 
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-500"
              defaultChecked={editMembership?.paymentMethod === 'cash'} 
            />
            <label htmlFor="edit-payment-cash" className="ml-2 block text-sm font-medium text-white">
              Cash Payment
            </label>
          </div>
          <div className="pl-6 text-sm text-gray-300">
            <p>Manual renewal required. Member will need to visit the facility to renew.</p>
            {editMembership?.paymentMethod === 'cash' && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-300 mb-1">Receipt Number</label>
                <input 
                  type="text"
                  className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white"
                  defaultValue={`REC-${editMembership?.id}${Math.floor(Math.random() * 1000)}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
    {/* Notes */}
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Additional Notes</label>
      <textarea 
        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
        rows={3}
        defaultValue={editMembership?.notes || ''}
      ></textarea>
    </div>
  </div>
  
  <div className="p-6 border-t border-gray-700 flex justify-end space-x-4">
    <button 
      type="button"
      onClick={() => setShowEditModal(false)}
      className="py-2 px-4 border border-gray-600 rounded-md text-white hover:bg-gray-700"
    >
      Cancel
    </button>
    <button 
      type="submit"
      className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      Save Changes
    </button>
  </div>
</form>
</div>
</div>
)}
</div>
</div>
)};

export default MembershipManagementPage;