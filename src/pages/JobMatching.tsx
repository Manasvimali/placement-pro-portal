
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const JobMatching = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-placement-secondary to-placement-primary text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              AI-Driven Job Matching
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Connect with opportunities that perfectly align with your skills, experiences, and career aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-placement-dark">How Our AI Job Matching Works</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Profile Analysis</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI system analyzes your complete profile, including your education, skills, past experiences, projects, and preferences to understand your unique professional identity.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Academic performance and coursework assessment</li>
                    <li>Technical and soft skills evaluation</li>
                    <li>Project and experience relevance measurement</li>
                    <li>Career aspiration alignment</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Intelligent Matching</h3>
                  <p className="text-gray-700 mb-4">
                    Going beyond simple keyword matching, our algorithm compares your profile with available job opportunities using deep learning techniques to find the most relevant matches.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Contextual understanding of job requirements</li>
                    <li>Semantic analysis of skills and qualifications</li>
                    <li>Weighing factors based on importance to both parties</li>
                    <li>Continuous learning from successful placements</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Personalized Recommendations</h3>
                  <p className="text-gray-700 mb-4">
                    Receive curated job recommendations tailored specifically to your profile, with insights into why each opportunity might be a good fit for you.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Match percentage scoring with detailed breakdown</li>
                    <li>Suggestions for profile improvements to increase match rates</li>
                    <li>Personalized job search strategies</li>
                    <li>Industry and role-specific insights</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6 text-placement-dark">Benefits</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-placement-primary/5 rounded-lg p-6 border border-placement-primary/20">
                    <h3 className="text-lg font-semibold mb-2 text-placement-primary">Higher Success Rate</h3>
                    <p className="text-gray-700">
                      Students using our AI matching have 76% higher interview selection rates compared to traditional application methods.
                    </p>
                  </div>
                  
                  <div className="bg-placement-primary/5 rounded-lg p-6 border border-placement-primary/20">
                    <h3 className="text-lg font-semibold mb-2 text-placement-primary">Time Efficiency</h3>
                    <p className="text-gray-700">
                      Focus your efforts on opportunities where you have the highest chance of success instead of applying randomly.
                    </p>
                  </div>
                  
                  <div className="bg-placement-primary/5 rounded-lg p-6 border border-placement-primary/20">
                    <h3 className="text-lg font-semibold mb-2 text-placement-primary">Career Path Discovery</h3>
                    <p className="text-gray-700">
                      Discover new career paths and roles that match your skills but might not have been on your radar.
                    </p>
                  </div>
                  
                  <div className="bg-placement-primary/5 rounded-lg p-6 border border-placement-primary/20">
                    <h3 className="text-lg font-semibold mb-2 text-placement-primary">Personalized Growth</h3>
                    <p className="text-gray-700">
                      Get insights on skills to develop based on your desired career trajectory and industry demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-placement-dark">Get Matched Today</h3>
                <p className="text-gray-600 mb-6">
                  Complete your profile to start receiving AI-powered job recommendations tailored to your unique skills and ambitions.
                </p>
                <Button className="w-full mb-4">Complete Your Profile</Button>
                <Button variant="outline" className="w-full">View Sample Matches</Button>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-3 text-placement-dark">Success Stories</h4>
                  
                  <div className="space-y-4">
                    <div className="text-sm">
                      <p className="text-gray-700 italic">
                        "The AI matching system recommended a role I wouldn't have considered on my own, and it turned out to be the perfect fit for my skills!"
                      </p>
                      <p className="text-placement-primary font-medium mt-1">- Ananya S., Computer Science</p>
                    </div>
                    
                    <div className="text-sm">
                      <p className="text-gray-700 italic">
                        "I received an interview call within a week of using the matching system. The employer mentioned my profile was exactly what they were looking for."
                      </p>
                      <p className="text-placement-primary font-medium mt-1">- Rahul P., Electrical Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobMatching;
