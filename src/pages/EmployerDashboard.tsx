
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { LayoutDashboardIcon, BriefcaseIcon, UsersIcon, SearchIcon } from 'lucide-react';

const EmployerDashboard = () => {
  return (
    <FeaturePageLayout
      title="Employer Dashboard"
      description="Streamline your recruitment process with powerful tools for job posting, candidate search, and applicant tracking."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-placement-dark">Recruiting Made Simple</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <BriefcaseIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Job Posting</h3>
                  <p className="text-gray-700 mb-6">
                    Create and publish job listings that reach qualified candidates, with targeted distribution to the most relevant student profiles.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-5">
                      <h4 className="font-semibold text-placement-dark mb-2">Easy Posting Process</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-placement-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-placement-primary font-medium">1</span>
                          </div>
                          <span>Create job description with AI assistance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-placement-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-placement-primary font-medium">2</span>
                          </div>
                          <span>Set requirements and preferences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-placement-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-placement-primary font-medium">3</span>
                          </div>
                          <span>Publish to targeted student segments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-placement-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-placement-primary font-medium">4</span>
                          </div>
                          <span>Track engagement and applications</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-5">
                      <h4 className="font-semibold text-placement-dark mb-2">Enhanced Visibility</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Jobs posted on our platform are automatically matched with qualified candidates based on skills, preferences, and academic performance.
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-placement-primary/10 text-placement-primary text-xs rounded-full">AI Matching</span>
                        <span className="px-2 py-1 bg-placement-primary/10 text-placement-primary text-xs rounded-full">Smart Filters</span>
                        <span className="px-2 py-1 bg-placement-primary/10 text-placement-primary text-xs rounded-full">Targeted Alerts</span>
                        <span className="px-2 py-1 bg-placement-primary/10 text-placement-primary text-xs rounded-full">Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <SearchIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Candidate Search</h3>
                  <p className="text-gray-700 mb-6">
                    Find the perfect candidates with our powerful search and filtering capabilities, including verified skills and credentials.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-5 mb-6">
                    <h4 className="font-medium text-placement-dark mb-3">Advanced Search Features</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-sm text-placement-dark">Skills-Based</p>
                        <p className="text-xs text-gray-500">Technical & soft skills</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-sm text-placement-dark">Academic Filters</p>
                        <p className="text-xs text-gray-500">GPA, courses, projects</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-sm text-placement-dark">Credential Check</p>
                        <p className="text-xs text-gray-500">Verified backgrounds</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="font-medium text-sm text-placement-dark">Availability</p>
                        <p className="text-xs text-gray-500">Internship, full-time</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" 
                      alt="Employer Dashboard" 
                      className="rounded-lg shadow-md max-h-64 object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <UsersIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Applicant Tracking</h3>
                  <p className="text-gray-700 mb-6">
                    Manage your recruitment pipeline with our intuitive applicant tracking system designed for college recruitment.
                  </p>
                  
                  <div className="overflow-hidden border border-gray-200 rounded-lg">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h4 className="font-medium text-gray-700">Sample Recruitment Pipeline</h4>
                    </div>
                    <div className="p-4">
                      <div className="flex overflow-x-auto space-x-4 pb-4">
                        <div className="flex-shrink-0 w-64 border rounded-md overflow-hidden">
                          <div className="bg-gray-100 px-3 py-2 border-b">
                            <p className="font-medium">New Applications</p>
                            <p className="text-xs text-gray-500">24 candidates</p>
                          </div>
                          <div className="p-3 space-y-2">
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">John D.</p>
                              <p className="text-xs text-gray-500">Computer Science</p>
                            </div>
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">Sarah M.</p>
                              <p className="text-xs text-gray-500">Data Science</p>
                            </div>
                            <div className="text-center text-xs text-gray-500 pt-1">+22 more</div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 w-64 border rounded-md overflow-hidden">
                          <div className="bg-gray-100 px-3 py-2 border-b">
                            <p className="font-medium">Screening</p>
                            <p className="text-xs text-gray-500">10 candidates</p>
                          </div>
                          <div className="p-3 space-y-2">
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">Michael P.</p>
                              <p className="text-xs text-gray-500">Software Engineering</p>
                            </div>
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">Aisha K.</p>
                              <p className="text-xs text-gray-500">UI/UX Design</p>
                            </div>
                            <div className="text-center text-xs text-gray-500 pt-1">+8 more</div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 w-64 border rounded-md overflow-hidden">
                          <div className="bg-gray-100 px-3 py-2 border-b">
                            <p className="font-medium">Interview</p>
                            <p className="text-xs text-gray-500">5 candidates</p>
                          </div>
                          <div className="p-3 space-y-2">
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">Jessica T.</p>
                              <p className="text-xs text-gray-500">Product Management</p>
                            </div>
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">David L.</p>
                              <p className="text-xs text-gray-500">Marketing</p>
                            </div>
                            <div className="text-center text-xs text-gray-500 pt-1">+3 more</div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 w-64 border rounded-md overflow-hidden">
                          <div className="bg-gray-100 px-3 py-2 border-b">
                            <p className="font-medium">Offer</p>
                            <p className="text-xs text-gray-500">2 candidates</p>
                          </div>
                          <div className="p-3 space-y-2">
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">Priya R.</p>
                              <p className="text-xs text-gray-500">Data Analytics</p>
                            </div>
                            <div className="border rounded p-2 bg-white">
                              <p className="font-medium text-sm">Thomas K.</p>
                              <p className="text-xs text-gray-500">Cybersecurity</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Employer Access</h3>
            <p className="text-gray-600 mb-6">
              Get started with our employer tools to find top college talent for your organization.
            </p>
            
            <div className="space-y-4 mb-8">
              <Button className="w-full">Sign Up as Employer</Button>
              <Button variant="outline" className="w-full">Employer Login</Button>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-placement-dark">Benefits for Employers</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-placement-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-gray-600">Access to a curated pool of verified college talent</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-placement-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-gray-600">AI-powered candidate matching based on your requirements</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-placement-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-gray-600">Streamlined interview scheduling and feedback collection</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-placement-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-gray-600">Reduced time-to-hire with verified credentials</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-placement-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-gray-600">Detailed analytics on your recruitment funnel</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-placement-dark">Employer Resources</h4>
              
              <div className="space-y-2">
                <a href="#" className="text-placement-primary hover:text-placement-primary/80 text-sm flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Campus Recruitment Guide
                </a>
                
                <a href="#" className="text-placement-primary hover:text-placement-primary/80 text-sm flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  Webinar: Effective College Recruiting
                </a>
                
                <a href="#" className="text-placement-primary hover:text-placement-primary/80 text-sm flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Upcoming Virtual Career Fairs
                </a>
                
                <a href="#" className="text-placement-primary hover:text-placement-primary/80 text-sm flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  FAQ for Employers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default EmployerDashboard;
