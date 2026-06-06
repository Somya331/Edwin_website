import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { redirects } from "./config/redirects";

const RedirectHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const targetUrl = redirects[location.pathname];

    if (targetUrl) {
      window.location.href = targetUrl;
    }
  }, [location]);

  return <div>Redirecting...</div>;
};

export default RedirectHandler;