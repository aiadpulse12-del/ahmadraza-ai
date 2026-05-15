import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Page Not Found — M.Ahmad Raza";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = selector.replace(/[\[\]"]/g, "").split("=");
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return () => {
        if (prev !== null) el.setAttribute(attr, prev);
      };
    };

    const desc = "The page you're looking for doesn't exist. Return to M.Ahmad Raza's portfolio home.";
    const restoreDesc = setMeta('meta[name="description"]', "content", desc);
    const restoreOgTitle = setMeta('meta[property="og:title"]', "content", "Page Not Found — M.Ahmad Raza");
    const restoreOgDesc = setMeta('meta[property="og:description"]', "content", desc);
    const restoreTwTitle = setMeta('meta[name="twitter:title"]', "content", "Page Not Found — M.Ahmad Raza");
    const restoreTwDesc = setMeta('meta[name="twitter:description"]', "content", desc);

    return () => {
      document.title = prevTitle;
      restoreDesc();
      restoreOgTitle();
      restoreOgDesc();
      restoreTwTitle();
      restoreTwDesc();
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
