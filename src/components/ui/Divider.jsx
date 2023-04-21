import { cn } from '@/lib/utils';

export function Divider({ className }) {
  return <hr className={cn('border border-[#9B9B9B]', className)} />;
}
