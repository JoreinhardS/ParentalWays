import { cn } from '@/lib/utils';

export function Divider({ className }) {
  return <hr className={cn('border-b border-[#9B9B9B]', className)} />;
}
