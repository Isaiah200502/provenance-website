
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  linkText?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  linkText = "Learn More",
  className,
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-rich-gray p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 group",
        className
      )}
    >
      <div className="mb-4 text-gold w-12 h-12 flex items-center justify-center bg-gold/10 rounded-md">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-gold hover:text-gold-light font-medium transition-colors"
      >
        {linkText} <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
