
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { MessageCircleIcon, HelpCircleIcon } from 'lucide-react';

const Forums = () => {
  const popularTopics = [
    {
      id: 1,
      title: "Tips for technical interviews at FAANG companies",
      author: "Aditya Singh",
      role: "Alumni, Software Engineer at Google",
      replies: 42,
      views: 1253,
      lastActivity: "2 hours ago",
      tags: ["interviews", "technical", "preparation"]
    },
    {
      id: 2,
      title: "How to balance academics with placement preparation?",
      author: "Priya Sharma",
      role: "Final Year, Computer Science",
      replies: 28,
      views: 876,
      lastActivity: "5 hours ago",
      tags: ["academics", "time-management", "advice"]
    },
    {
      id: 3,
      title: "Resume review thread for marketing positions",
      author: "Neha Gupta",
      role: "Alumni, Marketing Manager at P&G",
      replies: 36,
      views: 745,
      lastActivity: "Yesterday",
      tags: ["resume", "marketing", "review"]
    },
    {
      id: 4,
      title: "What skills are investment banks looking for in 2023?",
      author: "Rahul Kapoor",
      role: "Alumni, Investment Analyst at Morgan Stanley",
      replies: 19,
      views: 621,
      lastActivity: "2 days ago",
      tags: ["finance", "skills", "investment-banking"]
    }
  ];

  const categories = [
    { name: "Interview Preparation", count: 245 },
    { name: "Resume Building", count: 187 },
    { name: "Industry Insights", count: 156 },
    { name: "Placement Experiences", count: 134 },
    { name: "Career Advice", count: 122 },
    { name: "Job Opportunities", count: 98 },
    { name: "Skill Development", count: 76 },
    { name: "Internship Discussions", count: 65 }
  ];

  const recentQuestions = [
    "How important is leetcode for technical interviews?",
    "Best online courses for data science preparation?",
    "What to expect in a product management interview?",
    "How to negotiate a better offer package?",
    "Should I choose a startup or a large company for my first job?"
  ];

  return (
    <FeaturePageLayout
      title="Interactive Forums & Q&A"
      description="Connect with peers, alumni, and recruiters to discuss placement strategies, share experiences, and get your questions answered."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-placement-dark">Discussion Forums</h2>
            <div className="flex gap-4">
              <select className="rounded-md border-gray-300 text-sm">
                <option>All Categories</option>
                <option>Interview Preparation</option>
                <option>Resume Building</option>
                <option>Industry Insights</option>
                <option>Career Advice</option>
              </select>
              <Button size="sm">Create New Topic</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-4 bg-placement-primary/5 border-b border-placement-primary/20">
              <h3 className="font-semibold text-placement-dark">Popular Discussion Topics</h3>
            </div>
            
            <div className="divide-y divide-gray-200">
              {popularTopics.map((topic) => (
                <div key={topic.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium text-placement-dark hover:text-placement-primary cursor-pointer">{topic.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">Started by {topic.author} · <span className="text-gray-400">{topic.role}</span></p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {topic.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <p><span className="font-medium">{topic.replies}</span> <span className="text-gray-500">replies</span></p>
                      <p><span className="font-medium">{topic.views}</span> <span className="text-gray-500">views</span></p>
                      <p className="text-xs text-gray-400 mt-1">Last activity {topic.lastActivity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-center">
              <Button variant="outline" size="sm">View More Topics</Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <MessageCircleIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Alumni & Industry Expert AMAs</h3>
                  <p className="text-gray-700 mb-6">
                    Join scheduled "Ask Me Anything" sessions with successful alumni and industry professionals to gain insights and advice.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:border-placement-primary/30 hover:bg-placement-primary/5 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-placement-dark">Breaking into Product Management</h4>
                          <p className="text-sm text-gray-500">Hosted by Ravi Kumar, Senior PM at Microsoft</p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Upcoming
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">May 18, 5:00 PM - 6:30 PM</p>
                      <div className="mt-3">
                        <Button size="sm">RSVP to Join</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:border-placement-primary/30 hover:bg-placement-primary/5 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-placement-dark">Journey from Campus to FAANG</h4>
                          <p className="text-sm text-gray-500">Hosted by Alumni from Google, Amazon, and Meta</p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Upcoming
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">May 25, 6:00 PM - 8:00 PM</p>
                      <div className="mt-3">
                        <Button size="sm">RSVP to Join</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-500">Data Science Career Paths</h4>
                          <p className="text-sm text-gray-400">Hosted by Ananya Mishra, Data Scientist at Netflix</p>
                        </div>
                        <div className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-medium">
                          Completed
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">May 10, 5:30 PM - 7:00 PM</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" disabled>View Recording</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <HelpCircleIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Quick Q&A</h3>
                  <p className="text-gray-700 mb-6">
                    Get your specific questions answered by peers, alumni, and experts in our fast-response Q&A section.
                  </p>
                  
                  <div className="border rounded-lg">
                    <div className="p-4 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-medium text-placement-dark">Ask a Question</h4>
                    </div>
                    <div className="p-4">
                      <textarea
                        className="w-full border-gray-300 rounded-md focus:border-placement-primary focus:ring-placement-primary text-sm"
                        placeholder="What's your placement-related question?"
                        rows={3}
                      ></textarea>
                      <div className="flex justify-between items-center mt-3">
                        <select className="rounded-md border-gray-300 text-sm">
                          <option>Select Category</option>
                          <option>Interviews</option>
                          <option>Resumes</option>
                          <option>Job Search</option>
                          <option>Career Advice</option>
                        </select>
                        <Button size="sm">Submit Question</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-placement-dark mb-3">Recent Questions</h4>
                    <div className="space-y-2">
                      {recentQuestions.map((question, index) => (
                        <div key={index} className="border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                          <p className="text-sm text-gray-800">{question}</p>
                          <div className="flex justify-between mt-2">
                            <span className="text-xs text-gray-500">Posted 3 hours ago</span>
                            <span className="text-xs text-placement-primary">4 answers</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Forum Categories</h3>
            
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="flex justify-between items-center p-2 hover:bg-placement-primary/5 rounded-md cursor-pointer transition-colors">
                  <span className="text-gray-700">{category.name}</span>
                  <span className="text-sm bg-placement-primary/10 text-placement-primary px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-placement-dark">Community Stats</h4>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-placement-primary/5 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">2.4k+</p>
                  <p className="text-xs text-gray-600">Active Members</p>
                </div>
                <div className="bg-placement-primary/5 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">156</p>
                  <p className="text-xs text-gray-600">Topics This Week</p>
                </div>
                <div className="bg-placement-primary/5 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">85%</p>
                  <p className="text-xs text-gray-600">Questions Resolved</p>
                </div>
                <div className="bg-placement-primary/5 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">120+</p>
                  <p className="text-xs text-gray-600">Expert Contributors</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-placement-dark">Top Contributors</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="User" 
                    className="w-8 h-8 rounded-full object-cover" 
                  />
                  <div>
                    <p className="text-sm font-medium text-placement-dark">Rahul Mehta</p>
                    <p className="text-xs text-gray-500">Product Manager, Microsoft</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="User" 
                    className="w-8 h-8 rounded-full object-cover" 
                  />
                  <div>
                    <p className="text-sm font-medium text-placement-dark">Priya Sharma</p>
                    <p className="text-xs text-gray-500">Software Engineer, Google</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="User" 
                    className="w-8 h-8 rounded-full object-cover" 
                  />
                  <div>
                    <p className="text-sm font-medium text-placement-dark">Arjun Reddy</p>
                    <p className="text-xs text-gray-500">Tech Lead, Amazon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button className="w-full">Join Community</Button>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default Forums;
