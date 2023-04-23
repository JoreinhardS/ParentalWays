import { button } from './utils/variants';

export function SecondaryButton({
  className,
  style,
  type = 'button',
  children,
  size = 'md',
  ...rest
}) {
  return (
    <button
      className={button({ variant: 'secondary', size, className })}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
