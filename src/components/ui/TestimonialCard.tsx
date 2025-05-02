
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-rich-gray p-6 rounded-lg border border-gold/10 relative",
      className
    )}>
      <div className="text-gold/30 text-6xl font-serif absolute top-4 left-6">"</div>
      <div className="relative z-10">
        <p className="text-white italic mb-6 pt-6">{quote}</p>
        <div className="flex items-center">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gold/30">
              <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-semibold text-white">{author}</p>
            {role && <p className="text-sm text-gray-400">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
