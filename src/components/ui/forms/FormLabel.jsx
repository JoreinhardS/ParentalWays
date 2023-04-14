import { cn } from '@/lib/utils';

export function FormLabel({ className, children, htmlFor, ...rest }) {
  return (
    <label
      className={cn('block text-lg font-medium text-black-10', className)}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  );
}

FormLabel.displayName = 'FormLabel';
