import { cn } from '@/lib/utils';

export function OutlineButton({
  className,
  style,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center text-[1.3206rem] leading-[120%] text-primary-10 font-bold py-[.625rem] px-4 border border-primary-10 rounded-[.5744rem] ',
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
