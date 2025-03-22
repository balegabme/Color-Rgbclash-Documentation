import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export const NotFoundPage = function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <h3>404</h3>
        <h4>Page not found</h4>
        <Button className="mt-8" onClick={() => navigate("/")}>
          Go to homepage
        </Button>
      </div>
    </div>
  );
};
