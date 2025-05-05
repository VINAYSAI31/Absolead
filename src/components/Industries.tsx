import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Industry = {
  title: string;
  description: string;
  imageUrl: string;
};

export const Industries: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const industriesRef = useRef<HTMLDivElement>(null);

  const industries: Industry[] = [
    {
      title: 'Information Technology',
      description: 'We help tech companies hire skilled developers, architects, and IT specialists—enabling faster product development and scalable tech operations.',
      imageUrl: '/images/it.jpg',
    },
    {
      title: 'Healthcare & Pharma',
      description: 'We support hospitals, clinics, and life sciences firms in recruiting qualified professionals—improving care delivery and ensuring regulatory compliance.',
      imageUrl: '/images/health.jpg',
    },
    {
      title: 'Automobile',
      description: 'We provide talent solutions across engineering, manufacturing, and EV innovation—helping auto companies optimize performance and accelerate R&D.',
      imageUrl: '/images/automobile.jpg',
    },
    {
      title: 'Manufacturing',
      description: 'We supply skilled workers and operational staff to factories and industrial units—driving productivity and minimizing downtime.',
      imageUrl: '/images/manufacture.jpg',
    },
    {
      title: 'Banking & Finance',
      description: 'We assist financial institutions in hiring across risk, compliance, operations, and finance—strengthening internal processes and supporting business growth.',
      imageUrl: '/images/bandf.jpg',
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = industriesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const nextIndustry = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === industries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndustry = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="industries" ref={industriesRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 section-title">
            Industries We <span className="text-blue-600">Serve</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-100 section-subtitle">
            Specialized recruitment solutions across diverse sectors
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 delay-200 max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="min-h-[400px]">
              <div className="transition-all duration-500 transform">
                <div className="relative h-80 mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={industries[activeIndex].imageUrl} 
                    alt={industries[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{industries[activeIndex].title}</h3>
                <p className="text-gray-600">{industries[activeIndex].description}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to industry ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={prevIndustry}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors duration-300"
            aria-label="Previous industry"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button
            onClick={nextIndustry}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors duration-300"
            aria-label="Next industry"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};