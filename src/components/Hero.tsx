import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-blue-50 animate-float"></div>
      <div
        className="absolute bottom-12 left-8 w-32 h-32 rounded-full bg-indigo-50 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="animate-on-scroll opacity-0 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              <span className="block">Recruitment, Reimagined</span>
              <span className="text-blue-600">Business Growth</span>
            </h1>

            <p className="animate-on-scroll opacity-0 delay-200 text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              We go beyond resumes. Absolead delivers tailored hiring solutions
              designed to fuel your next phase of growth—domestically and
              globally.
            </p>

            <div className="animate-on-scroll opacity-0 delay-300 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center w-full sm:w-auto"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#about" className="btn-secondary w-full sm:w-auto">
                Learn More
              </a>
            </div>

           
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="animate-on-scroll opacity-0 delay-200 relative w-full max-w-lg mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-xl transform -rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-indigo-100 rounded-xl transform rotate-6"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="w-full h-64 md:h-96 overflow-hidden">
  <img 
    src="/images/home.jpg" 
    alt="Hero" 
    className="w-full h-full object-cover"
  />
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
