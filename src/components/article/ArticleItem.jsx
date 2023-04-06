import { Link } from 'react-router-dom';
import { Profile } from 'iconsax-react';

import { OutlineButton } from '../ui/button/OutlineButton';
import { toKebabCase } from '@/lib/convertText';

export function ArticleItem({ id, tag, title, description, author, imageUrl }) {
  const username = `@${author.toLowerCase().split(' ').join('')}`;
  const href = `${toKebabCase(title)}-${id}`;

  return (
    <article className="relative flex w-[49.375rem] gap-x-[2.8712rem]">
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="h-[18.7206rem] w-[19.9262rem] rounded-[.625rem]"
      />
      <div>
        <OutlineButton>{tag}</OutlineButton>
        <h2 className="mt-[1.6619rem] text-[1.6081rem] font-bold leading-[120%] text-[#2B414C]">
          {title}
        </h2>
        <p className="mt-[1.9825rem] max-w-[25.2669rem] text-[1.0913rem] leading-[120%] text-[#2B414C]">
          {description}
        </p>
        <div className="mt-[1.78rem] flex items-center space-x-[.1725rem]">
          <div className="flex h-[1.7225rem] w-[1.7225rem] items-center justify-center border border-[#292D32]">
            <Profile size={27} color="#292D32" />
          </div>
          <span className="text-[1.3206rem] font-normal text-[#2B414C]">
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
