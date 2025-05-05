import React, { useEffect, useRef } from 'react';
import { Users, Globe2, Briefcase } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  delay: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl, delay }) => {
  return (
    <div className={`animate-on-scroll opacity-0 ${delay} bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="relative h-64 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      icon: <Users size={24} />,
      title: 'Recruitment Process Outsourcing (RPO)',
      description: 'We manage your end-to-end hiring process—from sourcing to onboarding—so you can focus on scaling your business.',
      imageUrl: '/images/rpo.jpg',
      delay: 'delay-100'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Blue-Collar Hiring',
      description: 'We help you source, screen, and deploy reliable blue-collar workers across roles and locations with speed and accuracy.',
      imageUrl: '/images/blue.jpg',
      delay: 'delay-200'
    },
    {
      icon: <Globe2 size={24} />,
      title: 'Offshore Recruitment',
      description: 'We build and manage remote teams for global companies by delivering pre-vetted talent from cost-effective markets.',
      imageUrl: '/images/offshore.jpg',
      delay: 'delay-300'
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 section-title">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-100 section-subtitle">
            Comprehensive recruitment solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};