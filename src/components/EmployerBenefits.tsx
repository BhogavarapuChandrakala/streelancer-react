
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const EmployerBenefits = () => {
  const stats = [
    { number: "2M+", label: "Verified Professionals" },
    { number: "50K+", label: "Successful Placements" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Diverse Talent Pool",
      description: "Access to a curated community of skilled women professionals"
    },
    {
      icon: Target,
      title: "Precise Matching",
      description: "AI-powered matching system for better candidate-role fit"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All candidates are verified and skill-assessed"
    },
    {
      icon: TrendingUp,
      title: "Faster Hiring",
      description: "Streamlined process reduces time-to-hire by 60%"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find The Right Person For The Job
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with talented professionals who are ready to make an impact in your organization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Why Employers Choose Streelancer?
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <benefit.icon size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              Post a Job
            </Button>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Be a part of Streelancer
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 Dedicated Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>100+ Verified Skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Global Talent Network</span>
                </div>
              </div>
              <Button className="bg-white text-orange-600 hover:bg-gray-100">
                Get Started
              </Button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerBenefits;
