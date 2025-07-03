import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout showFooter={false}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="text-9xl font-bold text-primary/20 neon-text">404</div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold neon-text">Page Not Found</h1>
            <p className="text-lg text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="glow-button">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Button variant="outline" className="glow-button" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
