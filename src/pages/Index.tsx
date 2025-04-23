
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeatureCard from '@/components/home/FeatureCard';
import {
  BriefcaseIcon,
  FileTextIcon,
  FileCheckIcon,
  BellIcon,
  UsersIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  AlertTriangleIcon,
  MessageCircleIcon,
  TrendingUpIcon,
  PieChartIcon,
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BriefcaseIcon,
      title: "AI-Driven Job Matching",
      description: "Match with jobs most relevant to your profile using our advanced AI system for greater accuracy and efficiency.",
      linkTo: "/job-matching"
    },
    {
      icon: FileTextIcon,
      title: "Resume Management & ATS Scoring",
      description: "Optimize your resume with AI-powered ATS scoring and receive personalized improvement suggestions.",
      linkTo: "/resume-management"
    },
    {
      icon: FileCheckIcon,
      title: "Certificate Verification",
      description: "Our system verifies academic credentials ensuring authenticity and reducing manual verification for recruiters.",
      linkTo: "/certificate-verification"
    },
    {
      icon: BellIcon,
      title: "Real-Time Job Updates",
      description: "Stay informed about job openings, interviews, and application status changes as they happen.",
      linkTo: "/job-updates"
    },
    {
      icon: UsersIcon,
      title: "Alumni Interaction Module",
      description: "Connect with alumni for advice, mentoring, and networking opportunities to advance your career.",
      linkTo: "/alumni-interaction"
    },
    {
      icon: ClipboardListIcon,
      title: "Job Application Tracker",
      description: "A comprehensive solution to track your applications, interview statuses, and recruiter feedback all in one place.",
      linkTo: "/job-application-tracker"
    },
    {
      icon: LayoutDashboardIcon,
      title: "Employer Dashboard",
      description: "Streamlined job posting, candidate search, and recruitment management system for employers.",
      linkTo: "/employer-dashboard"
    },
    {
      icon: AlertTriangleIcon,
      title: "Real-Time Notifications",
      description: "Receive important alerts about job opportunities, application deadlines, and other critical updates.",
      linkTo: "/notifications"
    },
    {
      icon: MessageCircleIcon,
      title: "Interactive Forums & Q&A",
      description: "Engage with students, alumni, and recruiters to discuss and share knowledge in our community forums.",
      linkTo: "/forums"
    },
    {
      icon: TrendingUpIcon,
      title: "Job Skill Analytics",
      description: "Gain insights into in-demand skills and discover courses to help you develop these competencies.",
      linkTo: "/skill-analytics"
    },
    {
      icon: PieChartIcon,
      title: "Placement Report Analysis",
      description: "Access comprehensive analytics on placement trends and student performance metrics.",
      linkTo: "/placement-reports"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-placement-secondary to-placement-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Career Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              AI-powered college placement portal connecting students with their dream careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-placement-primary hover:bg-white/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-placement-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in animate-delay-1">
              <p className="text-3xl md:text-4xl font-bold text-placement-primary mb-2">5000+</p>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div className="animate-fade-in animate-delay-2">
              <p className="text-3xl md:text-4xl font-bold text-placement-primary mb-2">1200+</p>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="animate-fade-in animate-delay-3">
              <p className="text-3xl md:text-4xl font-bold text-placement-primary mb-2">95%</p>
              <p className="text-gray-600">Placement Rate</p>
            </div>
            <div className="animate-fade-in animate-delay-4">
              <p className="text-3xl md:text-4xl font-bold text-placement-primary mb-2">500+</p>
              <p className="text-gray-600">Active Job Listings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-placement-dark">Powerful Features for Your Placement Journey</h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive suite of tools designed to streamline your path from college to career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index % 3)}s` }}>
                <FeatureCard 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  linkTo={feature.linkTo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-placement-dark text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Join thousands of students who found their dream jobs through our platform
            </p>
            <Button size="lg" className="bg-placement-primary hover:bg-placement-primary/90 text-white">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
