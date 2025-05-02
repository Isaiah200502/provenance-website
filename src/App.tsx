
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LifeCoaching from "./pages/LifeCoaching";
import Therapy from "./pages/Therapy";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalSkills from "./pages/DigitalSkills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life-coaching" element={<LifeCoaching />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-skills" element={<DigitalSkills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
