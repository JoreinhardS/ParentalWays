import { cn } from '@/lib/utils';

export function Container({ className, children, ...rest }) {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
}
