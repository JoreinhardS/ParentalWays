import { cn } from '../../../lib/utils';

export function FormLabel({ className, children, htmlFor, ...rest }) {
  return (
    <label
      className={cn('block text-lg text-black-10 font-medium', className)}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  );
}

FormLabel.displayName = 'FormLabel';
