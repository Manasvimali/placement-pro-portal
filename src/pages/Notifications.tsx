import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { BellIcon, AlertTriangleIcon, ClockIcon, Briefcase as BriefcaseIcon, ClipboardList as ClipboardListIcon, Users as UsersIcon, Calendar as CalendarIcon } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "job",
      title: "New Job Opening: Software Engineer at Google",
      time: "Just now",
      description: "A new job matching your profile has been posted. Apply within the next 7 days for early consideration.",
      isRead: false,
      priority: "high"
    },
    {
      id: 2,
      type: "application",
      title: "Application Status Update: Amazon",
      time: "2 hours ago",
      description: "Your application for Product Manager position has moved to the interview stage.",
      isRead: false,
      priority: "high"
    },
    {
      id: 3,
      type: "interview",
      title: "Interview Reminder: Microsoft Technical Round",
      time: "Yesterday",
      description: "Your interview is scheduled for tomorrow at 10:00 AM. Don't forget to prepare and test your equipment.",
      isRead: true,
      priority: "high"
    },
    {
      id: 4,
      type: "deadline",
      title: "Application Deadline Reminder",
      time: "Yesterday",
      description: "The application for Facebook Software Engineering Internship closes in 2 days.",
      isRead: true,
      priority: "medium"
    },
    {
      id: 5,
      type: "event",
      title: "Upcoming Career Fair",
      time: "2 days ago",
      description: "Tech Companies Career Fair is happening on May 25th. Register to secure your spot.",
      isRead: true,
      priority: "medium"
    },
    {
      id: 6,
      type: "system",
      title: "Resume Viewed by Recruiters",
      time: "3 days ago",
      description: "Your resume has been viewed by 5 recruiters in the past week.",
      isRead: true,
      priority: "low"
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case "job":
        return (
          <div className="bg-blue-100 p-2 rounded-full">
            <BriefcaseIcon size={16} className="text-blue-600" />
          </div>
        );
      case "application":
        return (
          <div className="bg-green-100 p-2 rounded-full">
            <ClipboardListIcon size={16} className="text-green-600" />
          </div>
        );
      case "interview":
        return (
          <div className="bg-purple-100 p-2 rounded-full">
            <UsersIcon size={16} className="text-purple-600" />
          </div>
        );
      case "deadline":
        return (
          <div className="bg-amber-100 p-2 rounded-full">
            <ClockIcon size={16} className="text-amber-600" />
          </div>
        );
      case "event":
        return (
          <div className="bg-indigo-100 p-2 rounded-full">
            <CalendarIcon size={16} className="text-indigo-600" />
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-2 rounded-full">
            <BellIcon size={16} className="text-gray-600" />
          </div>
        );
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "high":
        return "border-red-500";
      case "medium":
        return "border-amber-500";
      case "low":
        return "border-blue-500";
      default:
        return "border-gray-200";
    }
  };

  return (
    <FeaturePageLayout
      title="Real-Time Notifications & Alerts"
      description="Stay informed about important job opportunities, application updates, and deadlines with our smart notification system."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-placement-dark">Your Notifications</h2>
            <div className="flex gap-4">
              <select className="rounded-md border-gray-300 text-sm">
                <option>All Notifications</option>
                <option>Jobs</option>
                <option>Applications</option>
                <option>Interviews</option>
                <option>Deadlines</option>
                <option>Events</option>
              </select>
              <Button size="sm" variant="outline">Mark All as Read</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-lg shadow-sm p-4 border-l-4 ${getPriorityColor(notification.priority)} ${notification.isRead ? 'opacity-75' : ''}`}
              >
                <div className="flex gap-4 items-start">
                  {getNotificationIcon(notification.type)}
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className={`font-medium text-placement-dark ${notification.isRead ? '' : 'font-semibold'}`}>
                        {notification.title}
                        {!notification.isRead && (
                          <span className="ml-2 inline-block w-2 h-2 bg-placement-primary rounded-full"></span>
                        )}
                      </h3>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{notification.description}</p>
                    
                    <div className="mt-3 flex gap-2">
                      {notification.type === "job" && <Button size="sm">View Job</Button>}
                      {notification.type === "application" && <Button size="sm">View Status</Button>}
                      {notification.type === "interview" && <Button size="sm">Prepare</Button>}
                      {notification.type === "deadline" && <Button size="sm">Apply Now</Button>}
                      {notification.type === "event" && <Button size="sm">Register</Button>}
                      <Button size="sm" variant="outline">Dismiss</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-4">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Notification Settings</h3>
            <p className="text-gray-600 mb-6">
              Customize your notification preferences to focus on what matters most to you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3 text-placement-dark">Notification Categories</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-placement-dark">Job Matches</p>
                      <p className="text-xs text-gray-500">New jobs matching your profile</p>
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
                      <p className="font-medium text-placement-dark">Application Deadlines</p>
                      <p className="text-xs text-gray-500">Reminders before deadlines</p>
                    </div>
                    <div className="h-6 w-12 bg-placement-primary rounded-full relative cursor-pointer">
                      <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-placement-dark">Career Events</p>
                      <p className="text-xs text-gray-500">Career fairs, workshops, webinars</p>
                    </div>
                    <div className="h-6 w-12 bg-gray-300 rounded-full relative cursor-pointer">
                      <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-3 text-placement-dark">Notification Methods</h4>
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
                    <input id="text" type="checkbox" checked={false} className="h-4 w-4 text-placement-primary rounded border-gray-300 focus:ring-placement-primary" readOnly />
                    <label htmlFor="text" className="ml-2 block text-sm text-gray-700">Text Messages</label>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-3 text-placement-dark">Frequency</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="real-time" name="frequency" type="radio" checked={true} className="h-4 w-4 text-placement-primary border-gray-300 focus:ring-placement-primary" readOnly />
                    <label htmlFor="real-time" className="ml-2 block text-sm text-gray-700">Real-time</label>
                  </div>
                  <div className="flex items-center">
                    <input id="daily" name="frequency" type="radio" checked={false} className="h-4 w-4 text-placement-primary border-gray-300 focus:ring-placement-primary" readOnly />
                    <label htmlFor="daily" className="ml-2 block text-sm text-gray-700">Daily digest</label>
                  </div>
                  <div className="flex items-center">
                    <input id="weekly" name="frequency" type="radio" checked={false} className="h-4 w-4 text-placement-primary border-gray-300 focus:ring-placement-primary" readOnly />
                    <label htmlFor="weekly" className="ml-2 block text-sm text-gray-700">Weekly summary</label>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">Save Preferences</Button>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default Notifications;
