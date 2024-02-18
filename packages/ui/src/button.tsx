import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const variants = cva(
  "flex justify-center items-center rounded-md px-4 py-1.5 text-sm font-semibold",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-700 leading-6 text-white shadow-sm hover:bg-indigo-600",
        outline:
          "border text-black bg-background hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={twMerge(variants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
