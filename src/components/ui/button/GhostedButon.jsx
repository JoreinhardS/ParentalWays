import { button } from './utils/variants';

export function GhostedButton({
  className,
  style,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      className={button({ variant: 'ghosted', size: 'md', className })}
      style={style}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
