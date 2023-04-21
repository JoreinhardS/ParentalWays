import { button } from './utils/variants';

export function GhostedButton({
  className,
  style,
  type = 'button',
  children,
  size = 'md',
  ...rest
}) {
  return (
    <button
      className={button({ variant: 'ghosted', size, className })}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
