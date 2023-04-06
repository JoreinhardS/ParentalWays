import { PrimaryButton } from '../ui/button/PrimaryButton';
import { Star } from '../ui/icons/Star';
import { currency } from '@/lib/currency';

export function CourseItem({
  title,
  description,
  creator,
  price,
  tag,
  rating,
  imageUrl,
}) {
  return (
    <div className="flex h-[16.6875rem] w-[36.75rem] gap-x-[1.125rem] rounded-lg border border-[#E0E0E0]">
      <img src={imageUrl} alt={title} loading="lazy" />
      <div className="flex flex-col justify-between py-4 pr-[1.105rem]">
        <div>
          <div className="flex items-center justify-between">
            <span className="bg-primary-90 flex h-5 w-[4.4375rem] items-center justify-center rounded-full text-[.625rem] font-normal">
              {tag}
            </span>
            <div className="flex items-center space-x-[.625rem]">
              <span className="text-sm font-bold text-[#333333]">{`${rating}/5`}</span>
              <Star />
            </div>
          </div>
          <h3 className="mt-4 text-[1.5rem] font-bold leading-none text-[#333333]">
            {title}
          </h3>
          <span className="mt-1 block text-[.75rem] font-normal text-[#929292]">
            By : {creator}
          </span>
          <p className="mt-4 text-sm font-normal leading-4 text-black">
            {description}
          </p>
        </div>
        <div className="mt-auto flex items-center">
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-normal text-[#999999]">
              Start from
            </span>
            <span className="text-lg font-bold text-[#DF7026]">
              {currency(price)}
            </span>
          </div>
          <PrimaryButton className="h-[1.8444rem] rounded px-7 py-[.4375rem] text-sm leading-none">
            Join Now
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
