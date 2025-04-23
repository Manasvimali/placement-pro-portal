
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ResumeManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-placement-secondary to-placement-primary text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Resume Management & ATS Scoring
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Build and optimize your resume to stand out from the crowd and pass through Applicant Tracking Systems.
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
              <h2 className="text-2xl font-bold mb-6 text-placement-dark">Optimize Your Resume for Success</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">AI-Powered ATS Analysis</h3>
                  <p className="text-gray-700 mb-4">
                    Our advanced AI engine analyzes your resume against industry-standard ATS (Applicant Tracking System) criteria to ensure it gets past the first screening.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Keyword Optimization</span>
                          <span className="text-placement-primary">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Format Compatibility</span>
                          <span className="text-placement-primary">95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Content Relevance</span>
                          <span className="text-placement-primary">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Skills Matching</span>
                          <span className="text-placement-primary">88%</span>
                        </div>
                        <Progress value={88} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Experience Clarity</span>
                          <span className="text-placement-primary">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Overall ATS Score</span>
                          <span className="text-placement-primary">84%</span>
                        </div>
                        <Progress value={84} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Personalized Improvement Suggestions</h3>
                  <p className="text-gray-700 mb-4">
                    Get actionable feedback to enhance your resume's effectiveness and impact.
                  </p>
                  
                  <div className="space-y-4 mt-4">
                    <div className="border-l-4 border-placement-primary pl-4 py-1">
                      <h4 className="font-semibold text-placement-dark">Strengthen Action Verbs</h4>
                      <p className="text-gray-600 text-sm">Replace generic verbs with stronger action words to highlight your accomplishments.</p>
                    </div>
                    
                    <div className="border-l-4 border-placement-primary pl-4 py-1">
                      <h4 className="font-semibold text-placement-dark">Quantify Achievements</h4>
                      <p className="text-gray-600 text-sm">Add specific metrics and numbers to demonstrate the impact of your work.</p>
                    </div>
                    
                    <div className="border-l-4 border-placement-primary pl-4 py-1">
                      <h4 className="font-semibold text-placement-dark">Industry-Specific Keywords</h4>
                      <p className="text-gray-600 text-sm">Include more relevant technical terms from job descriptions in your target field.</p>
                    </div>
                    
                    <div className="border-l-4 border-placement-primary pl-4 py-1">
                      <h4 className="font-semibold text-placement-dark">Section Reorganization</h4>
                      <p className="text-gray-600 text-sm">Consider restructuring your resume to highlight your most relevant experiences first.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Industry-Specific Templates</h3>
                  <p className="text-gray-700 mb-4">
                    Access professionally designed templates tailored to specific industries and roles to make your resume stand out.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">IT & Software</p>
                      <p className="text-xs text-gray-500">12 templates</p>
                    </div>
                    
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">Engineering</p>
                      <p className="text-xs text-gray-500">9 templates</p>
                    </div>
                    
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">Finance</p>
                      <p className="text-xs text-gray-500">7 templates</p>
                    </div>
                    
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">Marketing</p>
                      <p className="text-xs text-gray-500">10 templates</p>
                    </div>
                    
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">Healthcare</p>
                      <p className="text-xs text-gray-500">8 templates</p>
                    </div>
                    
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">Design</p>
                      <p className="text-xs text-gray-500">11 templates</p>
                    </div>
                    
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">Research</p>
                      <p className="text-xs text-gray-500">6 templates</p>
                    </div>
                    
                    <div className="border rounded-md p-2 text-center hover:bg-placement-primary/5 cursor-pointer transition-colors">
                      <p className="font-medium text-placement-dark">More...</p>
                      <p className="text-xs text-gray-500">20+ categories</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-placement-dark">Resume Workshop</h3>
                <p className="text-gray-600 mb-6">
                  Upload your current resume or create a new one from scratch to get started with our AI-powered optimization.
                </p>
                <Button className="w-full mb-4">Upload Resume</Button>
                <Button variant="outline" className="w-full">Create New Resume</Button>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-3 text-placement-dark">Resume Stats</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Resumes Created</span>
                      <span className="font-medium">1,240+ this week</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average ATS Score</span>
                      <span className="font-medium">78%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Interview Rate</span>
                      <span className="font-medium">+62% after optimization</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold mb-2 text-placement-dark">Upcoming Workshops</h4>
                    
                    <div className="space-y-3 mt-3">
                      <div className="bg-placement-primary/5 p-3 rounded-md text-sm">
                        <p className="font-medium text-placement-primary">Resume Masterclass</p>
                        <p className="text-gray-600 text-xs">May 15, 2:00 PM</p>
                      </div>
                      
                      <div className="bg-placement-primary/5 p-3 rounded-md text-sm">
                        <p className="font-medium text-placement-primary">ATS Optimization Session</p>
                        <p className="text-gray-600 text-xs">May 18, 11:00 AM</p>
                      </div>
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

export default ResumeManagement;
