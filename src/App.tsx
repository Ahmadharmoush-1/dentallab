import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmileDesign from "./pages/services/SmileDesign";
import Veneers from "./pages/services/Veneers";
import DentalImplants from "./pages/services/DentalImplants";
import TeethWhitening from "./pages/services/TeethWhitening";
import ZirconiaCrowns from "./pages/services/ZirconiaCrowns";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/smile-design" element={<SmileDesign />} />
            <Route path="/services/veneers" element={<Veneers />} />
            <Route path="/services/dental-implants" element={<DentalImplants />} />
            <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
            <Route path="/services/zirconia-crowns" element={<ZirconiaCrowns />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
