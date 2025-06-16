
import { Search, Star, MapPin, Clock, DollarSign, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";

const Marketplace = () => {
  const categories = [
    "Web Development", "Graphic Design", "Digital Marketing", "Content Writing",
    "Data Analysis", "Mobile Development", "UI/UX Design", "Social Media"
  ];

  const freelancers = [
    {
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      rating: "4.9",
      reviews: "127",
      hourlyRate: "$45",
      location: "Remote",
      skills: ["React", "Node.js", "Python"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Chen",
      title: "UI/UX Designer",
      rating: "4.8",
      reviews: "89",
      hourlyRate: "$38",
      location: "San Francisco, CA",
      skills: ["Figma", "Adobe XD", "Sketch"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Maria Rodriguez",
      title: "Digital Marketing Specialist",
      rating: "4.9",
      reviews: "156",
      hourlyRate: "$35",
      location: "Remote",
      skills: ["SEO", "Google Ads", "Analytics"],
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Freelance Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with talented women freelancers ready to bring your projects to life
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="Search for skills, services, or freelancers..." 
                  className="h-12"
                />
              </div>
              <div className="flex-1">
                <Input 
                  placeholder="Category or specialization" 
                  className="h-12"
                />
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Freelancers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Freelancers</h2>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelancers.map((freelancer, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{freelancer.name}</h3>
                    <p className="text-gray-600">{freelancer.title}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="font-semibold mr-2">{freelancer.rating}</span>
                  <span className="text-gray-500">({freelancer.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{freelancer.location}</span>
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    {freelancer.hourlyRate}/hr
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Freelance Journey?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join our marketplace and connect with clients looking for your skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Become a Freelancer
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
              Post a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
