import { Link } from 'react-router-dom';

import { ArticleCard } from '../article/ArticleCard';
import { PrimaryButton } from '../ui/button/PrimaryButton';
import { articleOfTheDay } from '@/lib/data/articles';

export function HomeArticle() {
  return (
    <section className="mt-10 md:mt-[91.38px] xl:mt-[106.97px]">
      <h2 className="text-center text-base font-bold text-black sm:text-lg xl:text-[2rem]">
        Article of The Day
      </h2>
      <div className="mt-[81px] grid grid-cols-2 justify-items-center gap-x-[9.1px] gap-y-[10.62px] md:mt-4 md:grid-cols-3 md:gap-x-[12.85px] md:gap-y-[13.63px] xl:mt-[29px] xl:gap-x-[23px] xl:gap-y-[27px]">
        {articleOfTheDay.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/article">
          <PrimaryButton
            size="lg"
            className="mt-[40.21px] rounded-[3.52px] px-9 py-[12.53px] text-[14.07px] leading-none shadow-[0_0.72px_1.44px_rgba(0,0,0,0.12)] md:mt-[30px] md:rounded-[2.99px] md:px-[31px] md:py-[10.51px] md:text-[11.95px] xl:mt-[34px] xl:rounded-[5.76px] xl:px-[59.5px] xl:py-[20.52px] xl:text-xl xl:leading-[17.3px]"
          >
            See More Article
          </PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
