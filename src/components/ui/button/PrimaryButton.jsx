import { button } from './utils/variants';

export function PrimaryButton({
  className,
  style,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      className={button({ variant: 'primary', size: 'md', className })}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
