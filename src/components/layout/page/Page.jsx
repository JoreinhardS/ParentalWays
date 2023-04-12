import { cn } from '@/lib/utils';

export function Page({ className, children }) {
  return (
    <section className={cn('flex flex-col flex-1', className)}>
      {children}
    </section>
  );
}
