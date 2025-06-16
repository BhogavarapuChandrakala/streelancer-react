
import { useState } from "react";
import { CheckCircle, ArrowRight, User, Briefcase, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const SmartRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    careerInfo: { currentStatus: "", experience: "", industry: "" },
    preferences: { workType: "", location: "", salary: "" },
    goals: { careerGoals: "", timeline: "", skills: "" }
  });

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Career Background", icon: Briefcase },
    { number: 3, title: "Preferences", icon: Target },
    { number: 4, title: "Goals", icon: Star }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tell us about yourself</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.personalInfo.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, name: e.target.value }
                  })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.personalInfo.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, email: e.target.value }
                  })}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.personalInfo.phone}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, phone: e.target.value }
                  })}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Career Background</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentStatus">Current Status *</Label>
                <Select value={formData.careerInfo.currentStatus} onValueChange={(value) => setFormData({
                  ...formData,
                  careerInfo: { ...formData.careerInfo, currentStatus: value }
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="returning">Returning to work</SelectItem>
                    <SelectItem value="career-change">Career change</SelectItem>
                    <SelectItem value="recent-graduate">Recent graduate</SelectItem>
                    <SelectItem value="currently-employed">Currently employed</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Select value={formData.careerInfo.experience} onValueChange={(value) => setFormData({
                  ...formData,
                  careerInfo: { ...formData.careerInfo, experience: value }
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="2-5">2-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="industry">Industry/Field</Label>
                <Select value={formData.careerInfo.industry} onValueChange={(value) => setFormData({
                  ...formData,
                  careerInfo: { ...formData.careerInfo, industry: value }
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Preferences</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="workType">Preferred Work Type</Label>
                <Select value={formData.preferences.workType} onValueChange={(value) => setFormData({
                  ...formData,
                  preferences: { ...formData.preferences, workType: value }
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select work type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Preferred Location</Label>
                <Input
                  id="location"
                  placeholder="City, State or Remote"
                  value={formData.preferences.location}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferences: { ...formData.preferences, location: e.target.value }
                  })}
                />
              </div>
              <div>
                <Label htmlFor="salary">Expected Salary Range</Label>
                <Select value={formData.preferences.salary} onValueChange={(value) => setFormData({
                  ...formData,
                  preferences: { ...formData.preferences, salary: value }
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select salary range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30-50k">$30,000 - $50,000</SelectItem>
                    <SelectItem value="50-70k">$50,000 - $70,000</SelectItem>
                    <SelectItem value="70-100k">$70,000 - $100,000</SelectItem>
                    <SelectItem value="100k+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Goals</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="careerGoals">Career Goals</Label>
                <Textarea
                  id="careerGoals"
                  placeholder="What are your career aspirations?"
                  className="min-h-[100px]"
                  value={formData.goals.careerGoals}
                  onChange={(e) => setFormData({
                    ...formData,
                    goals: { ...formData.goals, careerGoals: e.target.value }
                  })}
                />
              </div>
              <div>
                <Label htmlFor="timeline">Timeline</Label>
                <Select value={formData.goals.timeline} onValueChange={(value) => setFormData({
                  ...formData,
                  goals: { ...formData.goals, timeline: value }
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you want to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6-12-months">6-12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="skills">Skills to Develop</Label>
                <Textarea
                  id="skills"
                  placeholder="What skills would you like to learn or improve?"
                  className="min-h-[80px]"
                  value={formData.goals.skills}
                  onChange={(e) => setFormData({
                    ...formData,
                    goals: { ...formData.goals, skills: e.target.value }
                  })}
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  currentStep >= step.number 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`font-medium ${
                    currentStep >= step.number ? 'text-orange-600' : 'text-gray-500'
                  }`}>
                    Step {step.number}
                  </p>
                  <p className="text-sm text-gray-600">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-20 h-1 mx-8 ${
                    currentStep > step.number ? 'bg-orange-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-6"
            >
              Previous
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                className="bg-orange-600 hover:bg-orange-700 px-6"
              >
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button className="bg-orange-600 hover:bg-orange-700 px-8">
                Complete Registration
              </Button>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Personalized Matching</h3>
            <p className="text-gray-600 text-sm">Get job recommendations tailored to your profile</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Career Guidance</h3>
            <p className="text-gray-600 text-sm">Receive expert advice on your career journey</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Priority Access</h3>
            <p className="text-gray-600 text-sm">Get early access to new opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartRegistration;
