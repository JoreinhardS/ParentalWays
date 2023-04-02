import { cn } from '../../../lib/utils';

export function InputText({ className, type = 'text', ...rest }) {
  return (
    <input
      className={cn(
        'block w-full text-base border border-[#B6B6B6] rounded-lg outline-none pl-3 py-2 h-[2.625rem]',
        className
      )}
      type={type}
      {...rest}
    />
  );
}

InputText.displayName = 'InputText';
