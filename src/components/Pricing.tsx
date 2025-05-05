import React, { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

type PlanFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
};

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const pricingRef = useRef<HTMLDivElement>(null);

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: isAnnual ? 29 : 39,
      period: isAnnual ? "/month, billed annually" : "/month, billed monthly",
      description: "Perfect for small businesses and startups",
      features: [
        { text: "Up to 5 team members", included: true },
        { text: "Basic analytics", included: true },
        { text: "24/7 email support", included: true },
        { text: "SEO optimization", included: false },
        { text: "Custom reports", included: false },
        { text: "Advanced marketing tools", included: false },
      ]
    },
    {
      name: "Professional",
      price: isAnnual ? 79 : 99,
      period: isAnnual ? "/month, billed annually" : "/month, billed monthly",
      description: "Ideal for growing businesses",
      popular: true,
      features: [
        { text: "Up to 20 team members", included: true },
        { text: "Advanced analytics", included: true },
        { text: "24/7 priority support", included: true },
        { text: "SEO optimization", included: true },
        { text: "Custom reports", included: true },
        { text: "Advanced marketing tools", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: isAnnual ? 199 : 249,
      period: isAnnual ? "/month, billed annually" : "/month, billed monthly",
      description: "For large organizations with advanced needs",
      features: [
        { text: "Unlimited team members", included: true },
        { text: "Enterprise analytics", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Advanced SEO tools", included: true },
        { text: "Unlimited custom reports", included: true },
        { text: "All marketing tools", included: true },
      ]
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

    const elements = pricingRef.current?.querySelectorAll('.animate-on-scroll');
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
    <section id="pricing" ref={pricingRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 section-title">
            Simple, <span className="text-blue-600">Transparent</span> Pricing
          </h2>
          <p className="animate-on-scroll opacity-0 delay-100 section-subtitle">
            Choose the plan that's right for your business and start growing today.
          </p>
          
          <div className="animate-on-scroll opacity-0 delay-200 flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isAnnual ? 'font-bold text-blue-600' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-bold text-blue-600' : 'text-gray-600'}`}>
              Annually <span className="text-sm text-green-500 font-normal">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`animate-on-scroll opacity-0 delay-${index * 100 + 300} relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-white border-2 border-blue-600 shadow-xl' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 text-sm">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check 
                        size={20} 
                        className={`mr-2 mt-0.5 flex-shrink-0 ${
                          feature.included ? 'text-green-500' : 'text-gray-300'
                        }`} 
                      />
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className={`block w-full py-3 px-4 text-center rounded-md transition-colors duration-300 ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};