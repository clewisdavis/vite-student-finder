import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import {
  cva,
  type VariantProps,
} from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/theme';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-blue-500 text-white hover:bg-blue-400 dark:bg-primary dark:text-white',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600',
        outline:
          'border border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary',
        secondary:
          'bg-secondary text-white hover:bg-secondary/90 dark:bg-secondary',
        ghost:
          'text-primary hover:bg-primary/10 dark:text-primary',
        link: 'text-primary underline hover:text-primary/90 dark:text-primary',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
