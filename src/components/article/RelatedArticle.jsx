import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { Bookmark } from '../ui/icons/Bookmark';

export function RelatedArticle() {
  return (
    <div className="mt-[1.1244rem]">
      <h2 className="text-[1.875rem] font-bold leading-none text-[#2B414C]">
        Related Article
      </h2>
      <Splide
        className="mt-[2.8125rem]"
        hasTrack={false}
        options={{
          perPage: 3,
          perMove: 1,
          gap: '1.5rem',
          arrows: false,
        }}
      >
        <SplideTrack className="pb-2">
          {relatedAticle.map(({ title, author, imageUrl }, index) => (
            <SplideSlide key={index}>
              <div className="inner h-[29.4375rem]">
                <figure className="h-[20.375rem] w-[21.75rem]">
                  <img src={imageUrl} alt={title} loading="layz" />
                </figure>
                <div className="bg-primary-10 pb-[.375rem] pl-[.625rem] pr-2 pt-6">
                  <h3 className="text-[1.5rem] font-semibold leading-7 text-[#414141]">
                    {title}
                  </h3>
                  <div className="mt-[1.5625rem] flex justify-between">
                    <span className="mt-4 text-[.875rem] font-normal text-[#414141]">
                      {author}
                    </span>
                    <button>
                      <Bookmark
                        stroke="#414141"
                        color="none"
                        strokeWidth={4}
                        style={{ width: '1.25rem', height: '1.5rem' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
}

const relatedAticle = [
  {
    title: 'Pick the right name for your beloved one',
    author: 'Annetta Helga',
    imageUrl: '/images/article-1.webp',
  },
  {
    title: 'Coocking tips : Turns your food into super vitamin',
    author: 'Gresa Erna',
    imageUrl: '/images/article-2.webp',
  },
  {
    title: 'Have you ever remember about the feeling?',
    author: 'Matthew Ado',
    imageUrl: '/images/article-3.webp',
  },
  {
    title: 'Pick the right name for your beloved one',
    author: 'Annetta Helga',
    imageUrl: '/images/article-1.webp',
  },
  {
    title: 'Coocking tips : Turns your food into super vitamin',
    author: 'Gresa Erna',
    imageUrl: '/images/article-2.webp',
  },
  {
    title: 'Have you ever remember about the feeling?',
    author: 'Matthew Ado',
    imageUrl: '/images/article-3.webp',
  },
  {
    title: 'Pick the right name for your beloved one',
    author: 'Annetta Helga',
    imageUrl: '/images/article-1.webp',
  },
  {
    title: 'Coocking tips : Turns your food into super vitamin',
    author: 'Gresa Erna',
    imageUrl: '/images/article-2.webp',
  },
  {
    title: 'Have you ever remember about the feeling?',
    author: 'Matthew Ado',
    imageUrl: '/images/article-3.webp',
  },
];
