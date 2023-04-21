import { Heart } from 'iconsax-react';

import { Container } from '../ui/Container';
import { SecondaryButton } from '../ui/button/SecondaryButton';

export function HomeStart() {
  return (
    <section className="h-full bg-primary-10 sm:h-[350px] xl:h-[646px]">
      <div className="flex h-full flex-col sm:relative">
        <div className="relative h-full w-full">
          <Container className="container h-full">
            <div className="sm:gradient sm:relative sm:z-10 sm:h-full sm:w-[523px] xl:w-[837px] 2xl:w-10/12">
              <div className="py-[27px] xl:pt-[83px]">
                <span className="flex items-center text-[15.75px] font-bold text-white sm:text-lg xl:text-2xl">
                  Building a foundation
                  <span className="ml-1 inline-block">
                    <Heart
                      size={22}
                      variant="Bold"
                      color="#fff"
                      className="sm:hidden"
                    />
                  </span>
                </span>
                <h1 className="mt-[11px] max-w-[341px] text-[21.81px] font-bold leading-[120%] text-black sm:mt-[25px] sm:text-2xl xl:mt-[13px] xl:max-w-[487px] xl:text-4xl">
                  For a Lifetime of Love{' '}
                  <span className="inline-block translate-x-2 translate-y-3">
                    <Heart
                      size={47}
                      variant="Bold"
                      color="#fff"
                      className="hidden xl:block"
                    />
                  </span>
                  and connection between{' '}
                  <span className="relative z-10 w-fit">
                    Parents{' '}
                    <img
                      src="/images/vector-parent.svg"
                      alt="vector"
                      className="absolute left-0 top-[10px] -z-10 block sm:top-4 sm:hidden xl:block"
                    />
                  </span>{' '}
                  and{' '}
                  <span className="relative z-10 w-fit">
                    Children{' '}
                    <img
                      src="/images/vector-children.svg"
                      alt="vector"
                      className="absolute left-0 top-[10px] -z-10 block sm:top-5 sm:hidden xl:block"
                    />
                  </span>
                </h1>
                <p className="mt-[17px] hidden max-w-[403.71px] text-justify text-xs font-normal text-white sm:block xl:mt-2 xl:max-w-[553px] xl:text-base">
                  We&apos;re proud to have a team of parenting experts who are
                  passionate about helping you be the best parent you can be.
                  Our experts have a wealth of knowledge and experience in child
                  development and parenting techniques, and they&apos;re excited
                  to share their insights with you. When you take our parenting
                  classes, you can trust that you&apos;re learning from a group
                  of friendly and supportive experts who genuinely care about
                  your success.
                </p>
                <SecondaryButton
                  size="lg"
                  className="mt-[19px] inline-flex rounded-full px-[13.5px] py-2 text-[12.01px] sm:hidden xl:mt-8 xl:inline-flex xl:w-full xl:max-w-[480px] xl:py-[23px] xl:text-xl"
                >
                  Be the great parent
                </SecondaryButton>
              </div>
            </div>
          </Container>
        </div>
        <figure className="sm:absolute sm:right-0 sm:top-0">
          <img
            src="/images/hero-image.webp"
            alt="family"
            className="h-[277.76px] w-full object-cover sm:h-[350px] sm:w-[524.2px] xl:h-[646px] xl:w-[966.71px]"
          />
        </figure>
      </div>
    </section>
  );
}
