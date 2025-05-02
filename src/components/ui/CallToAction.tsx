
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  text: string;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
  icon?: ReactNode;
}

const CallToAction = ({ text, href, variant = "primary", className, icon }: CallToActionProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all",
        variant === "primary" ? "gold-button" : "outlined-button",
        className
      )}
    >
      {text}
      {icon && <span className="ml-1">{icon}</span>}
    </Link>
  );
};

export default CallToAction;
