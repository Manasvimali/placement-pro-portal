
import React from 'react';
import FeaturePageLayout from '@/components/layout/FeaturePageLayout';
import { Button } from '@/components/ui/button';
import { FileCheckIcon, ShieldCheckIcon, BadgeCheckIcon } from 'lucide-react';

const CertificateVerification = () => {
  return (
    <FeaturePageLayout
      title="Certificate Verification"
      description="Secure and instant verification of academic credentials and achievements for students and recruiters."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-placement-dark">Streamlined Credential Verification</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <FileCheckIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Secure Digital Verification</h3>
                  <p className="text-gray-700">
                    Our system provides tamper-proof digital verification of academic certificates, degrees, transcripts, and other credentials, eliminating the need for manual verification processes.
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-placement-primary/5 p-4 rounded-md">
                      <h4 className="font-medium text-placement-dark mb-2">Blockchain Technology</h4>
                      <p className="text-gray-600 text-sm">Immutable record-keeping ensures the highest level of security and authenticity.</p>
                    </div>
                    <div className="bg-placement-primary/5 p-4 rounded-md">
                      <h4 className="font-medium text-placement-dark mb-2">Instant Verification</h4>
                      <p className="text-gray-600 text-sm">Real-time verification within seconds instead of days or weeks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <ShieldCheckIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">Credential Management</h3>
                  <p className="text-gray-700 mb-4">
                    Students can securely store, manage, and share their academic and professional credentials with potential employers with just a few clicks.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Upload and digitize physical certificates</li>
                    <li>Create a secure credential portfolio</li>
                    <li>Control access to your credentials</li>
                    <li>Generate shareable verification links</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-placement-primary/10 flex items-center justify-center text-placement-primary shrink-0">
                  <BadgeCheckIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-placement-primary">For Employers and Institutions</h3>
                  <p className="text-gray-700 mb-4">
                    Recruiters and educational institutions can easily verify credentials, reducing fraudulent applications and streamlining the recruitment process.
                  </p>
                  <div className="bg-placement-primary/5 p-4 rounded-md">
                    <h4 className="font-medium text-placement-dark mb-2">Benefits for Recruiters</h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                      <li>Reduce hiring risks with verified credentials</li>
                      <li>Streamline background checks</li>
                      <li>Quick verification through QR codes or verification links</li>
                      <li>Integrated verification reports for candidate profiles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-placement-dark">Verify Your Credentials</h3>
            <p className="text-gray-600 mb-6">
              Upload your certificates and documents to create secure, verified digital versions that you can share with employers.
            </p>
            <Button className="w-full mb-4">Upload Documents</Button>
            <Button variant="outline" className="w-full mb-6">View My Credentials</Button>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-4 text-placement-dark">Supported Document Types</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-placement-primary/5 p-2 rounded text-center">
                  <span>Degrees</span>
                </div>
                <div className="bg-placement-primary/5 p-2 rounded text-center">
                  <span>Transcripts</span>
                </div>
                <div className="bg-placement-primary/5 p-2 rounded text-center">
                  <span>Certificates</span>
                </div>
                <div className="bg-placement-primary/5 p-2 rounded text-center">
                  <span>ID Cards</span>
                </div>
                <div className="bg-placement-primary/5 p-2 rounded text-center">
                  <span>Marks Sheets</span>
                </div>
                <div className="bg-placement-primary/5 p-2 rounded text-center">
                  <span>Letters</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center p-4 bg-placement-primary/5 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Need to verify a credential?</p>
                  <Button variant="outline" size="sm">
                    Verify Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default CertificateVerification;
