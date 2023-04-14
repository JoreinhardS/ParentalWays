import { cn } from '@/lib/utils';

export function InputText({ className, type = 'text', ...rest }) {
  return (
    <input
      className={cn(
        'block h-[2.625rem] w-full rounded-lg border border-[#B6B6B6] py-2 pl-3 text-base outline-none',
        className
      )}
      type={type}
      {...rest}
    />
  );
}

InputText.displayName = 'InputText';
