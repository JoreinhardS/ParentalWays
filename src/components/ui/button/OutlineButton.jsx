import { button } from './utils/variants';

export function OutlineButton({
  className,
  style,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      className={button({ variant: 'outline', size: 'md', className })}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
