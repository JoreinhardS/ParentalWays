import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { Bookmark } from '../ui/icons/Bookmark';
import { ArticleCard } from './ArticleCard';
import { articleOfTheDay } from '@/lib/data/articles';

export function RelatedArticle() {
  return (
    <div className="mt-[.92rem] md:mt-10 xl:mt-[1.1244rem]">
      <h2 className="text-[.875rem] font-bold leading-none text-[#2B414C] md:text-2xl xl:text-[1.875rem]">
        Related Article
      </h2>
      <Splide
        className="mt-[1.3125rem] hidden md:block xl:mt-[2.8125rem]"
        hasTrack={false}
        options={{
          perPage: 3,
          gap: '1.5rem',
          breakpoints: {
            1280: {
              gap: '2.3125rem',
            },
          },
          perMove: 1,
          arrows: false,
        }}
      >
        <SplideTrack className="pb-2">
          {relatedAticle.map(({ title, author, imageUrl }, index) => (
            <SplideSlide key={index}>
              <div className="inner relative flex h-[19.3125rem] w-[12.5rem] items-end bg-primary-10 xl:h-[29.4375rem] xl:w-[21.75rem]">
                <img
                  src={imageUrl}
                  alt={title}
                  loading="layz"
                  className="absolute left-0 top-0 h-[10.3125rem] w-full object-cover xl:h-[20.375rem]"
                />
                <div className="flex h-[144px] flex-col justify-between px-[.875rem] py-[.375rem] xl:pb-[.375rem] xl:pl-[.625rem] xl:pr-2 xl:pt-6">
                  <h3 className="text-base font-semibold leading-7 text-[#414141] xl:text-[1.5rem]">
                    {title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-normal text-[#414141] xl:text-[.875rem]">
                      {author}
                    </span>
                    <button>
                      <Bookmark
                        size={30}
                        stroke="#414141"
                        color="none"
                        strokeWidth={3}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
      <div className="mt-[2.375rem] grid grid-cols-2 justify-items-center gap-x-[9.05px] gap-y-[10.62px] md:hidden">
        {articleOfTheDay.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

const relatedAticle = [
  {
    title: 'Pick the right name for your beloved one',
    author: 'Annetta Helga',
    imageUrl: '/images/article-2.webp',
  },
  {
    title: 'Coocking tips : Turns your food into super vitamin',
    author: 'Gresa Erna',
    imageUrl: '/images/article-3.webp',
  },
  {
    title: 'Have you ever remember about the feeling?',
    author: 'Matthew Ado',
    imageUrl: '/images/related-article-1.webp',
  },
  {
    title: 'Pick the right name for your beloved one',
    author: 'Annetta Helga',
    imageUrl: '/images/article-2.webp',
  },
  {
    title: 'Coocking tips : Turns your food into super vitamin',
    author: 'Gresa Erna',
    imageUrl: '/images/article-3.webp',
  },
  {
    title: 'Have you ever remember about the feeling?',
    author: 'Matthew Ado',
    imageUrl: '/images/related-article-1.webp',
  },
  {
    title: 'Pick the right name for your beloved one',
    author: 'Annetta Helga',
    imageUrl: '/images/article-2.webp',
  },
  {
    title: 'Coocking tips : Turns your food into super vitamin',
    author: 'Gresa Erna',
    imageUrl: '/images/article-3.webp',
  },
  {
    title: 'Have you ever remember about the feeling?',
    author: 'Matthew Ado',
    imageUrl: '/images/related-article-1.webp',
  },
];
