import { cn } from '@/lib/utils';

export function Callout({ className, children }) {
  return (
    <div
      className={cn(
        'flex h-full items-center border-l-[.3281rem]  border-primary-10 pl-[.3281rem] md:h-[5.5rem] md:border-l-[1.125rem] md:pl-[1.3125rem] xl:h-[7.5625rem] xl:items-start xl:pt-6',
        className
      )}
    >
      {children}
    </div>
  );
}
