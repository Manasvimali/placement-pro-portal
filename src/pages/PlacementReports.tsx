
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { PieChartIcon, ChartBarIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart, Pie, Cell } from 'recharts';

const PlacementReports = () => {
  // Sample data for charts
  const placementTrendData = [
    { year: '2018', placements: 76 },
    { year: '2019', placements: 82 },
    { year: '2020', placements: 80 },
    { year: '2021', placements: 85 },
    { year: '2022', placements: 92 },
    { year: '2023', placements: 95 },
  ];
  
  const topCompaniesData = [
    { name: 'Google', students: 32 },
    { name: 'Microsoft', students: 28 },
    { name: 'Amazon', students: 25 },
    { name: 'Apple', students: 18 },
    { name: 'Meta', students: 15 },
    { name: 'IBM', students: 12 },
    { name: 'Deloitte', students: 10 },
  ];
  
  const sectorDistributionData = [
    { name: 'Technology', value: 45 },
    { name: 'Finance', value: 20 },
    { name: 'Consulting', value: 15 },
    { name: 'Healthcare', value: 8 },
    { name: 'Manufacturing', value: 7 },
    { name: 'Others', value: 5 },
  ];
  
  const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];
  
  const packageDistributionData = [
    { range: '<5 LPA', count: 15 },
    { range: '5-10 LPA', count: 35 },
    { range: '10-15 LPA', count: 25 },
    { range: '15-20 LPA', count: 15 },
    { range: '20+ LPA', count: 10 },
  ];

  return (
    <FeaturePageLayout
      title="Placement Report Analysis"
      description="Comprehensive analytics on placement trends, company statistics, and student performance metrics."
    >
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
              <ChartBarIcon size={24} />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-placement-primary">Placement Trends</h3>
                  <p className="text-gray-700">
                    Year-wise placement statistics showing steady improvement over the past 6 years.
                  </p>
                </div>
                <div>
                  <select className="rounded-md border-gray-300 text-sm">
                    <option>All Departments</option>
                    <option>Computer Science</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Business Administration</option>
                  </select>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={placementTrendData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="placements" stroke="#2563eb" activeDot={{ r: 8 }} name="Placement %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div className="bg-placement-primary/5 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">95%</p>
                  <p className="text-sm text-gray-600">Placement Rate</p>
                  <p className="text-xs text-green-600 mt-1">+3% from last year</p>
                </div>
                <div className="bg-placement-primary/5 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">125+</p>
                  <p className="text-sm text-gray-600">Companies Visited</p>
                  <p className="text-xs text-green-600 mt-1">+12 from last year</p>
                </div>
                <div className="bg-placement-primary/5 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">18 LPA</p>
                  <p className="text-sm text-gray-600">Average Package</p>
                  <p className="text-xs text-green-600 mt-1">+2.5 LPA from last year</p>
                </div>
                <div className="bg-placement-primary/5 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-placement-primary">42 LPA</p>
                  <p className="text-sm text-gray-600">Highest Package</p>
                  <p className="text-xs text-green-600 mt-1">+5 LPA from last year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-placement-primary">Top Recruiting Companies</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={topCompaniesData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" name="Number of Students" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              Based on placement data from the 2022-23 academic year
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-placement-primary">Industry Sector Distribution</h3>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={sectorDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {sectorDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              Percentage of students placed in different industry sectors
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-placement-primary">Package Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={packageDistributionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" name="Number of Students" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              Distribution of students across different salary ranges (in Lakhs Per Annum)
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-placement-dark">Key Insights</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-3 py-1">
                <h4 className="font-medium text-placement-dark">Rising Placements</h4>
                <p className="text-sm text-gray-600">Consistent growth in placement percentage over the last 5 years, reaching 95% in 2023.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-3 py-1">
                <h4 className="font-medium text-placement-dark">Tech Dominance</h4>
                <p className="text-sm text-gray-600">Technology sector continues to lead with 45% of the total placements, followed by finance at 20%.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-3 py-1">
                <h4 className="font-medium text-placement-dark">Package Growth</h4>
                <p className="text-sm text-gray-600">Average package increased by 16% compared to the previous year, reflecting strong demand for graduates.</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-3 py-1">
                <h4 className="font-medium text-placement-dark">New Recruiters</h4>
                <p className="text-sm text-gray-600">15 new companies participated in campus recruitment this year, expanding opportunities for students.</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-3 text-placement-dark">Department-wise Performance</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Computer Science</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-placement-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Electrical Engineering</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-placement-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mechanical Engineering</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-placement-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Business Administration</span>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-placement-primary h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full">Download Full Report</Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
              <PieChartIcon size={24} />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold mb-6 text-placement-primary">Performance Analysis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-placement-dark mb-3">Skills in High Demand</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li className="text-gray-600">Data Science & Analytics</li>
                    <li className="text-gray-600">Cloud Computing</li>
                    <li className="text-gray-600">Machine Learning</li>
                    <li className="text-gray-600">UI/UX Design</li>
                    <li className="text-gray-600">Blockchain Development</li>
                  </ol>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-placement-dark mb-3">Success Factors</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li className="text-gray-600">Strong technical fundamentals</li>
                    <li className="text-gray-600">Project-based experience</li>
                    <li className="text-gray-600">Internships & practical exposure</li>
                    <li className="text-gray-600">Soft skills & communication</li>
                    <li className="text-gray-600">Industry certifications</li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-placement-dark mb-3">Areas for Improvement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li className="text-gray-600">Interview preparation</li>
                    <li className="text-gray-600">Resume optimization</li>
                    <li className="text-gray-600">Communication skills</li>
                    <li className="text-gray-600">Leadership experience</li>
                    <li className="text-gray-600">Technical depth in specializations</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  For detailed department-specific analysis and recommendations, schedule a consultation with the placement cell.
                </p>
                <Button>Schedule Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default PlacementReports;
