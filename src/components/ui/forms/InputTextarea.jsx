import { cn } from '@/lib/utils';

export function InputTextarea({ className, rows = 4, ...rest }) {
  return (
    <textarea
      className={cn(
        'block w-full text-base text-black-10 border-[#B6B6B6] rounded-lgv outline-none',
        className
      )}
      rows={rows}
      {...rest}
    />
  );
}

InputTextarea.displayName = 'InputTextarea';
