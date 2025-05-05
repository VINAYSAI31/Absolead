import React, { useEffect, useRef } from 'react';

export const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('slide-in-left-trigger')) {
              entry.target.classList.add('slide-in-left');
            } else if (entry.target.classList.contains('slide-in-right-trigger')) {
              entry.target.classList.add('slide-in-right');
            } else {
              entry.target.classList.add('fade-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 section-title">
            Why Choose <span className="text-blue-600">Absolead?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="animate-on-scroll slide-in-left-trigger opacity-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Who We Are
              </h3>
              <p className="text-gray-600 mb-6">
                At Absolead, we bring structure, speed, and strategic insight to every hiring challenge. Our approach is rooted in understanding your business needs and aligning them with the right talent—whether in tech or non-tech roles. From early-stage startups to established enterprises, clients trust us for our reliability, industry expertise, and commitment to quality hiring outcomes.
              </p>
              
             
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="animate-on-scroll slide-in-right-trigger opacity-0 relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-4 -right-4 w-full h-full bg-blue-50 rounded-xl transform rotate-3"></div>
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src="/images/about.jpg" 
                    alt="Team meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-50 rounded-full animate-float" style={{animationDelay: '1s'}}></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};