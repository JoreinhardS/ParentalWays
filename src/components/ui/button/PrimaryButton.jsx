import { button } from './utils/variants';

export function PrimaryButton({
  className,
  style,
  type = 'button',
  children,
  size = 'md',
  ...rest
}) {
  return (
    <button
      className={button({ variant: 'primary', size, className })}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
