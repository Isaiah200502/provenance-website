
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold gold-gradient mb-4">404</h1>
        <p className="text-xl md:text-2xl mb-8 text-center">Oops! The page you're looking for isn't on our map.</p>
        <Link
          to="/"
          className="gold-button flex items-center gap-2"
        >
          <Home size={18} />
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
