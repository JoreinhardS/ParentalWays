import { PaymentMethod } from './PaymentMethod';
import { PrimaryButton } from './ui/button/PrimaryButton';
import { OutlineButton } from './ui/button/OutlineButton';
import { Star } from './ui/icons/Star';

export function CheckoutDetails() {
  return (
    <div className="mt-[42px] flex flex-col gap-x-5 gap-y-6 sm:mt-16 sm:flex-row xl:mt-[115px] xl:px-[3.4375rem]">
      <div className="flex-1 rounded-[15px] border border-[#E0E0E0] bg-[#FBFBFB]">
        <figure className="pl-[11.14px] pr-[11.72px] pt-[8.58px] sm:px-3 sm:pt-[14px] xl:pl-[19px] xl:pr-5 xl:pt-[15px]">
          <img src="/images/checkout-detail.webp" alt="Healthy Relationship" />
        </figure>
        <div className="mt-[12.89px] px-3 pb-[18.96px] sm:mt-6 sm:pb-[14px] xl:mt-[22px] xl:pb-[44px] xl:pl-[23px]">
          <h3 className="text-[1.5rem] font-bold leading-[120%] text-black sm:text-2xl xl:text-4xl">
            Healthy Relationship
          </h3>
          <span className="mt-[7px] inline-block text-[11.72px] font-normal leading-[165%] text-[#929292] sm:mt-[.875rem] sm:text-base xl:mt-3 xl:text-[1.25rem]">
            Oleh : Prof. Ida Ayu
          </span>
          <p className="mt-[11.72px] max-w-[477.4px] text-[.875rem] font-medium leading-[120%] text-black sm:mt-[.875rem] sm:text-base xl:mt-5 xl:text-lg">
            During the premarital period, it is important to maintain a healthy
            and supportive relationship with each other. This will help couples
            build a strong foundation for their married life.
          </p>
          <div className="mt-6 hidden sm:flex sm:items-center sm:gap-x-[10px] xl:mt-[47px]">
            <span className="text-[12.04px] font-bold text-[#333333] sm:text-lg xl:text-lg">
              4,2/5
            </span>
            <Star className="h-[12.67px] w-[12.67px] sm:h-5 sm:w-5" />
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-[15px] border border-[#E0E0E0] bg-[#FBFBFB]">
        <div className="mx-auto mt-[33.42px] w-[266.63px] rounded-2xl bg-white p-[17px] shadow-[0_0_30px_rgba(0,0,0,0.12)] sm:mt-4 sm:w-[305px] sm:px-[10px] sm:py-4 xl:mt-[57px] xl:w-[452px] xl:p-7">
          <div className="space-y-2 xl:space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[13.57px] font-normal text-black-10 sm:text-base xl:text-xl">
                Price Class
              </span>
              <span className="text-[13.57px] font-bold text-black-10 sm:text-base xl:text-xl">
                Rp 150.000
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13.57px] font-normal text-black-10 sm:text-base xl:text-xl">
                Fee Service
              </span>
              <span className="text-[13.57px] font-bold text-black-10 sm:text-base xl:text-xl">
                Rp 10.000
              </span>
            </div>
          </div>
          <div className="mt-[14px] flex items-center justify-between xl:mt-[26px]">
            <span className="text-[16.52px] font-medium text-black-10 sm:text-lg xl:text-2xl">
              Total Payment
            </span>
            <span className="text-[16.52px] font-bold text-primary-10 sm:text-lg xl:text-2xl">
              Rp 160.000
            </span>
          </div>
        </div>
        <div className="mt-20 space-y-[10.35px] pb-[22.61px] sm:mt-[92px] sm:space-y-[14px] sm:px-[10px] sm:pb-0 xl:mt-[147px] xl:px-[54px]">
          <PaymentMethod>
            <PrimaryButton className="w-full rounded-lg py-[11px] text-[17.01px] sm:rounded-[13px] sm:text-xl">
              Confirm
            </PrimaryButton>
          </PaymentMethod>
          <OutlineButton className="w-full rounded-lg py-[11px] text-[17.01px] sm:rounded-[13px] sm:text-xl">
            Back
          </OutlineButton>
        </div>
      </div>
    </div>
  );
}
