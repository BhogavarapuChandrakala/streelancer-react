import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Users, Star, MessageCircle, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    experience: '',
    interests: [] as string[],
    bio: '',
    newsletter: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the Community!",
        description: "You're now part of the Streelancer community. Check your email for next steps!",
      });
      onClose();
    }, 1500);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const interests = [
    'Web Development', 'Mobile Development', 'UI/UX Design', 'Graphic Design',
    'Digital Marketing', 'Content Writing', 'Data Science', 'AI/ML',
    'Photography', 'Video Editing', 'Social Media', 'SEO'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-purple-800 flex items-center justify-center gap-2">
            <Users className="w-6 h-6" />
            Join Our Community
          </DialogTitle>
          <p className="text-center text-gray-600 mt-2">
            Connect with fellow freelancers, share experiences, and grow together
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">Premium Support</h3>
            <p className="text-sm text-gray-600">Get priority help</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">Community Chat</h3>
            <p className="text-sm text-gray-600">24/7 discussions</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">Exclusive Resources</h3>
            <p className="text-sm text-gray-600">Tools & templates</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="community-name">Full Name *</Label>
              <Input
                id="community-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="community-email">Email *</Label>
              <Input
                id="community-email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="profession">Profession *</Label>
              <Select value={formData.profession} onValueChange={(value) => setFormData({...formData, profession: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your profession" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="writer">Writer</SelectItem>
                  <SelectItem value="marketer">Marketer</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level</Label>
              <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                  <SelectItem value="expert">Expert (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Areas of Interest (Select all that apply)</Label>
            <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
              {interests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                  />
                  <Label htmlFor={interest} className="text-sm">{interest}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Tell us about yourself (Optional)</Label>
            <Textarea
              id="bio"
              placeholder="Share your background, goals, or what you're looking for in the community..."
              className="min-h-[80px]"
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
            />
            <Label htmlFor="newsletter" className="text-sm">
              I want to receive community updates and newsletters
            </Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
            disabled={isLoading}
          >
            {isLoading ? "Joining Community..." : "Join Community"}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By joining, you agree to our community guidelines and terms of service.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
