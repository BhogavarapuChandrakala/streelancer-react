
import { Users, Target, Award, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

const Employers = () => {
  const stats = [
    { number: "2M+", label: "Verified Professionals" },
    { number: "50K+", label: "Successful Placements" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "60%", label: "Faster Hiring" }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Diverse Talent Pool",
      description: "Access to a curated community of skilled women professionals across all industries"
    },
    {
      icon: Target,
      title: "Precise Matching",
      description: "AI-powered matching system ensures better candidate-role fit and higher success rates"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All candidates are verified, skill-assessed, and ready to contribute from day one"
    },
    {
      icon: TrendingUp,
      title: "Faster Hiring",
      description: "Streamlined process reduces time-to-hire by 60% compared to traditional methods"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      title: "HR Director",
      company: "TechCorp Inc.",
      quote: "Streelancer helped us find amazing talent. The quality of candidates is exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Startup Founder",
      company: "InnovateNow",
      quote: "We've hired 5 incredible women through Streelancer. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hire Incredible Women Talent
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with skilled, motivated women professionals who are ready to make 
                an impact in your organization. Build diverse teams that drive innovation.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg">
                  Post a Job
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                  Browse Talent
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold">500+ Active Candidates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Employers Choose Streelancer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to find, evaluate, and hire the best talent for your team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to find your next great hire</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Post Your Job</h3>
              <p className="text-gray-600">Create a detailed job posting with requirements and preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Review Candidates</h3>
              <p className="text-gray-600">Browse matched profiles and review portfolios and experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Make Your Hire</h3>
              <p className="text-gray-600">Interview, select, and onboard your ideal candidate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl opacity-90 mb-6">
                Join hundreds of companies that trust Streelancer to find exceptional talent.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  No upfront costs or hidden fees
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  30-day satisfaction guarantee
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Tell us about your hiring needs</Label>
                  <Textarea id="message" placeholder="What roles are you looking to fill?" className="min-h-[100px]" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;
