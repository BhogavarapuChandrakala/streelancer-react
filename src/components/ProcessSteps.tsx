
const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Build a comprehensive profile showcasing your skills, experience, and career aspirations",
      color: "bg-purple-600"
    },
    {
      number: "2",
      title: "Smart Routing",
      description: "Our AI-powered system matches you with the most suitable opportunities and resources",
      color: "bg-pink-500"
    },
    {
      number: "3",
      title: "Learn & Build Portfolio",
      description: "Access curated learning programs and build a portfolio that showcases your expertise",
      color: "bg-orange-500"
    },
    {
      number: "4",
      title: "Get Hired",
      description: "Connect with employers actively seeking talented professionals like you",
      color: "bg-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Fit, Your Way
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple 4-step process to kickstart your career journey with personalized guidance every step of the way
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
