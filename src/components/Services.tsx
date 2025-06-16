
import { BookOpen, ShoppingBag, UserPlus, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Academy",
      subtitle: "Learn & Upskill",
      description: "A place where women can find the right skill to career in some of the fastest growing sectors",
      icon: BookOpen,
      bgColor: "bg-purple-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/academy"
    },
    {
      title: "Marketplace",
      subtitle: "For Freelancers & Remote Work",
      description: "Connect with businesses looking for your specific skills and expertise",
      icon: ShoppingBag,
      bgColor: "bg-orange-500",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/marketplace"
    },
    {
      title: "Smart Registration",
      subtitle: "Guided Onboarding",
      description: "Get personalized career guidance and smart job matching based on your profile",
      icon: UserPlus,
      bgColor: "bg-orange-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/smart-registration"
    },
    {
      title: "Employers",
      subtitle: "Hire Incredible Women Talent",
      description: "Access a curated pool of skilled women professionals ready to contribute",
      icon: Building2,
      bgColor: "bg-purple-700",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/employers"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services, Your Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end career ecosystem designed to help you find, learn, and grow in your ideal role
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <service.icon size={32} className="mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-lg opacity-90">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="absolute right-4 bottom-4 w-32 h-32 rounded-xl overflow-hidden opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover brightness-50 contrast-125"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
