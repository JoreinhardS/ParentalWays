import { cn } from '@/lib/utils';

export function GhostedButton({
  className,
  style,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center py-2 px-[0.625rem] text-base text-black font-semibold',
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
