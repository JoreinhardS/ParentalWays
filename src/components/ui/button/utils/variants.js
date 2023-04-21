import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center font-normal bg-primary-10 text-white rounded-[13px]',
  variants: {
    variant: {
      primary: 'bg-primary-10 text-white',
      secondary: 'bg-white text-primary-10',
      outline: 'bg-transparent border border-primary-10 text-primary-10',
      ghosted: 'bg-transparent text-black',
    },
    size: {
      md: 'py-4 px-9 text-lg',
      lg: 'py-[23px] px-[54.5px] text-xl',
    },
  },
});
