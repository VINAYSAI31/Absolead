import React, { useEffect, useRef } from 'react';
import { Zap, BarChart3, Users, Award, TrendingUp, Search } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`animate-on-scroll opacity-0 ${delay} bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const elements = featuresRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Fast Implementation',
      description: 'Get up and running quickly with our easy-to-implement solutions that require minimal setup.',
      delay: 'delay-100'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Data Analytics',
      description: 'Gain valuable insights with comprehensive analytics to make data-driven decisions.',
      delay: 'delay-200'
    },
    {
      icon: <Users size={24} />,
      title: 'User Management',
      description: 'Efficiently manage your users, teams, and permissions with our intuitive platform.',
      delay: 'delay-300'
    },
    {
      icon: <Search size={24} />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings with our advanced SEO optimization tools.',
      delay: 'delay-100'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Growth Marketing',
      description: 'Scale your business with proven growth marketing strategies and automation.',
      delay: 'delay-200'
    },
    {
      icon: <Award size={24} />,
      title: 'Premium Support',
      description: 'Get 24/7 support from our expert team to ensure your success at every step.',
      delay: 'delay-300'
    }
  ];

  return (
    <section 
      id="features" 
      ref={featuresRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 section-title">
            Powerful <span className="text-blue-600">Features</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-100 section-subtitle">
            Everything you need to accelerate your business growth and streamline your marketing efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};