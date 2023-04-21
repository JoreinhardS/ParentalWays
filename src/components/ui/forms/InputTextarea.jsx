import { cn } from '@/lib/utils';

export function InputTextarea({ className, rows = 4, ...rest }) {
  return (
    <textarea
      className={cn(
        'block w-full rounded-lg border border-[#B6B6B6] text-base text-black-10 outline-none',
        className
      )}
      rows={rows}
      {...rest}
    />
  );
}

InputTextarea.displayName = 'InputTextarea';
