import { cn } from '@/lib/utils';

export function InternalPageContent({ children, className, ...rest }) {
  return (
    <div className={cn('flex flex-col flex-1', className)} {...rest}>
      {children}
    </div>
  );
}
