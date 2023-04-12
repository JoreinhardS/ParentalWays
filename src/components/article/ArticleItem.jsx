import { Link } from 'react-router-dom';
import { Profile } from 'iconsax-react';

import { OutlineButton } from '../ui/button/OutlineButton';
import { toKebabCase } from '@/lib/convertText';

export function ArticleItem({ id, tag, title, description, author, imageUrl }) {
  const username = `@${author.toLowerCase().split(' ').join('')}`;
  const href = `${toKebabCase(title)}-${id}`;

  return (
    <article className="relative flex w-full items-center gap-x-[1.1481rem] md:gap-x-6 xl:w-[49.375rem] xl:gap-x-[2.8712rem]">
      <figure className="relative h-[7.4869rem] w-[7.9688rem] shrink-0 overflow-hidden rounded-[.625rem] md:h-[14rem] md:w-[14.875rem] xl:h-[18.7206rem] xl:w-[19.9262rem]">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="absolute inset-0 object-cover"
        />
      </figure>
      <div>
        <OutlineButton>{tag}</OutlineButton>
        <h2 className="mt-[.6644rem] text-[.6431rem] font-bold leading-[120%] text-[#2B414C] md:mt-[.8544rem] md:text-xl xl:mt-[1.6619rem] xl:text-[1.6081rem]">
          {title}
        </h2>
        <p className="mt-[.7175rem] max-w-[25.2669rem] text-[.4363rem] leading-[120%] text-[#2B414C] md:mt-[.8544rem] md:text-base xl:mt-[1.9825rem] xl:text-[1.0913rem]">
          {description}
        </p>
        <div className="mt-[.7119rem] flex items-center space-x-[.1875rem] md:mt-[.8544rem] xl:mt-[1.78rem]">
          <div className="flex h-[.6887rem] w-[.6887rem] items-center justify-center border border-[#292D32] md:h-6 md:w-6 xl:h-[1.7225rem] xl:w-[1.7225rem]">
            <Profile size={27} color="#292D32" />
          </div>
          <span className="text-[.5281rem] font-normal text-[#2B414C] md:text-base xl:text-[1.3206rem]">
            {author}
          </span>
        </div>
      </div>
      {title === 'Cooking tips : Turns your food into super vitamin' ? (
        <Link
          to={`/article/${username}/${href}`}
          className="absolute inset-0 z-10"
        ></Link>
      ) : null}
    </article>
  );
}
