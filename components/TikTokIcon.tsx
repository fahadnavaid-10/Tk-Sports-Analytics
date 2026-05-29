interface TikTokIconProps {
  size?: number;
  className?: string;
}

export default function TikTokIcon({ size = 22, className }: TikTokIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.17-.25-.26V14c0 2.37-.87 4.74-2.5 6.27-1.8 1.7-4.34 2.41-6.78 1.95-2.87-.54-5.26-2.86-5.83-5.74-.74-3.75 1.56-7.61 5.31-8.35 1-.2 2.03-.13 3.01.18V12.4c-1.01-.52-2.3-.4-3.2.3-.92.7-1.4 1.88-1.25 3.05.15 1.2 1.09 2.21 2.29 2.45 1.18.23 2.48-.3 3.02-1.37.28-.56.36-1.2.34-1.83V.02z" />
    </svg>
  );
}
