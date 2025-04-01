/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Pencil, Trash2, Plus, ChevronDown, Search, 
  Filter, X, Save, Bell, Menu, CheckCircle
} from 'lucide-react';
import Sidebar from '@/app/components/Sidebar';

// Program type definition
type Program = {
  id: number;
  title: string;
  category: string;
  image: string;
  brief: string;
  description: string;
  features: string[];
  schedule: string;
};

const AdminPrograms: React.FC = () => {
  // State for programs data
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentProgram, setCurrentProgram] = useState<Program | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  
  // Sample program data with placeholder images instead of unsplash URLs
  const samplePrograms: Program[] = [
    {
      id: 1,
      title: "POWER LIFTING",
      category: "strength",
      image: "/api/placeholder/800/400",
      brief: "Master the art of strength with our comprehensive powerlifting program.",
      description: "Our elite Power Lifting program is designed for those who want to push their strength to the absolute limit. Under the guidance of our certified strength coaches, you'll master the three main lifts: squat, bench press, and deadlift. This program includes personalized training protocols, form correction, competition preparation, and advanced recovery techniques. Perfect for both competitive lifters and those looking to build raw strength.",
      features: [
        "Expert coaching from certified powerlifting instructors",
        "Personalized programming based on your current strength levels",
        "Form analysis and technique correction",
        "Progressive overload methodology",
        "Competition preparation for those interested in competing"
      ],
      schedule: "Mon/Wed/Fri 6am-8pm, Sat 8am-2pm"
    },
    {
      id: 2,
      title: "FORGE HIIT",
      category: "hiit",
      image: "/api/placeholder/800/400",
      brief: "Intense interval training to maximize calorie burn and cardiovascular fitness.",
      description: "FORGE HIIT is our signature high-intensity interval training program that will push your limits and transform your body. This 45-minute class combines explosive cardio bursts with strength-building exercises to maximize calorie burn and trigger the afterburn effect. You'll rotate through multiple stations that challenge every muscle group while improving your speed, agility, and endurance. Each class is different, ensuring your body never adapts and results never plateau.",
      features: [
        "45-minute scientifically optimized workout sessions",
        "Combination of bodyweight, free weight, and functional equipment",
        "Heart rate monitoring to ensure optimal intensity",
        "Modified exercises available for all fitness levels",
        "Burn up to 800 calories per session with afterburn benefits"
      ],
      schedule: "Daily classes at 6am, 12pm, 5pm and 7pm"
    },
    {
      id: 3,
      title: "PRECISION CARDIO",
      category: "cardio",
      image: "/api/placeholder/800/400",
      brief: "Science-backed cardio protocols for optimal heart health and endurance.",
      description: "Precision Cardio takes traditional cardio training to the next level by implementing heart-rate zone training, interval protocols, and endurance-building techniques. Unlike mindless treadmill sessions, each Precision Cardio workout has a specific purpose—whether it's improving your VO2 max, increasing lactate threshold, or enhancing recovery. Our coaches will guide you through various cardio modalities including treadmills, rowing machines, assault bikes, and more to create well-rounded cardiovascular fitness.",
      features: [
        "Heart rate zone training with real-time feedback",
        "Personalized cardio assessment and goal setting",
        "Varied cardio modalities to prevent plateaus",
        "Endurance-building protocols for athletic performance",
        "Fat-burning focused sessions for weight management"
      ],
      schedule: "Tue/Thu 7am-9pm, Sat/Sun 9am-3pm"
    },
    {
      id: 4,
      title: "OLYMPIC LIFTING",
      category: "strength",
      image: "/api/placeholder/800/400",
      brief: "Technical coaching for clean, jerk, and snatch movements.",
      description: "Our Olympic Lifting program focuses on mastering the clean, jerk, and snatch with precision and power. Led by national-level Olympic lifting coaches, this program emphasizes technique first, followed by progressive loading. You'll develop explosive power, improve mobility, and gain a new appreciation for these technically demanding lifts. The program includes video analysis, mobility work specific to Olympic lifting, and periodized training cycles to help you reach new personal records.",
      features: [
        "Technical breakdown of clean, jerk, and snatch movements",
        "Video analysis and immediate feedback on form",
        "Mobility work specific to Olympic lifting demands",
        "Periodized training cycles for competition or personal goals",
        "Small group format (max 6 athletes) for individualized attention"
      ],
      schedule: "Mon/Wed/Fri 5pm-7pm, Sat 11am-1pm"
    }
  ];
  
  // Initialize with sample data
  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setPrograms(samplePrograms);
      setLoading(false);
    }, 500);
  }, []);
  
  // Add new program
  const addProgram = () => {
    const newProgram: Program = {
      id: programs.length > 0 ? Math.max(...programs.map(p => p.id)) + 1 : 1,
      title: "",
      category: "strength",
      image: "/api/placeholder/800/400",
      brief: "",
      description: "",
      features: [""],
      schedule: ""
    };
    
    setCurrentProgram(newProgram);
    setIsEditing(true);
  };
  
  // Edit program
  const editProgram = (program: Program) => {
    setCurrentProgram({...program});
    setIsEditing(true);
  };
  
  // Save program
  const saveProgram = () => {
    if (!currentProgram) return;
    
    if (currentProgram.id === 0) {
      // Add new program
      const newId = programs.length > 0 ? Math.max(...programs.map(p => p.id)) + 1 : 1;
      const newProgram = {...currentProgram, id: newId};
      setPrograms([...programs, newProgram]);
    } else {
      // Update existing program
      setPrograms(programs.map(p => p.id === currentProgram.id ? currentProgram : p));
    }
    
    setIsEditing(false);
    setCurrentProgram(null);
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };
  
  // Delete program
  const deleteProgram = (id: number) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      setPrograms(programs.filter(p => p.id !== id));
      setShowSuccessMessage(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };
  
  // Cancel editing
  const cancelEditing = () => {
    setIsEditing(false);
    setCurrentProgram(null);
  };
  
  // Add feature to program
  const addFeature = () => {
    if (currentProgram) {
      setCurrentProgram({
        ...currentProgram,
        features: [...currentProgram.features, ""]
      });
    }
  };
  
  // Remove feature from program
  const removeFeature = (index: number) => {
    if (currentProgram) {
      const features = [...currentProgram.features];
      features.splice(index, 1);
      setCurrentProgram({
        ...currentProgram,
        features
      });
    }
  };
  
  // Update feature
  const updateFeature = (index: number, value: string) => {
    if (currentProgram) {
      const features = [...currentProgram.features];
      features[index] = value;
      setCurrentProgram({
        ...currentProgram,
        features
      });
    }
  };
  
  // Filter programs based on search and category
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || program.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar defaultOpen={true} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar - Simplified for the example */}
        <header className="bg-gray-800 shadow-md">
          <div className="flex items-center justify-between p-4">
            <button className="text-gray-300 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center">
              <div className="relative mr-4">
                <Bell className="w-6 h-6 text-gray-300 cursor-pointer" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </div>
              
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
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-6">
          {/* Success Message */}
          {showSuccessMessage && (
            <div className="fixed top-6 right-6 bg-green-900 text-green-100 px-4 py-3 rounded shadow-lg flex items-center z-50">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Program successfully {currentProgram ? 'updated' : 'deleted'}!</span>
              <button onClick={() => setShowSuccessMessage(false)} className="ml-4 text-green-200 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          
          {/* Header and Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-100">Program Management</h2>
              <p className="text-gray-400">Create, edit, and manage all gym programs</p>
            </div>
            
            <button 
              onClick={addProgram}
              className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Add New Program</span>
            </button>
          </div>
          
          {!isEditing ? (
            <>
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search programs..."
                    className="pl-10 pr-4 py-2 w-full bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 pr-8 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="strength">Strength</option>
                    <option value="hiit">HIIT</option>
                    <option value="cardio">Cardio</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
              
              {/* Programs Grid */}
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPrograms.map((program) => (
                    <div key={program.id} className="bg-gray-800 rounded-lg shadow overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image 
                          src={program.image} 
                          alt={program.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex space-x-2">
                          <button 
                            onClick={() => editProgram(program)}
                            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => deleteProgram(program.id)}
                            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-600 text-white rounded-full capitalize">
                            {program.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-100">{program.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{program.brief}</p>
                        <div className="mt-3 text-xs text-gray-500">
                          <span className="font-semibold">Schedule:</span> {program.schedule}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* No results message */}
              {!loading && filteredPrograms.length === 0 && (
                <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-8 mt-4">
                  <p className="text-gray-400 text-lg">No programs found matching your search criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setFilterCategory('all');
                    }}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Edit/Add Program Form */
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-100 mb-6">
                {currentProgram?.id ? 'Edit Program' : 'Add New Program'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Program Title</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentProgram?.title || ''}
                    onChange={(e) => setCurrentProgram(currentProgram ? {...currentProgram, title: e.target.value} : null)}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Category</label>
                  <select 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentProgram?.category || ''}
                    onChange={(e) => setCurrentProgram(currentProgram ? {...currentProgram, category: e.target.value} : null)}
                  >
                    <option value="strength">Strength</option>
                    <option value="hiit">HIIT</option>
                    <option value="cardio">Cardio</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Image URL</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentProgram?.image || ''}
                    onChange={(e) => setCurrentProgram(currentProgram ? {...currentProgram, image: e.target.value} : null)}
                    placeholder="/api/placeholder/800/400"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Schedule</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentProgram?.schedule || ''}
                    onChange={(e) => setCurrentProgram(currentProgram ? {...currentProgram, schedule: e.target.value} : null)}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">Brief Description</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentProgram?.brief || ''}
                    onChange={(e) => setCurrentProgram(currentProgram ? {...currentProgram, brief: e.target.value} : null)}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">Full Description</label>
                  <textarea 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
                    value={currentProgram?.description || ''}
                    onChange={(e) => setCurrentProgram(currentProgram ? {...currentProgram, description: e.target.value} : null)}
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-gray-400">Features</label>
                    <button
                      type="button"
                      onClick={addFeature}
                      className="text-sm flex items-center text-red-400 hover:text-red-300"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Feature
                    </button>
                  </div>
                  
                  {currentProgram?.features.map((feature, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input 
                        type="text" 
                        className="flex-grow bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={feature}
                        onChange={(e) => updateFeature(index, e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="ml-2 p-2 bg-gray-700 text-red-400 rounded hover:bg-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end mt-6 space-x-4">
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveProgram}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Program
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPrograms;