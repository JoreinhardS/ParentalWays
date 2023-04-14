import { cn } from '@/lib/utils';

export function ArticleCard({ title, imageUrl, className, tag, style }) {
  return (
    <div
      className={cn(
        'relative h-[8.6781rem] w-[9.44rem] sm:h-[12.415rem] sm:w-[13.4063rem] xl:h-[22.0625rem] xl:w-[24rem]',
        className
      )}
    >
      <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      <span className="absolute right-[5.99px] top-[6.92px] z-10 flex h-[.7681rem] w-[1.9856rem] items-center justify-center rounded-full bg-primary-10 p-[3px] text-[.3444rem] font-normal text-white sm:right-[8.69px] sm:top-[14.94px] sm:h-[17.94px] sm:w-[44.94px] sm:p-[4.47px] sm:text-[7.82px] xl:right-6 xl:top-6 xl:h-[33px] xl:w-20 xl:p-2 xl:text-[.875rem]">
        {tag}
      </span>
      <div className="glassmorphism absolute -bottom-1 z-10 flex h-[2.0156rem] w-full items-center pl-[.59rem] pr-[.3444rem] sm:h-[2.8631rem] sm:pl-[.8319rem] sm:pr-[.4888rem] xl:h-[5.125rem] xl:pl-6 xl:pr-[.875rem]">
        <h3
          style={style}
          className="text-[.5656rem] font-bold text-[#414141] sm:text-[.75rem] xl:text-xl"
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
