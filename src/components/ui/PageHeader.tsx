
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn("text-center max-w-3xl mx-auto px-4", className)}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gold-gradient mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
