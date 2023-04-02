import clsx from 'clsx';

export function PrimaryButton({
  className,
  style,
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button
      className={clsx(
        'bg-primary-10 inline-flex items-center justify-center rounded-lg py-3 text-base font-medium text-white',
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
