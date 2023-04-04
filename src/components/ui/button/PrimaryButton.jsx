import { cn } from '@/lib/utils';

export function PrimaryButton({
  className,
  style,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      className={cn(
        'bg-primary-10 inline-flex items-center justify-center rounded py-2 px-4 text-base font-medium text-white',
        className
      )}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
