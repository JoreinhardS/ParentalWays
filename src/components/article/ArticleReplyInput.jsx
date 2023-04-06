import { PrimaryButton } from '../ui/button/PrimaryButton';
import { InputTextarea } from '../ui/forms/InputTextarea';

export function ArticleReplyInput() {
  return (
    <div className="relative">
      <InputTextarea
        className="bg-primary-90 mt-9 h-[226px] resize-none rounded pl-[4.375rem] pt-[2.8125rem] text-lg italic text-black placeholder:text-black"
        placeholder="Type your comments here"
      />
      <PrimaryButton className="absolute bottom-[.9375rem] right-3 px-[1.6875rem] pb-[.875rem] pt-1 text-[1.875rem] font-bold leading-none text-[#414141]">
        post
      </PrimaryButton>
    </div>
  );
}
