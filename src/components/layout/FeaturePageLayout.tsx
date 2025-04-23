
import React, { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface FeaturePageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const FeaturePageLayout: React.FC<FeaturePageLayoutProps> = ({
  title,
  description,
  children
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-placement-secondary to-placement-primary text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="container-custom">
          {children}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturePageLayout;
