import { cn } from '@/lib/utils';

export function Page({ className, children }) {
  return (
    <section className={cn('flex flex-1 flex-col', className)}>
      {children}
    </section>
  );
}
