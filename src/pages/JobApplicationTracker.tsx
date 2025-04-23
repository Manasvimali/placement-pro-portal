
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { ClipboardListIcon } from 'lucide-react';

const JobApplicationTracker = () => {
  const applications = [
    {
      company: "Google",
      position: "Software Engineer",
      location: "Mountain View, CA",
      dateApplied: "May 1, 2023",
      status: "Interview Scheduled",
      statusColor: "bg-blue-100 text-blue-800",
      nextStep: "Technical Interview - May 10, 2023",
      logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
    },
    {
      company: "Amazon",
      position: "Product Manager",
      location: "Seattle, WA",
      dateApplied: "April 28, 2023",
      status: "Application Submitted",
      statusColor: "bg-gray-100 text-gray-800",
      nextStep: "Waiting for response",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      company: "Microsoft",
      position: "Frontend Developer",
      location: "Redmond, WA",
      dateApplied: "April 25, 2023",
      status: "First Round Completed",
      statusColor: "bg-green-100 text-green-800",
      nextStep: "Waiting for second round invitation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
    },
    {
      company: "Apple",
      position: "iOS Developer",
      location: "Cupertino, CA",
      dateApplied: "April 20, 2023",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800",
      nextStep: "Application closed",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png"
    },
    {
      company: "Netflix",
      position: "Data Engineer",
      location: "Los Gatos, CA",
      dateApplied: "April 15, 2023",
      status: "Second Round",
      statusColor: "bg-amber-100 text-amber-800",
      nextStep: "Final interview - May 12, 2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
    }
  ];

  return (
    <FeaturePageLayout
      title="Job Application Tracker"
      description="Keep track of all your job applications, interview statuses, and feedback in one centralized dashboard."
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-placement-dark">My Applications</h2>
            <div className="flex gap-4">
              <select className="rounded-md border-gray-300 text-sm">
                <option>All Statuses</option>
                <option>Submitted</option>
                <option>In Progress</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
              <Button size="sm">+ Add Application</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Applied
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Next Step
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                            <img 
                              src={application.logo} 
                              alt={application.company} 
                              className="h-6 max-w-[40px] object-contain" 
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{application.company}</div>
                            <div className="text-xs text-gray-500">{application.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{application.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{application.dateApplied}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${application.statusColor}`}>
                          {application.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {application.nextStep}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-placement-primary hover:text-placement-primary/80">Edit</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <ClipboardListIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Application Insights</h3>
                  <p className="text-gray-700 mb-6">
                    Track your application progress and get insights to improve your job search strategy.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-placement-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-placement-primary mb-1">12</div>
                      <div className="text-sm text-gray-600">Total Applications</div>
                    </div>
                    <div className="p-4 bg-placement-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-placement-primary mb-1">4</div>
                      <div className="text-sm text-gray-600">Interviews Scheduled</div>
                    </div>
                    <div className="p-4 bg-placement-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-placement-primary mb-1">33%</div>
                      <div className="text-sm text-gray-600">Response Rate</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-placement-dark">Application Status Breakdown</h4>
                    <div className="h-6 w-full rounded-full overflow-hidden bg-gray-200">
                      <div className="flex h-full">
                        <div className="bg-green-500 h-full" style={{width: "25%"}}></div>
                        <div className="bg-blue-500 h-full" style={{width: "33%"}}></div>
                        <div className="bg-yellow-500 h-full" style={{width: "17%"}}></div>
                        <div className="bg-red-500 h-full" style={{width: "25%"}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-600">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                        <span>Offer (25%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                        <span>Interview (33%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                        <span>Pending (17%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                        <span>Rejected (25%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-placement-dark">Upcoming Interviews</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-placement-dark">Google - Technical Interview</h4>
                  <p className="text-sm text-gray-600">May 10, 2023 | 10:00 AM - 11:30 AM | Virtual (Google Meet)</p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">Prepare</Button>
                    <Button size="sm" variant="outline">Add to Calendar</Button>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-placement-dark">Netflix - Final Interview</h4>
                  <p className="text-sm text-gray-600">May 12, 2023 | 2:00 PM - 4:00 PM | Virtual (Zoom)</p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">Prepare</Button>
                    <Button size="sm" variant="outline">Add to Calendar</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Application Tools</h3>
            
            <div className="space-y-4 mb-6">
              <Button className="w-full justify-start" size="sm">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add New Application
              </Button>
              
              <Button variant="outline" className="w-full justify-start" size="sm">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Create Application Report
              </Button>
              
              <Button variant="outline" className="w-full justify-start" size="sm">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                Set Up Alerts
              </Button>
              
              <Button variant="outline" className="w-full justify-start" size="sm">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Interview Calendar
              </Button>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-3 text-placement-dark">Application Tips</h4>
              
              <div className="space-y-3 text-sm">
                <div className="bg-placement-primary/5 p-3 rounded-md">
                  <p className="font-medium text-placement-dark mb-1">Customize Each Resume</p>
                  <p className="text-gray-600">Tailor your resume for each application to highlight relevant skills.</p>
                </div>
                
                <div className="bg-placement-primary/5 p-3 rounded-md">
                  <p className="font-medium text-placement-dark mb-1">Follow Up</p>
                  <p className="text-gray-600">Send a follow-up email 1-2 weeks after applying if you haven't heard back.</p>
                </div>
                
                <div className="bg-placement-primary/5 p-3 rounded-md">
                  <p className="font-medium text-placement-dark mb-1">Research the Company</p>
                  <p className="text-gray-600">Always research the company thoroughly before interviews.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button variant="outline" className="w-full">View Application Guide</Button>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default JobApplicationTracker;
