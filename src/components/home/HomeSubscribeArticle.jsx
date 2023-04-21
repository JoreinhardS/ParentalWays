import { PrimaryButton } from '../ui/button/PrimaryButton';
import { FormGroup } from '../ui/forms/FormGroup';
import { InputText } from '../ui/forms/InputText';

export function HomeSubscribeArticle() {
  return (
    <section className="relative mt-[84.97px] h-[136px] overflow-hidden bg-[#FCF4EF] pt-[33px] sm:h-[183.02px] sm:pt-[28.96px] xl:h-[316px] xl:pt-[50px]">
      <h2 className="text-center text-[15.61px] font-bold text-[#333333] sm:text-[18.53px] xl:text-[2rem]">
        Get our free article
      </h2>
      <FormGroup className="relative mx-auto mt-[15.13px] max-w-[301px] sm:mt-[18.7px] sm:max-w-[357.35px] xl:mt-8 xl:max-w-[617px]">
        <InputText
          type="email"
          placeholder="Your email address"
          className="h-[35.12px] rounded-[5.85px] border-[#B3B3B3] bg-white pb-[10.39px] pl-[11.68px] pt-[10.73px] text-[11.24px] sm:h-[41.7px] sm:rounded-[6.95px] sm:pb-[11.96px] sm:pl-[15.06px] sm:pt-[12.74px] sm:text-[13.34px] xl:h-[72px] xl:rounded-xl xl:pb-5 xl:pl-[26px] xl:pt-[23px] xl:text-xl"
        />
        <PrimaryButton className="absolute right-[4.88px] top-[6px] rounded-[3.48px] px-[21.3px] py-[3.48px] text-[11.24px] sm:right-[5.79px] sm:top-[9.27px] sm:text-[13.34px] xl:right-[21px] xl:top-4 xl:rounded-md xl:px-8 xl:py-[7px] xl:text-xl">
          Subscribe
        </PrimaryButton>
      </FormGroup>
      <img
        src="/images/ellipse.svg"
        alt="ellipse"
        className="absolute bottom-0 left-0 h-[36.59px] w-[73.18px] sm:h-[81.37px] sm:w-[162.75px] xl:h-[140.5px] xl:w-[281px]"
      />
      <img
        src="/images/subtract.svg"
        alt="subtract"
        className="absolute -right-2 top-[-22.21px] h-[70.43px] w-[92.97px] sm:-right-7 sm:top-[-49.4px] sm:h-[156.63px] sm:w-[206.76px] xl:-right-11 xl:top-[-85.29px] xl:h-[270.44px] xl:w-[357px]"
      />
    </section>
  );
}
