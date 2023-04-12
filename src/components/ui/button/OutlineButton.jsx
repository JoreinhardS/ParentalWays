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
        'inline-flex items-center justify-center text-[.5281rem] md:text-sm xl:text-[1.3206rem] leading-[120%] text-primary-10 font-bold py-1 px-[.375rem] md:py-[.375rem] md:px-[.875rem] xl:py-[.625rem] xl:px-4 h-[1.15rem] md:h-[2.0625rem] xl:h-[2.875rem] border border-primary-10 rounded md:rounded-[.5744rem] ',
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
