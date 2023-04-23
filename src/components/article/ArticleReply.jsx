import { Heart } from 'iconsax-react';

import { ArticleReplyInput } from './ArticleReplyInput';

export function ArticleReply() {
  return (
    <div className="mt-[1.5625rem] border-y border-[#2B414C] pb-[1.9375rem] pt-[2.2325rem] md:mt-10 md:pb-[2.8125rem] md:pt-10 xl:mt-[7.9394rem] xl:pb-[3.1269rem] xl:pt-[1.1244rem]">
      <h2 className="text-[.875rem] font-bold text-[#2B414C] md:text-2xl xl:text-[1.875rem]">
        Leave a reply
      </h2>
      <ArticleReplyInput />
      <ul className="mt-[.875rem] md:mt-[2.8125rem] xl:mt-[2.9375rem]">
        <li className="relative rounded bg-primary-90 px-[.4856rem] md:px-[1.6875rem]">
          <div className="flex space-x-[.43rem] md:space-x-[1.1875rem]">
            <img
              src="/images/gresa-erna.webp"
              alt="Gresa Erna"
              className="mt-[.3125rem] h-[1.5856rem] w-[1.5856rem] md:h-[4.375rem] md:w-[4.375rem]"
              loading="lazy"
            />
            <div className="my-[.6875rem]">
              <div>
                <div className="text-[.4306rem] font-bold text-black md:text-lg">
                  Gresa Erna
                </div>
                <div className="text-[.3625rem] font-normal text-black md:text-base">
                  16 February 2023 at 11.00 PM
                </div>
              </div>
              <p className="mt-[.4913rem] text-[.4306rem] font-normal text-black md:mt-[1.3125rem] md:text-lg">
                “thank you, this article really helped me to add insight about
                cooking”
              </p>
              <Heart
                color="#292D32"
                className="absolute bottom-[.3187rem] right-[.1938rem] mt-[.6875rem] h-[.8063rem] w-[.8063rem] md:static md:h-6 md:w-6"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
