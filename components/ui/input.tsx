import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] rounded-md border-[0.2px] dark:border-custom-dark border-custom-light  shadow-lg focus:!border-accent font-medium  px-4 py-5 text-base bg-transparent  placeholder:text-accent outline-none ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
