import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary",
        link: "text-primary font-bold hover:underline underline-offset-4",
        cta: "text-primary font-bold border-2 border-b-8 border-primary hover:border-b-4 transform duration-150 transition-all bg-gradient-to-r from-blue to-green hover:from-green hover:to-blue",
        giantCTA:
          "text-primary font-bold border-4 border-b-[16px] border-primary  hover:border-b-4 transform duration-150 transition-all hover:bg-gradient-to-r hover:from-green hover:to-blue",
        secondaryCTA:
          "text-primary font-bold border-2 border-b-4 border-primary hover:border-b-2 transform duration-150 transition-all bg-gradient-to-l from-blue to-green hover:from-green hover:to-blue",
        empty: "",
      },
      size: {
        default:
          "py-1 px-2 text-sm md:text-normal md:px-4 md:py-2 rounded-full",
        sm: "h-10 rounded-full px-4 text-sm md:text-normal",
        lg: "flex justify-between px-4 py-1 rounded-full w-full sm:w-max",
        icon: "h-12 w-12 rounded-full",
        giant: "w-full h-full rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
