/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Pencil, Trash2, Plus, ChevronDown, Search, 
  Filter, X, Save, Bell, Menu, CheckCircle
} from 'lucide-react';
import Sidebar from '@/app/components/Sidebar';

// Trainer type definition
type Trainer = {
  id: number;
  name: string;
  categories: string[];
  image: string;
  title: string;
  brief: string;
  bio: string;
  credentials: string[];
  specialties: string[];
  quote: string;
};

const AdminTrainers: React.FC = () => {
  // State for trainers data
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTrainer, setCurrentTrainer] = useState<Trainer | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  
  // Sample trainer data
  const sampleTrainers: Trainer[] = [
    {
      id: 1,
      name: "ALEX REYNOLDS",
      categories: ["strength", "hiit"],
      image: "/api/placeholder/800/400",
      title: "Head Strength Coach",
      brief: "Former powerlifting champion with over 10 years of elite coaching experience.",
      bio: "Alex is a former national powerlifting champion who has dedicated his career to helping athletes and fitness enthusiasts reach their strength potential. With multiple certifications in strength and conditioning, Alex applies scientific principles to his programming while keeping workouts engaging and challenging. He specializes in powerlifting, Olympic lifting, and strength-based HIIT protocols that build both raw power and functional fitness.",
      credentials: [
        "MS in Exercise Physiology",
        "Certified Strength and Conditioning Specialist (CSCS)",
        "USA Powerlifting Level 2 Coach",
        "Former National Powerlifting Champion (220lb class)",
        "10+ years elite coaching experience"
      ],
      specialties: ["Powerlifting", "Athletic Performance", "Hypertrophy Training"],
      quote: "Strength isn't just about lifting weights – it's about building a foundation that empowers every aspect of your life."
    },
    {
      id: 2,
      name: "SARAH CHEN",
      categories: ["hiit", "cardio"],
      image: "/api/placeholder/800/400",
      title: "HIIT & Conditioning Specialist",
      brief: "Olympic sprinter turned fitness coach with expertise in high-intensity training protocols.",
      bio: "Sarah brings her experience as a former Olympic sprinter to deliver cutting-edge HIIT and conditioning programs. Her approach combines athletic principles with accessible fitness methodologies suitable for all levels. Sarah's sessions are known for their scientific precision, high energy, and remarkable results. She specializes in metabolic conditioning, sprint mechanics, and recovery optimization.",
      credentials: [
        "Former Olympic Sprinter",
        "BS in Kinesiology",
        "NASM Certified Personal Trainer",
        "Precision Nutrition Level 2 Coach",
        "TRX Suspension Training Specialist"
      ],
      specialties: ["HIIT Programming", "Sprint Mechanics", "Metabolic Conditioning"],
      quote: "The body achieves what the mind believes. Push your limits, find your fire, and watch the transformation happen."
    },
    {
      id: 3,
      name: "MARCUS WILLIAMS",
      categories: ["strength", "cardio"],
      image: "/api/placeholder/800/400",
      title: "Elite Performance Coach",
      brief: "Former NFL strength coach bringing professional sports training methods to fitness enthusiasts.",
      bio: "Marcus developed his expertise working with professional football players for over a decade. Now, he brings those elite training methodologies to everyday athletes and fitness enthusiasts. His holistic approach combines strength training, cardiovascular conditioning, mobility work, and recovery protocols. Marcus specializes in athletic development, injury prevention, and performance optimization for clients of all fitness levels.",
      credentials: [
        "Former NFL Strength & Conditioning Coach",
        "NSCA Certified Strength and Conditioning Specialist",
        "Functional Movement Screen (FMS) Level 2",
        "USA Weightlifting Sports Performance Coach",
        "BS in Exercise Science"
      ],
      specialties: ["Athletic Development", "Functional Strength", "Sport-Specific Training"],
      quote: "True fitness isn't just about looking good—it's about building a body that performs at its peak in every aspect of life."
    },
    {
      id: 4,
      name: "ELENA RODRIGUEZ",
      categories: ["hiit", "cardio"],
      image: "/api/placeholder/800/400",
      title: "Cardio & Endurance Specialist",
      brief: "Ultra-marathoner and exercise physiologist specializing in cardiovascular optimization.",
      bio: "Elena combines her experience as an ultra-marathoner with her academic background in exercise physiology to create science-backed cardio and endurance programs. She specializes in heart rate zone training, endurance building, and cardiovascular health optimization. Elena's approach focuses on building sustainable fitness through smart programming, proper progression, and recovery strategies tailored to each individual's unique physiology and goals.",
      credentials: [
        "PhD in Exercise Physiology",
        "Completed 15+ Ultra-Marathons",
        "ACSM Certified Exercise Physiologist",
        "Heart Rate Training Specialist",
        "Precision Nutrition Coach"
      ],
      specialties: ["Endurance Training", "Heart Rate Zone Training", "VO2 Max Improvement"],
      quote: "Endurance isn't about going hard all the time—it's about finding the perfect balance between effort, efficiency, and recovery."
    }
  ];
  
  // Initialize with sample data
  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setTrainers(sampleTrainers);
      setLoading(false);
    }, 500);
  }, []);
  
  // Add new trainer
  const addTrainer = () => {
    const newTrainer: Trainer = {
      id: trainers.length > 0 ? Math.max(...trainers.map(t => t.id)) + 1 : 1,
      name: "",
      categories: ["strength"],
      image: "/api/placeholder/800/400",
      title: "",
      brief: "",
      bio: "",
      credentials: [""],
      specialties: [""],
      quote: ""
    };
    
    setCurrentTrainer(newTrainer);
    setIsEditing(true);
  };
  
  // Edit trainer
  const editTrainer = (trainer: Trainer) => {
    setCurrentTrainer({...trainer});
    setIsEditing(true);
  };
  
  // Save trainer
  const saveTrainer = () => {
    if (!currentTrainer) return;
    
    if (currentTrainer.id === 0) {
      // Add new trainer
      const newId = trainers.length > 0 ? Math.max(...trainers.map(t => t.id)) + 1 : 1;
      const newTrainer = {...currentTrainer, id: newId};
      setTrainers([...trainers, newTrainer]);
    } else {
      // Update existing trainer
      setTrainers(trainers.map(t => t.id === currentTrainer.id ? currentTrainer : t));
    }
    
    setIsEditing(false);
    setCurrentTrainer(null);
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };
  
  // Delete trainer
  const deleteTrainer = (id: number) => {
    if (window.confirm('Are you sure you want to delete this trainer?')) {
      setTrainers(trainers.filter(t => t.id !== id));
      setShowSuccessMessage(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };
  
  // Cancel editing
  const cancelEditing = () => {
    setIsEditing(false);
    setCurrentTrainer(null);
  };
  
  // Add credential to trainer
  const addCredential = () => {
    if (currentTrainer) {
      setCurrentTrainer({
        ...currentTrainer,
        credentials: [...currentTrainer.credentials, ""]
      });
    }
  };
  
  // Remove credential from trainer
  const removeCredential = (index: number) => {
    if (currentTrainer) {
      const credentials = [...currentTrainer.credentials];
      credentials.splice(index, 1);
      setCurrentTrainer({
        ...currentTrainer,
        credentials
      });
    }
  };
  
  // Update credential
  const updateCredential = (index: number, value: string) => {
    if (currentTrainer) {
      const credentials = [...currentTrainer.credentials];
      credentials[index] = value;
      setCurrentTrainer({
        ...currentTrainer,
        credentials
      });
    }
  };
  
  // Add specialty to trainer
  const addSpecialty = () => {
    if (currentTrainer) {
      setCurrentTrainer({
        ...currentTrainer,
        specialties: [...currentTrainer.specialties, ""]
      });
    }
  };
  
  // Remove specialty from trainer
  const removeSpecialty = (index: number) => {
    if (currentTrainer) {
      const specialties = [...currentTrainer.specialties];
      specialties.splice(index, 1);
      setCurrentTrainer({
        ...currentTrainer,
        specialties
      });
    }
  };
  
  // Update specialty
  const updateSpecialty = (index: number, value: string) => {
    if (currentTrainer) {
      const specialties = [...currentTrainer.specialties];
      specialties[index] = value;
      setCurrentTrainer({
        ...currentTrainer,
        specialties
      });
    }
  };
  
  // Add category to trainer
  const addCategory = (category: string) => {
    if (currentTrainer) {
      if (!currentTrainer.categories.includes(category)) {
        setCurrentTrainer({
          ...currentTrainer,
          categories: [...currentTrainer.categories, category]
        });
      }
    }
  };
  
  // Remove category from trainer
  const removeCategory = (category: string) => {
    if (currentTrainer) {
      setCurrentTrainer({
        ...currentTrainer,
        categories: currentTrainer.categories.filter(c => c !== category)
      });
    }
  };
  
  // Filter trainers based on search and category
  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         trainer.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || trainer.categories.includes(filterCategory);
    
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
              <span>Trainer successfully {currentTrainer ? 'updated' : 'deleted'}!</span>
              <button onClick={() => setShowSuccessMessage(false)} className="ml-4 text-green-200 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          
          {/* Header and Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-100">Trainer Management</h2>
              <p className="text-gray-400">Create, edit, and manage all gym trainers</p>
            </div>
            
            <button 
              onClick={addTrainer}
              className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Add New Trainer</span>
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
                    placeholder="Search trainers..."
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
                    <option value="all">All Specializations</option>
                    <option value="strength">Strength</option>
                    <option value="hiit">HIIT</option>
                    <option value="cardio">Cardio</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
              
              {/* Trainers Grid */}
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTrainers.map((trainer) => (
                    <div key={trainer.id} className="bg-gray-800 rounded-lg shadow overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image 
                          src={trainer.image} 
                          alt={trainer.name}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex space-x-2">
                          <button 
                            onClick={() => editTrainer(trainer)}
                            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => deleteTrainer(trainer.id)}
                            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                          <div className="flex flex-wrap gap-2">
                            {trainer.categories.map((category, idx) => (
                              <span key={idx} className="inline-block px-3 py-1 text-xs font-semibold bg-red-600 text-white rounded-full capitalize">
                                {category}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-100">{trainer.name}</h3>
                        <p className="text-red-500 text-sm font-semibold mt-1">{trainer.title}</p>
                        <p className="text-gray-400 text-sm mt-2">{trainer.brief}</p>
                        <div className="mt-3 text-xs text-gray-500">
                          <span className="font-semibold">Specialties:</span> {trainer.specialties.join(', ')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* No results message */}
              {!loading && filteredTrainers.length === 0 && (
                <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-8 mt-4">
                  <p className="text-gray-400 text-lg">No trainers found matching your search criteria.</p>
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
            /* Edit/Add Trainer Form */
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-100 mb-6">
                {currentTrainer?.id ? 'Edit Trainer' : 'Add New Trainer'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Trainer Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentTrainer?.name || ''}
                    onChange={(e) => setCurrentTrainer(currentTrainer ? {...currentTrainer, name: e.target.value} : null)}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Title</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentTrainer?.title || ''}
                    onChange={(e) => setCurrentTrainer(currentTrainer ? {...currentTrainer, title: e.target.value} : null)}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Image URL</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentTrainer?.image || ''}
                    onChange={(e) => setCurrentTrainer(currentTrainer ? {...currentTrainer, image: e.target.value} : null)}
                    placeholder="/api/placeholder/800/400"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Categories</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["strength", "hiit", "cardio"].map((category) => (
                      <div 
                        key={category}
                        onClick={() => currentTrainer?.categories.includes(category) 
                          ? removeCategory(category) 
                          : addCategory(category)
                        }
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                          currentTrainer?.categories.includes(category)
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">Brief Introduction</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentTrainer?.brief || ''}
                    onChange={(e) => setCurrentTrainer(currentTrainer ? {...currentTrainer, brief: e.target.value} : null)}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">Full Biography</label>
                  <textarea 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
                    value={currentTrainer?.bio || ''}
                    onChange={(e) => setCurrentTrainer(currentTrainer ? {...currentTrainer, bio: e.target.value} : null)}
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">Motivational Quote</label>
                  <textarea 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={currentTrainer?.quote || ''}
                    onChange={(e) => setCurrentTrainer(currentTrainer ? {...currentTrainer, quote: e.target.value} : null)}
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-gray-400">Credentials</label>
                    <button
                      type="button"
                      onClick={addCredential}
                      className="text-sm flex items-center text-red-400 hover:text-red-300"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Credential
                    </button>
                  </div>
                  
                  {currentTrainer?.credentials.map((credential, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input 
                        type="text" 
                        className="flex-grow bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={credential}
                        onChange={(e) => updateCredential(index, e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => removeCredential(index)}
                        className="ml-2 p-2 bg-gray-700 text-red-400 rounded hover:bg-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-gray-400">Specialties</label>
                    <button
                      type="button"
                      onClick={addSpecialty}
                      className="text-sm flex items-center text-red-400 hover:text-red-300"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Specialty
                    </button>
                  </div>
                  
                  {currentTrainer?.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input 
                        type="text" 
                        className="flex-grow bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={specialty}
                        onChange={(e) => updateSpecialty(index, e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => removeSpecialty(index)}
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
                  onClick={saveTrainer}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Trainer
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminTrainers;