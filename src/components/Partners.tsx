import React, { useEffect, useRef } from 'react';

export const Partners: React.FC = () => {
  const partnersRef = useRef<HTMLDivElement>(null);

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

    const elements = partnersRef.current?.querySelectorAll('.animate-on-scroll');
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
    <section id="partners" ref={partnersRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 section-title">
            Partner With <span className="text-blue-600">Us</span>
          </h2>
        </div>

        <div className="animate-on-scroll opacity-0 delay-200 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Let's Build Long-Term Value Together</h3>
          <p className="text-gray-600 text-lg">
            We don't just fill roles—we help you shape workforce strategies that fuel growth. 
            Partnering with Absolead means access to market intelligence, curated talent, and 
            a team that aligns with your business goals at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};