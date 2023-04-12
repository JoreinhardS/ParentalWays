import { PrimaryButton } from '../ui/button/PrimaryButton';
import { FormGroup } from '../ui/forms/FormGroup';
import { InputTextarea } from '../ui/forms/InputTextarea';

export function ArticleReplyInput() {
  return (
    <FormGroup className="relative mt-[.6875rem] md:mt-[2.8125rem] xl:mt-9">
      <InputTextarea
        className="bg-primary-90 h-[8.375rem] w-full resize-none rounded pl-[1.2588rem] pt-[.7925rem] text-[.75rem] italic text-black placeholder:text-black md:h-[12.625rem] md:pl-6 md:pt-6 md:text-lg xl:h-[14.125rem] xl:pl-[4.375rem] xl:pt-[2.8125rem]"
        placeholder="Type your comments here"
      />
      <PrimaryButton className="absolute bottom-[.6994rem] right-[.1906rem] rounded-sm px-[.4375rem] py-1 text-[.5394rem] font-bold text-[#414141] md:bottom-6 md:right-6 md:rounded md:px-[.875rem] md:text-lg xl:bottom-[.9375rem] xl:right-3 xl:px-[1.6875rem] xl:pb-[.875rem] xl:pt-1 xl:text-[1.875rem] xl:leading-none">
        Post
      </PrimaryButton>
    </FormGroup>
  );
}
