
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { TrendingUpIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const SkillAnalytics = () => {
  // Sample data for charts
  const skillDemandData = [
    { name: 'Data Science', count: 85 },
    { name: 'Cloud Computing', count: 78 },
    { name: 'Machine Learning', count: 72 },
    { name: 'DevOps', count: 68 },
    { name: 'UI/UX Design', count: 65 },
    { name: 'Blockchain', count: 52 },
    { name: 'Cybersecurity', count: 48 },
  ];

  const technicalSkillsData = [
    { name: 'Programming', value: 35 },
    { name: 'Data Analysis', value: 25 },
    { name: 'Cloud Services', value: 15 },
    { name: 'UI/UX', value: 12 },
    { name: 'DevOps', value: 8 },
    { name: 'Other', value: 5 },
  ];

  const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];

  const recommendedCourses = [
    {
      title: "Machine Learning Fundamentals",
      platform: "Coursera",
      duration: "8 weeks",
      rating: 4.8,
      enrolled: "10.5k students"
    },
    {
      title: "AWS Cloud Practitioner",
      platform: "Udemy",
      duration: "6 weeks",
      rating: 4.7,
      enrolled: "8.2k students"
    },
    {
      title: "React JS Complete Guide",
      platform: "Udacity",
      duration: "10 weeks",
      rating: 4.9,
      enrolled: "12.3k students"
    }
  ];

  return (
    <FeaturePageLayout
      title="Job Skill Analytics & Development"
      description="Gain insights into the most in-demand skills in your field and find resources to develop these competencies."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-placement-dark">Skill Market Insights</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <TrendingUpIcon size={24} />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Top Skills in Demand</h3>
                  <p className="text-gray-700 mb-6">
                    Based on current job listings and recruiter searches across industries in the past 6 months.
                  </p>
                  
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={500}
                        height={300}
                        data={skillDemandData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#2563eb" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    Based on analysis of 5,000+ job postings in the last 6 months
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-placement-primary">Industry Skill Distribution</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                      <Pie
                        data={technicalSkillsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {technicalSkillsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex flex-col justify-center">
                  <h4 className="font-medium text-lg mb-4 text-placement-dark">Technical Skills Distribution</h4>
                  <p className="text-gray-600 mb-4">
                    The chart shows the relative demand for different technical skill categories across all industries.
                  </p>
                  <p className="text-gray-600">
                    Programming and data analysis skills continue to dominate the market, with a growing demand for cloud services expertise.
                  </p>
                  <Button className="mt-6">View Detailed Report</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-placement-primary">Growing Skill Trends</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-placement-dark">AI & Machine Learning</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+43% YoY</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Companies are increasingly seeking candidates with AI expertise for roles across various departments.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>TensorFlow</span>
                      <span className="font-medium">High demand</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Python ML libraries</span>
                      <span className="font-medium">Very high demand</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NLP</span>
                      <span className="font-medium">Growing demand</span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-placement-dark">Cloud Infrastructure</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+38% YoY</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Cloud computing skills are becoming essential across tech roles as more companies migrate to the cloud.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>AWS</span>
                      <span className="font-medium">Very high demand</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Azure</span>
                      <span className="font-medium">High demand</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Google Cloud</span>
                      <span className="font-medium">Growing demand</span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-placement-dark">Cybersecurity</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+35% YoY</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Security expertise is critical as organizations face increasing cyber threats and data protection challenges.
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Network Security</span>
                      <span className="font-medium">High demand</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Penetration Testing</span>
                      <span className="font-medium">Growing demand</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security Analysis</span>
                      <span className="font-medium">Very high demand</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Skill Development</h3>
            <p className="text-gray-600 mb-6">
              Based on your profile and career interests, we recommend focusing on these skill areas.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium text-placement-dark mb-2">Your Skill Gap Analysis</h4>
                <p className="text-sm text-gray-600 mb-3">Complete your profile to get a personalized skill gap analysis.</p>
                <Button size="sm">Complete Profile</Button>
              </div>
              
              <div>
                <h4 className="font-medium text-placement-dark mb-3">Recommended Courses</h4>
                <div className="space-y-3">
                  {recommendedCourses.map((course, index) => (
                    <div key={index} className="border rounded-lg p-3 hover:border-placement-primary hover:bg-placement-primary/5 transition-colors cursor-pointer">
                      <h5 className="font-medium text-sm">{course.title}</h5>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">{course.platform}</span>
                        <span className="text-xs text-gray-500">{course.duration}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <span className="text-xs ml-1">{course.rating}/5.0</span>
                        </div>
                        <span className="text-xs text-gray-500">{course.enrolled}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-3">
                  <Button variant="outline" size="sm">View All Courses</Button>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-placement-dark">Certification Paths</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-placement-primary/5 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center bg-white rounded shadow-sm">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" className="h-6 w-6 object-contain" alt="AWS" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">AWS Certifications</p>
                      <p className="text-xs text-gray-500">Cloud & Infrastructure</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Explore</Button>
                </div>
                
                <div className="flex items-center justify-between bg-placement-primary/5 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center bg-white rounded shadow-sm">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" className="h-6 w-6 object-contain" alt="Microsoft" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Microsoft Azure</p>
                      <p className="text-xs text-gray-500">Cloud Solutions</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Explore</Button>
                </div>
                
                <div className="flex items-center justify-between bg-placement-primary/5 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center bg-white rounded shadow-sm">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TensorFlow_logo.svg/1200px-TensorFlow_logo.svg.png" className="h-6 w-6 object-contain" alt="TensorFlow" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">TensorFlow Developer</p>
                      <p className="text-xs text-gray-500">Machine Learning</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Explore</Button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button className="w-full">Create Development Plan</Button>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default SkillAnalytics;
