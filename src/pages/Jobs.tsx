
import { Search, MapPin, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Jobs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Job Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect career opportunity from our curated job listings
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Search for jobs, skills, or companies..." 
                className="h-12"
              />
            </div>
            <div className="flex-1">
              <Input 
                placeholder="Location (City, State, or Remote)" 
                className="h-12"
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8">
              <Search className="w-5 h-5 mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>

        {/* No Jobs Message */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No Jobs Available Yet
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're currently building our job marketplace and connecting with amazing employers. 
              Be the first to know when new opportunities become available!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Remote & On-site
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Full-time & Part-time
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Competitive Salaries
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Join Our Talent Pool
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Get Job Alerts
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Job Matching</h3>
            <p className="text-gray-600">AI-powered matching based on your skills and preferences</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Applications</h3>
            <p className="text-gray-600">Apply to multiple jobs with one-click applications</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Salary Insights</h3>
            <p className="text-gray-600">Transparent salary ranges and market insights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
