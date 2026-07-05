import { cn } from "@/lib/utils";
import { Link, LinkProps } from "react-router-dom";

export default function AppLink({ children, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "text-green-pea underline hover:text-parsley",
        props.className
      )}
    >
      {children}
    </Link>
  );
}
