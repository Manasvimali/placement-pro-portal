
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { BellIcon, ClockIcon, CalendarIcon } from 'lucide-react';

const JobUpdates = () => {
  const recentUpdates = [
    {
      title: "Google Software Engineering Internship",
      type: "New Opening",
      date: "2 hours ago",
      description: "Summer internship for CS students with knowledge of algorithms and data structures.",
      status: "new"
    },
    {
      title: "Amazon Product Management Interview",
      type: "Interview Schedule",
      date: "Yesterday",
      description: "Your interview has been scheduled for May 12, 2023 at 2:00 PM.",
      status: "interview"
    },
    {
      title: "Microsoft Full Stack Developer",
      type: "Application Update",
      date: "May 1, 2023",
      description: "Your application has moved to the second round of evaluation.",
      status: "update"
    },
    {
      title: "IBM Data Science Position",
      type: "Application Update",
      date: "Apr 29, 2023",
      description: "Thank you for your application. We've received your materials and will review them shortly.",
      status: "received"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'interview':
        return 'bg-blue-100 text-blue-800';
      case 'update':
        return 'bg-amber-100 text-amber-800';
      case 'received':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <FeaturePageLayout
      title="Real-Time Job Updates"
      description="Stay informed about job openings, interviews, and application statuses with instant notifications."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-placement-dark">Never Miss an Opportunity</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <BellIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Instant Notifications</h3>
                  <p className="text-gray-700 mb-4">
                    Receive real-time alerts about new job openings, application status changes, interview invitations, and more through multiple channels.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="border rounded-md p-4 text-center">
                      <p className="font-medium text-placement-dark mb-1">Mobile App</p>
                      <p className="text-sm text-gray-600">Push notifications</p>
                    </div>
                    <div className="border rounded-md p-4 text-center">
                      <p className="font-medium text-placement-dark mb-1">Email</p>
                      <p className="text-sm text-gray-600">Digest or instant</p>
                    </div>
                    <div className="border rounded-md p-4 text-center">
                      <p className="font-medium text-placement-dark mb-1">SMS</p>
                      <p className="text-sm text-gray-600">Critical updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <ClockIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Recent Updates</h3>
                  <p className="text-gray-700 mb-6">
                    View your most recent job-related notifications and updates in one consolidated feed.
                  </p>
                  
                  <div className="space-y-4">
                    {recentUpdates.map((update, index) => (
                      <div key={index} className="border rounded-md p-4 hover:bg-placement-primary/5 transition-colors">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-placement-dark">{update.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(update.status)}`}>
                            {update.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{update.date}</p>
                        <p className="text-sm text-gray-600 mt-2">{update.description}</p>
                      </div>
                    ))}
                    
                    <div className="text-center pt-2">
                      <Button variant="outline">View All Updates</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Upcoming Events</h3>
                  <p className="text-gray-700 mb-6">
                    Stay on top of your upcoming interviews, deadlines, and important placement events.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-medium text-placement-dark">Technical Interview - Microsoft</h4>
                      <p className="text-sm text-gray-600">Tomorrow, 10:00 AM - Online (Microsoft Teams)</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <h4 className="font-medium text-placement-dark">Resume Submission Deadline - Goldman Sachs</h4>
                      <p className="text-sm text-gray-600">May 15, 2023 - 11:59 PM</p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <h4 className="font-medium text-placement-dark">Campus Placement Drive - Tech Companies</h4>
                      <p className="text-sm text-gray-600">May 20-22, 2023 - University Campus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Notification Settings</h3>
            <p className="text-gray-600 mb-6">
              Customize how and when you receive updates about jobs and placement activities.
            </p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-placement-dark">New Job Openings</p>
                  <p className="text-xs text-gray-500">Based on your profile matches</p>
                </div>
                <div className="h-6 w-12 bg-placement-primary rounded-full relative cursor-pointer">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-placement-dark">Application Updates</p>
                  <p className="text-xs text-gray-500">Status changes and feedback</p>
                </div>
                <div className="h-6 w-12 bg-placement-primary rounded-full relative cursor-pointer">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-placement-dark">Interview Reminders</p>
                  <p className="text-xs text-gray-500">24h and 1h before scheduled interviews</p>
                </div>
                <div className="h-6 w-12 bg-placement-primary rounded-full relative cursor-pointer">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-placement-dark">Placement Events</p>
                  <p className="text-xs text-gray-500">Career fairs, workshops, and more</p>
                </div>
                <div className="h-6 w-12 bg-gray-300 rounded-full relative cursor-pointer">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-placement-dark">Deadline Reminders</p>
                  <p className="text-xs text-gray-500">3 days before application deadlines</p>
                </div>
                <div className="h-6 w-12 bg-placement-primary rounded-full relative cursor-pointer">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-placement-dark">Delivery Methods</h4>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input id="email" type="checkbox" checked={true} className="h-4 w-4 text-placement-primary rounded border-gray-300 focus:ring-placement-primary" readOnly />
                  <label htmlFor="email" className="ml-2 block text-sm text-gray-700">Email</label>
                </div>
                <div className="flex items-center">
                  <input id="push" type="checkbox" checked={true} className="h-4 w-4 text-placement-primary rounded border-gray-300 focus:ring-placement-primary" readOnly />
                  <label htmlFor="push" className="ml-2 block text-sm text-gray-700">Push Notifications</label>
                </div>
                <div className="flex items-center">
                  <input id="sms" type="checkbox" checked={false} className="h-4 w-4 text-placement-primary rounded border-gray-300 focus:ring-placement-primary" readOnly />
                  <label htmlFor="sms" className="ml-2 block text-sm text-gray-700">SMS</label>
                </div>
              </div>
              
              <Button className="w-full mt-6">Save Preferences</Button>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default JobUpdates;
