import { Heart } from 'iconsax-react';

import { ArticleReplyInput } from './ArticleReplyInput';

export function ArticleReply() {
  return (
    <div className="mt-[7.9394rem] border-y border-[#2B414C] pb-[3.1269rem] pt-[1.1244rem]">
      <h2 className="text-[1.875rem] font-bold text-[#2B414C]">
        Leave a reply
      </h2>
      <ArticleReplyInput />
      <ul className="mt-[3.5625rem]">
        <li className="bg-primary-90 rounded px-[1.6875rem]">
          <div className="flex space-x-[1.1875rem]">
            <img
              src="/images/gresa-erna.webp"
              alt="Gresa Erna"
              className="mt-[5px] h-[4.375rem] w-[4.375rem]"
              loading="lazy"
            />
            <div className="my-[.6875rem]">
              <div>
                <div className="text-lg font-bold text-black">Gresa Erna</div>
                <div className="text-base font-normal text-black">
                  16 February 2023 at 11.00 PM
                </div>
              </div>
              <p className="mt-[1.3125rem] text-lg font-normal text-black">
                “thank you, this article really helped me to add insight about
                cooking”
              </p>
              <Heart size={24} color="#292D32" className="mt-[.6875rem]" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
