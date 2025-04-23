
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobMatching from "./pages/JobMatching";
import ResumeManagement from "./pages/ResumeManagement";
import CertificateVerification from "./pages/CertificateVerification";
import JobUpdates from "./pages/JobUpdates";
import AlumniInteraction from "./pages/AlumniInteraction";
import JobApplicationTracker from "./pages/JobApplicationTracker";
import EmployerDashboard from "./pages/EmployerDashboard";
import Notifications from "./pages/Notifications";
import Forums from "./pages/Forums";
import SkillAnalytics from "./pages/SkillAnalytics";
import PlacementReports from "./pages/PlacementReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/job-matching" element={<JobMatching />} />
          <Route path="/resume-management" element={<ResumeManagement />} />
          <Route path="/certificate-verification" element={<CertificateVerification />} />
          <Route path="/job-updates" element={<JobUpdates />} />
          <Route path="/alumni-interaction" element={<AlumniInteraction />} />
          <Route path="/job-application-tracker" element={<JobApplicationTracker />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/skill-analytics" element={<SkillAnalytics />} />
          <Route path="/placement-reports" element={<PlacementReports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
