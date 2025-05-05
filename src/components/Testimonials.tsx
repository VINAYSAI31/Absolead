import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "AbsoLead has transformed our marketing approach. We've seen a 200% increase in leads since implementing their solutions.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc."
  },
  {
    quote: "The team at AbsoLead truly understands modern marketing. Their strategic insights have been invaluable to our business growth.",
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Solutions"
  },
  {
    quote: "I can't recommend AbsoLead enough. Their data-driven approach and exceptional support have exceeded our expectations.",
    name: "Emma Rodriguez",
    role: "Growth Manager",
    company: "ScaleUp Ventures"
  },
  {
    quote: "Working with AbsoLead changed everything for us. Their team is responsive, knowledgeable, and truly cares about our success.",
    name: "David Patel",
    role: "Founder",
    company: "Nexus Digital"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    const elements = testimonialsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={testimonialsRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 section-title">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-100 section-subtitle">
            Don't just take our word for it. Here's what some of our clients have to say about working with us.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 delay-200 max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} fill="#FBBF24" color="#FBBF24" size={24} />
              ))}
            </div>
            
            <div className="min-h-[200px]">
              <div className="transition-all duration-500 transform">
                <blockquote className="text-xl md:text-2xl text-center italic text-gray-700 mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="text-center">
                  <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};