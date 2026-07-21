import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import Portfolio from "@/pages/Portfolio";
import Certificates from "@/pages/Certificates";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/certifications" component={Certificates} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    
    // Simulate loading time for the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {loading ? (
          <LoadingScreen />
        ) : (
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <CustomCursor />
            <Router />
          </WouterRouter>
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
