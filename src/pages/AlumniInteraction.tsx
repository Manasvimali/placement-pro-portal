
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { UsersIcon, HandshakeIcon, MessageCircleIcon } from 'lucide-react';

const AlumniInteraction = () => {
  const featuredAlumni = [
    {
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      year: "2018",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      skills: ["Machine Learning", "Python", "Cloud Architecture"]
    },
    {
      name: "Rahul Mehta",
      role: "Product Manager",
      company: "Microsoft",
      year: "2016",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      skills: ["Product Strategy", "UX Design", "Data Analysis"]
    },
    {
      name: "Ananya Gupta",
      role: "Investment Analyst",
      company: "Morgan Stanley",
      year: "2019",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      skills: ["Financial Modeling", "Equity Research", "Investment Banking"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Tech Career Pathways",
      date: "May 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      alumni: "Hosted by Google and Microsoft Alumni"
    },
    {
      title: "Breaking into Investment Banking",
      date: "May 22, 2023",
      time: "5:30 PM - 7:00 PM",
      location: "Finance Building, Room 302",
      alumni: "With alumni from Goldman Sachs and JP Morgan"
    },
    {
      title: "Startup Experiences Panel Discussion",
      date: "June 5, 2023",
      time: "4:00 PM - 6:00 PM",
      location: "Innovation Center",
      alumni: "Featuring alumni entrepreneurs"
    }
  ];

  return (
    <FeaturePageLayout
      title="Alumni Interaction Module"
      description="Connect with successful graduates for mentorship, advice, and networking opportunities."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-placement-dark">Connect with Alumni Network</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <UsersIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Featured Alumni</h3>
                  <p className="text-gray-700 mb-6">
                    Learn from graduates who have successfully navigated their career paths and are willing to share their experiences.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredAlumni.map((alumni, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-4">
                          <div className="flex items-center gap-4 mb-4">
                            <img 
                              src={alumni.image} 
                              alt={alumni.name} 
                              className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-placement-dark">{alumni.name}</h4>
                              <p className="text-sm text-gray-500">Class of {alumni.year}</p>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <p className="font-medium text-placement-dark">{alumni.role}</p>
                            <p className="text-sm text-gray-600">{alumni.company}</p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {alumni.skills.map((skill, idx) => (
                              <span key={idx} className="text-xs bg-placement-primary/10 text-placement-primary px-2 py-1 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-6">
                    <Button>Explore All Alumni Profiles</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <HandshakeIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Mentorship Program</h3>
                  <p className="text-gray-700 mb-6">
                    Get personalized guidance and support from alumni mentors in your field of interest.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-placement-primary/5 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-placement-dark">For Mentees</h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">Find the right mentor match</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">Schedule virtual meetings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">Gain industry insights</span>
                        </li>
                      </ul>
                      <Button size="sm">Find a Mentor</Button>
                    </div>
                    
                    <div className="bg-placement-primary/5 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-placement-dark">For Alumni Mentors</h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">Give back to your alma mater</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">Flexible time commitment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">Build your professional network</span>
                        </li>
                      </ul>
                      <Button size="sm" variant="outline">Become a Mentor</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <MessageCircleIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Upcoming Alumni Events</h3>
                  <p className="text-gray-700 mb-6">
                    Participate in workshops, panel discussions, and networking sessions with successful alumni.
                  </p>
                  
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-placement-primary/5 transition-colors">
                        <h4 className="font-medium text-placement-dark">{event.title}</h4>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <svg className="h-4 w-4 mr-1 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="h-4 w-4 mr-1 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="h-4 w-4 mr-1 text-placement-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{event.alumni}</p>
                        <div className="flex justify-end mt-2">
                          <Button size="sm" variant="outline">RSVP</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Connect With Alumni</h3>
            <p className="text-gray-600 mb-6">
              Find and connect with alumni who share your interests and career goals.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <select id="industry" className="w-full rounded-md border-gray-300 shadow-sm focus:border-placement-primary focus:ring-placement-primary">
                  <option>All Industries</option>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Consulting</option>
                  <option>Marketing</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                <select id="graduation-year" className="w-full rounded-md border-gray-300 shadow-sm focus:border-placement-primary focus:ring-placement-primary">
                  <option>All Years</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select id="location" className="w-full rounded-md border-gray-300 shadow-sm focus:border-placement-primary focus:ring-placement-primary">
                  <option>All Locations</option>
                  <option>San Francisco, CA</option>
                  <option>New York, NY</option>
                  <option>Bangalore, India</option>
                  <option>London, UK</option>
                  <option>Singapore</option>
                </select>
              </div>
            </div>
            
            <Button className="w-full mb-6">Search Alumni</Button>
            
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-placement-dark">Quick Connect</h4>
              <p className="text-sm text-gray-600 mb-4">Need advice on a specific topic? Use our Quick Connect feature to find alumni who can help.</p>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-left" size="sm">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Resume Review
                </Button>
                
                <Button variant="outline" className="w-full justify-start text-left" size="sm">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"></path>
                  </svg>
                  Interview Preparation
                </Button>
                
                <Button variant="outline" className="w-full justify-start text-left" size="sm">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Career Transition
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default AlumniInteraction;
