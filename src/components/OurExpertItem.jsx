import { OutlineButton } from './ui/button/OutlineButton';
import { PrimaryButton } from './ui/button/PrimaryButton';

export function OurExpertItem({ imageUrl, name, description }) {
  return (
    <div className="flex flex-col items-center gap-10 py-10 md:flex-row md:items-start xl:gap-x-[3.75rem]">
      <figure>
        <img src={imageUrl} alt={name} className="h-[400px] w-[300px]" />
      </figure>
      <div className="flex-1">
        <h3 className="text-center text-2xl font-medium text-primary-10 md:text-start xl:text-3xl">
          {name}
        </h3>
        <p className="mt-5 text-center text-base font-normal text-[#2B414C] md:text-start xl:text-xl xl:leading-[160%]">
          {description}
        </p>
        <div className="mt-8 flex justify-center space-x-5 md:justify-start">
          <OutlineButton className="rounded-lg px-6 py-[10px] text-base md:text-lg">
            Show more
          </OutlineButton>
          <PrimaryButton className="rounded-lg px-6 py-[10px] text-base md:text-lg">
            Contact
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
