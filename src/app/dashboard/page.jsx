'use client';
import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Search, 
  Filter, 
  Eye, 
  TrendingUp, 
  TrendingDown, 
  Building, 
  DollarSign, 
  Users, 
  Home,
  Calendar,
  BarChart3,
  User,
  MessageSquare,
  Settings,
  HelpCircle,
  Bell,
  Download
} from 'lucide-react';

// Sample data
const metricsData = [
  {
    title: "Properties Managed",
    value: "4860",
    change: "+98%",
    trend: "up",
    icon: Building,
    color: "bg-teal-500"
  },
  {
    title: "Asset Value",
    value: "$2B",
    change: "+72%",
    trend: "up",
    icon: DollarSign,
    color: "bg-blue-500"
  },
  {
    title: "Properties Sold",
    value: "1037",
    change: "+44.2%",
    trend: "up",
    icon: Home,
    color: "bg-yellow-500"
  },
  {
    title: "New Clients",
    value: "895",
    change: "+70%",
    trend: "up",
    icon: Users,
    color: "bg-purple-500"
  }
];

const statusData = [
  { name: 'Accepted', value: 1037, color: '#3B82F6' },
  { name: 'Rejected', value: 486, color: '#F59E0B' },
  { name: 'Counter', value: 165, color: '#8B5CF6' },
  { name: 'Pending', value: 166, color: '#10B981' }
];

const revenueData = [
  { month: 'Jan', deals: 4200, value: 5800 },
  { month: 'Feb', deals: 4800, value: 6200 },
  { month: 'Mar', deals: 3900, value: 5400 },
  { month: 'Apr', deals: 5200, value: 6800 },
  { month: 'May', deals: 4100, value: 5600 },
  { month: 'Jun', deals: 3800, value: 5200 },
  { month: 'Jul', deals: 4600, value: 6000 },
  { month: 'Aug', deals: 5400, value: 7200 },
  { month: 'Sep', deals: 5800, value: 7600 },
  { month: 'Oct', deals: 5200, value: 6800 },
  { month: 'Nov', deals: 4400, value: 5800 },
  { month: 'Dec', deals: 4800, value: 6200 }
];

const properties = [
  {
    id: 1,
    name: "Sunset Retreat Villa",
    location: "Austin, Texas",
    price: "$7548",
    beds: 3,
    baths: 2,
    sqft: "1400 sqft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Riverside Haven",
    location: "Portland, Oregon",
    price: "$1548",
    beds: 4,
    baths: 3,
    sqft: "2000 sqft",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Mountain View Villa",
    location: "Boulder, Colorado",
    price: "$2048",
    beds: 2,
    baths: 2,
    sqft: "1400 sqft",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Ocean Breeze Cottage",
    location: "San Diego, California",
    price: "$6948",
    beds: 2,
    baths: 1,
    sqft: "1200 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
  }
];

const sidebarItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: Building, label: 'My Property' },
  { icon: BarChart3, label: 'Analytic' },
  { icon: Calendar, label: 'Transaction' },
  { icon: TrendingUp, label: 'Cashflow' },
  { icon: User, label: 'Customer' },
  { icon: MessageSquare, label: 'Message' },
  { icon: HelpCircle, label: 'User Guide' },
  { icon: HelpCircle, label: 'FAQ' },
  { icon: Settings, label: 'Help Center' }
];

export default function PropertyDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('26 June 2025');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Estate</span>
          </div>
        </div>
        
        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer ${
                item.active ? 'bg-teal-50 text-teal-600 border-r-2 border-teal-500' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">AI Assistant</span>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{selectedDate}</span>
              </div>
              <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border hover:bg-gray-50">
                <Download className="w-4 h-4" />
                <span className="text-sm">Export</span>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center space-x-2">
                <span className="text-sm">Add Property</span>
              </button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metricsData.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.color}`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                      {metric.change}
                    </span>
                    <span className="text-gray-500">Last year</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.title}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Status Analysis */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Status Analysis</h3>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
                  <option>Last year</option>
                  <option>This year</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  {statusData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                      <div>
                        <p className="text-sm text-gray-600">{item.name}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Generation */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Revenue Generation</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-teal-200 rounded-full"></div>
                    <span className="text-gray-600">Deals</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-600">Deal value</span>
                  </div>
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
                    <option>Last year</option>
                    <option>This year</option>
                  </select>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="deals" fill="#B2F5EA" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="value" fill="#319795" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Explore Your Properties</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm">Filter</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {properties.map((property) => (
                  <div key={property.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">{property.name}</h4>
                      <p className="text-sm text-gray-600">{property.location}</p>
                      <p className="text-lg font-bold text-gray-800">{property.price}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{property.beds} beds</span>
                        <span>{property.baths} baths</span>
                        <span>{property.sqft}</span>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <button className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                               Book a call
                        </button>
                        <button className="flex-1 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                          Book a call
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}