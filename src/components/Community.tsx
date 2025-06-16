
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Calendar, BookOpen } from "lucide-react";

const Community = () => {
  const features = [
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with professionals worldwide"
    },
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Share insights and get advice"
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Webinars, workshops, and networking"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access exclusive career resources"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Join Streelancer Community!
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Be part of a supportive community of ambitious women professionals. 
              Share experiences, learn from others, and grow together in your career journey.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Join Community
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
                  <div className="text-white">
                    <h4 className="font-semibold">Sarah M.</h4>
                    <p className="text-sm opacity-80">Software Engineer</p>
                  </div>
                </div>
                <p className="text-white opacity-90">
                  "Streelancer helped me transition back to tech after a 3-year career break. 
                  The community support and learning resources were invaluable!"
                </p>
              </div>
            </div>
            
            <div className="absolute -right-4 -bottom-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white text-center">
                <div className="text-2xl font-bold mb-1">50K+</div>
                <div className="text-sm opacity-80">Active Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
