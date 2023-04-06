import { ArticleAside } from '@/components/article/ArticleAside';
import { ArticleList } from '@/components/article/ArticleList';
import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { ChevronDoubleLeft } from '@/components/ui/icons/ChevronDoubleLeft';
import { ChevronDoubleRight } from '@/components/ui/icons/ChevronDoubleRight';

function ArticlePage() {
  return (
    <LayoutRoot>
      <section className="mb-[4.875rem]">
        <header className="bg-primary-10 mt-[1.0625rem] flex h-[3.875rem] items-center">
          <ul className="mx-auto flex w-full max-w-[77.375rem] items-center justify-between">
            <li className="text-xl font-medium text-[#414141]">
              Becoming A Parent
            </li>
            <li className="text-xl font-medium text-[#414141]">Education</li>
            <li className="text-xl font-medium text-[#414141]">Health</li>
            <li className="text-xl font-medium text-[#414141]">
              Money Parenting
            </li>
            <li className="text-xl font-medium text-[#414141]">Parenting</li>
            <li className="text-xl font-medium text-[#414141]">Pre-marriage</li>
          </ul>
        </header>
        <div className="container">
          <div className=" mt-[3.75rem] flex justify-between">
            <ArticleList />
            <ArticleAside />
          </div>
          <div className="mt-[2.9006rem] flex items-center justify-center space-x-[.6394rem]">
            <ChevronDoubleLeft />
            <ol className="flex w-[14.5rem] items-center justify-between">
              <li className="text-primary-10 text-[1.4919rem] font-medium leading-[120%]">
                1
              </li>
              <li className="text-[1.4919rem] font-medium leading-[120%] text-black">
                2
              </li>
              <li className="text-[1.4919rem] font-medium leading-[120%] text-black">
                3
              </li>
              <li className="text-[1.4919rem] font-medium leading-[120%] text-black">
                4
              </li>
              <li className="text-[1.4919rem] font-medium leading-[120%] text-black">
                5
              </li>
              <li className="text-[1.4919rem] font-medium leading-[120%] text-black">
                6
              </li>
              <li className="text-[1.4919rem] font-medium leading-[120%] text-black">
                7
              </li>
            </ol>
            <ChevronDoubleRight />
          </div>
        </div>
      </section>
    </LayoutRoot>
  );
}

export default ArticlePage;
