import { cn } from '@/lib/utils';

export function InternalPageSection({ children, className, ...rest }) {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
}
