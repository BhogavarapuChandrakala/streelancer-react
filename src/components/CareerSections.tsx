
import { Button } from "@/components/ui/button";

const CareerSections = () => {
  const sections = [
    {
      title: "Career Resources",
      description: "Comprehensive guides and resources to help you navigate your career journey with confidence",
      bgColor: "bg-gradient-to-r from-pink-400 to-pink-300",
      textColor: "text-white",
      image: "https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=B3WbJ7VFEr77G0T698I0WMkM5LOV-pMrLCljEEJGh-o=",
      buttonText: "Explore Resources"
    },
    {
      title: "Silver Generation",
      description: "Specialized programs and opportunities designed for experienced professionals looking to restart their careers",
      bgColor: "bg-slate-600",
      textColor: "text-white",
      image: "https://t3.ftcdn.net/jpg/03/36/05/86/360_F_336058687_NP3DNy2ZUlIP7niM0NaFnTLglY50hqiu.jpg",
      buttonText: "Learn More"
    },
    {
      title: "LGBTQIA+ Talent",
      description: "Creating inclusive opportunities and safe spaces for LGBTQIA+ professionals to thrive in their careers",
      bgColor: "bg-teal-600",
      textColor: "text-white",
      image: "https://media.istockphoto.com/id/1353371742/photo/a-young-woman-working-from-home-with-a-laptop.jpg?s=612x612&w=0&k=20&c=SRfyOMbxtrTCk-4K7403FtC3oDrIAXPqr2ttz4fzwXs=",
      buttonText: "Join Community"
    },
    {
      title: "Tech Freelancers & Startups",
      description: "Connect with innovative startups and tech companies looking for freelance talent and remote workers",
      bgColor: "bg-yellow-500",
      textColor: "text-gray-900",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "Find Projects"
    },
    {
      title: "Persons with Disabilities (PWD)",
      description: "Accessible career opportunities and supportive environment for persons with disabilities to excel professionally",
      bgColor: "bg-teal-700",
      textColor: "text-white",
      image: "https://media.istockphoto.com/id/1079013008/photo/woman-with-disability-working.jpg?s=612x612&w=0&k=20&c=le0nepVBlrqVqPl8p17Qn4Y0H5WlPYicyB8D_go_qlc=",
      buttonText: "Get Started"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Fit, Your Way
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized programs and opportunities designed for every unique career journey and background
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`${section.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className={`text-3xl font-bold mb-4 ${section.textColor}`}>
                    {section.title}
                  </h3>
                  <p className={`text-lg mb-6 ${section.textColor} opacity-90 leading-relaxed`}>
                    {section.description}
                  </p>
                  <Button
                    className={`w-fit ${
                      section.textColor === "text-white"
                        ? "bg-white text-gray-900 hover:bg-gray-100"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {section.buttonText}
                  </Button>
                </div>
                <div className="h-64 md:h-auto">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSections;
