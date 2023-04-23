import { Link } from 'react-router-dom';
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react';

import { PrimaryButton } from '../ui/button/PrimaryButton';

export function HomeSuccessStory() {
  return (
    <section className="mt-[62.04px] xl:mt-[121.62px]">
      <h2 className="mb-[23px] text-center text-base font-bold text-black sm:hidden">
        Succes Story
      </h2>
      <div className="flex flex-col items-center gap-x-[51px] sm:flex-row xl:gap-x-[91px]">
        <div className="flex items-center gap-x-[67px]">
          <button className="sm:hidden">
            <ArrowCircleLeft size={31} color="#F58E49" />
          </button>
          <figure className="relative h-[115.41px] w-[116px] overflow-hidden rounded-full sm:h-[221.98px] sm:w-[221.98px] xl:h-[394px] xl:w-[394px]">
            <img
              src="/images/success-story.webp"
              alt="succes story"
              className="absolute left-3 h-full w-full scale-[1.20] object-cover sm:left-5 xl:left-10"
            />
          </figure>
          <button className="sm:hidden">
            <ArrowCircleRight size={31} color="#F58E49" />
          </button>
        </div>
        <div className="flex-1 text-center sm:text-start">
          <h2 className="hidden text-[18.03px] font-bold text-black sm:block xl:text-[2rem]">
            Succes Story
          </h2>
          <h3 className="mt-[22px] text-base font-semibold text-black sm:text-[20.28px] xl:mt-[55px] xl:text-[2.25rem]">
            My Parenting Journey
          </h3>
          <p className="mt-[13px] max-w-[706px] text-justify text-xs font-normal text-[#333333] xl:mt-[22px] xl:text-base">
            I had been struggling with some of the challenges of parenting, and
            felt like I needed some guidance and support. That&apos;s when I
            decided to take Parental Ways&apos; online parenting class. From the
            moment I signed up, I felt like I was in good hands. The website was
            easy to navigate and the registration process was a breeze.
            <span className="hidden sm:block">
              <br />
              Once I started the class, I was blown away by the quality of the
              instruction. The class was taught by an expert who was able to
              provide clear and concise explanations of complex parenting
              topics. Their experience and knowledge really shone through, and I
              felt like I was learning from someone who truly understood what it
              takes to be a good parent.
              <br />
              .....
            </span>
          </p>
          <Link to="/course">
            <PrimaryButton
              size="lg"
              className="mt-2 rounded-[4.51px] px-[13.52px] py-[5.25px] text-[12.98px] sm:mt-[13px] xl:mt-5 xl:rounded-lg xl:px-6 xl:py-[10px] xl:text-xl"
            >
              Be the next success parents
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
