import { button } from './utils/variants';

export function OutlineButton({
  className,
  style,
  type = 'button',
  children,
  size = 'md',
  ...rest
}) {
  return (
    <button
      className={button({ variant: 'outline', size, className })}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
