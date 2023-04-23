import { cn } from '@/lib/utils';

export function InternalPageContent({ children, className, ...rest }) {
  return (
    <div className={cn('flex flex-1 flex-col', className)} {...rest}>
      {children}
    </div>
  );
}
