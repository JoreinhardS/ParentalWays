import { Link } from 'react-router-dom';

import { PrimaryButton } from '../ui/button/PrimaryButton';
import { Star } from '../ui/icons/Star';
import { toKebabCase } from '@/lib/convertText';
import { currency } from '@/lib/currency';
import { cn } from '@/lib/utils';

export function CourseItem({
  id,
  title,
  description,
  creator,
  price,
  tag,
  rating,
  imageUrl,
  className,
}) {
  const href = `${toKebabCase(title)}-${id}`;

  return (
    <div
      className={cn(
        'relative flex h-[8.8831rem] max-w-[19.5625rem] flex-row gap-x-[.5881rem] overflow-hidden rounded border border-[#E0E0E0] bg-[#FBFBFB] md:h-[22rem] md:max-w-[13.125rem] md:flex-col xl:h-[16.6875rem] xl:max-w-[36.75rem] xl:flex-row xl:gap-x-[1.125rem] xl:rounded-lg',
        className
      )}
    >
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="h-full w-[5.8838rem] object-cover md:h-[9.1875rem] md:w-full xl:h-full xl:w-[11.0525rem]"
      />
      <div className="flex h-full flex-col justify-between pb-[.3563rem] pr-[.5881rem] pt-[.5325rem] md:p-2 xl:pb-[.6694rem] xl:pr-[1.105rem] xl:pt-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="flex h-[.6412rem] w-[2.3619rem] items-center justify-center rounded-full bg-primary-90 text-[.3325rem] font-normal md:h-[1.0625rem] md:w-[3.4375rem] md:text-[.5rem] xl:h-5 xl:w-[4.4375rem] xl:text-[.625rem]">
              {tag}
            </span>
            <div className="flex items-center space-x-[.3325rem] md:space-x-[.625rem]">
              <span className="text-[.4325rem] font-bold text-[#333333] md:text-xs xl:text-sm">{`${rating}/5`}</span>
              <Star className="h-[10.12px] w-[10.65px] md:h-5 md:w-5" />
            </div>
          </div>
          <h3 className="mt-[.6563rem] text-[.7987rem] font-bold text-[#333333] md:mt-[.125rem] md:text-base xl:mt-4 xl:text-[1.5rem] xl:leading-none">
            {title}
          </h3>
          <span className="block text-[.3994rem] font-normal text-[#929292] md:text-xs xl:mt-1 xl:text-[.75rem]">
            By : {creator}
          </span>
          <p className="mt-[.5325rem] text-[.4325rem] font-normal leading-normal text-black max-[328px]:line-clamp-1 md:mt-1 md:line-clamp-4 md:text-xs xl:mt-4 xl:text-sm">
            {description}
          </p>
        </div>
        <div className="mt-auto flex items-end xl:items-center">
          <div className="flex flex-1 flex-col">
            <span className="text-[.3981rem] font-normal leading-none text-[#999999] md:text-[.7481rem]">
              Start from
            </span>
            <span className="text-[.6481rem] font-bold text-[#DF7026] md:text-sm xl:text-lg">
              {currency(price)}
            </span>
          </div>
          <PrimaryButton className="rounded-[.1425rem] px-[.875rem] py-1 text-[.4475rem] font-normal leading-none md:rounded md:px-[1.0625rem] xl:h-[1.8444rem] xl:px-7 xl:py-[.4375rem] xl:text-sm">
            Join Now
          </PrimaryButton>
        </div>
      </div>

      {title === 'Healthy Relationship' ? (
        <Link to={`/course/${href}`} className="absolute inset-0 z-10"></Link>
      ) : null}
    </div>
  );
}
