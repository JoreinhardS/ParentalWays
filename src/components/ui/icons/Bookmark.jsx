export function Bookmark({
  size = 24,
  color = 'currentColor',
  stroke = 'currentColor',
  strokeWidth = 2,
  className,
  ...rest
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <g clipPath="url(#clip0_731_6934)">
        <path
          d="M14.9998 6.66699H24.9998C25.8839 6.66699 26.7317 7.01818 27.3569 7.6433C27.982 8.26842 28.3332 9.11627 28.3332 10.0003V33.3337L19.9998 28.3337L11.6665 33.3337V10.0003C11.6665 9.11627 12.0177 8.26842 12.6428 7.6433C13.2679 7.01818 14.1158 6.66699 14.9998 6.66699Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_731_6934">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
