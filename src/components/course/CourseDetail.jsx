import { Link } from 'react-router-dom';
import { PlayCircle } from 'iconsax-react';

import { Star } from '../ui/icons/Star';
import { Lock } from '../ui/icons/Lock';
import { PrimaryButton } from '../ui/button/PrimaryButton';
import { Play } from '../ui/icons/Play';

export function CourseDetail() {
  return (
    <div className="mt-[.6875rem] flex flex-col items-center gap-x-6 gap-y-8 sm:mt-10 sm:flex-row sm:items-start xl:mt-[9.25rem] xl:gap-x-5 xl:px-[3.4375rem]">
      <div className="relative h-[29.5rem] w-[19.6875rem] rounded-lg border border-[#E0E0E0] bg-[#FBFBFB] px-0 pb-[27.06px] pt-[.6875rem] sm:h-[40.9375rem] sm:w-[20.3125rem] sm:px-3 sm:py-[.875rem] xl:h-[55.0625rem] xl:w-[39.125rem] xl:px-4 xl:pb-[2.375rem] xl:pt-5">
        <div className="relative">
          <figure>
            <img
              src="/images/course-detail.webp"
              alt="Healthy Relationship"
              className="h-auto w-full"
              loading="lazy"
            />
          </figure>
          <button className="absolute inset-0 m-auto flex h-[3.5244rem] w-[3.5244rem] items-center justify-center rounded-full bg-[#B6B6B6]/50 sm:h-[4.4375rem] sm:w-[4.4375rem] xl:h-[6.9375rem] xl:w-[6.9375rem]">
            <Play className="h-[1.81rem] w-[1.81rem] sm:h-9 sm:w-9 xl:h-[3.5625rem] xl:w-[3.5625rem]" />
          </button>
        </div>
        <div className="mt-[.6875rem] pl-[5px] sm:mt-6 sm:pl-0 xl:mt-10">
          <h3 className="text-[1.5rem] font-bold leading-[120%] text-black sm:text-2xl xl:text-4xl">
            Healty Relationship
          </h3>
          <span className="mt-[7px] inline-block text-[10.16px] font-semibold leading-[165%] text-[#929292] sm:mt-[.875rem] sm:text-base xl:mt-3 xl:text-[1.25rem]">
            By : Prof.Ida Ayu
          </span>
          <p className="mt-[6.74px] text-[.875rem] font-medium leading-[120%] text-black sm:mt-[.875rem] sm:text-base xl:mt-5 xl:text-lg">
            During the premarital period, it is important to maintain a healthy
            and supportive relationship with each other. This will help couples
            build a strong foundation for their married life.
          </p>
        </div>
        <div className="mt-[1.1875rem] flex flex-row items-end justify-between pl-[5px] pr-[8.45px] sm:mt-6 sm:flex-col sm:items-start sm:px-0 xl:mt-[2.8125rem]">
          <div>
            <span className="block text-[12.04px] font-normal text-[#999999] sm:text-base xl:text-lg">
              Start from
            </span>
            <span className="mt-1 text-[17.74px] font-bold text-[#DF7026] sm:text-xl xl:text-2xl">
              Rp 150.000
            </span>
          </div>
          <div className="mt-[2.0625rem] flex items-center gap-x-[6.34px] sm:gap-x-[.625rem]">
            <span className="text-[12.04px] font-bold text-[#333333] sm:text-lg xl:text-lg">
              4,2/5
            </span>
            <Star className="h-[12.67px] w-[12.67px] sm:h-5 sm:w-5" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <ul className="space-y-[14.16px] sm:space-y-3 xl:space-y-5">
          <li className="flex w-full max-w-[27.625rem] items-center justify-between rounded-lg border border-[#E0E0E0] bg-[#FBFBFB] py-[11.33px] pl-[12.75px] pr-[10.62px] sm:px-5 sm:py-[.875rem] xl:py-4 xl:pl-[18px] xl:pr-[15px]">
            <span className="text-base font-bold leading-[120%] text-black sm:text-lg xl:text-xl">
              Introduction
            </span>
            <button>
              <PlayCircle
                variant="Bold"
                className="h-[35.41px] w-[35.41px] sm:h-[1.875rem] sm:w-[1.875rem] xl:h-[3.125rem] xl:w-[3.125rem]"
                color="#F4A42B"
              />
            </button>
          </li>
          <li className="flex w-full max-w-[27.625rem] items-center justify-between rounded-lg border border-[#E0E0E0] bg-[#FBFBFB] py-[11.33px] pl-[12.75px] pr-[10.62px] sm:px-5 sm:py-[.875rem] xl:py-4 xl:pl-[18px] xl:pr-[15px]">
            <span className="text-base font-bold text-[#D9D9D9] sm:text-lg xl:text-xl">
              Step 1
            </span>
            <Lock className="h-[35.41px] w-[35.41px] sm:h-[1.875rem] sm:w-[1.875rem] xl:h-[3.125rem] xl:w-[3.125rem]" />
          </li>
          <li className="flex w-full max-w-[27.625rem] items-center justify-between rounded-lg border border-[#E0E0E0] bg-[#FBFBFB] py-[11.33px] pl-[12.75px] pr-[10.62px] sm:px-5 sm:py-[.875rem] xl:py-4 xl:pl-[18px] xl:pr-[15px]">
            <span className="text-base font-bold text-[#D9D9D9] sm:text-lg xl:text-xl">
              Step 2
            </span>
            <Lock className="h-[35.41px] w-[35.41px] sm:h-[1.875rem] sm:w-[1.875rem] xl:h-[3.125rem] xl:w-[3.125rem]" />
          </li>
          <li className="flex w-full max-w-[27.625rem] items-center justify-between rounded-lg border border-[#E0E0E0] bg-[#FBFBFB] py-[11.33px] pl-[12.75px] pr-[10.62px] sm:px-5 sm:py-[.875rem] xl:py-4 xl:pl-[18px] xl:pr-[15px]">
            <span className="text-base font-bold text-[#D9D9D9] sm:text-lg xl:text-xl">
              Step 3
            </span>
            <Lock className="h-[35.41px] w-[35.41px] sm:h-[1.875rem] sm:w-[1.875rem] xl:h-[3.125rem] xl:w-[3.125rem]" />
          </li>
        </ul>
        <div className="mt-[43.2px] text-center sm:mt-10 xl:mt-[3.8125rem]">
          <Link to="/course/checkout-details">
            <PrimaryButton className="w-full rounded-[9.21px] py-[7.7px] text-base sm:rounded-[13px] sm:py-[.6875rem] sm:text-xl">
              Join now
            </PrimaryButton>
          </Link>
          <h4 className="mx-auto mt-[19.83px] max-w-[283.26px] text-[19.83px] font-bold text-black sm:mt-[.875rem] sm:max-w-[25rem] sm:text-lg xl:mt-7 xl:text-2xl">
            Join now and get Free Mentoring
          </h4>
          <p className="mt-[19.98px] text-sm font-medium text-black sm:mt-[.875rem] md:text-base xl:mt-7">
            Anda akan mendapatkan link akses Telegram untuk mentoring
          </p>
        </div>
      </div>
    </div>
  );
}
