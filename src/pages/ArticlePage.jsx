import { ArticleRecommended } from '@/components/article/ArticleRecommended';
import { ArticleList } from '@/components/article/ArticleList';
import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { ArticleCard } from '@/components/article/ArticleCard';
import { Pagination } from '@/components/ui/Pagination';
import { Page } from '@/components/layout/page/Page';
import { Container } from '@/components/ui/Container';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';
import { InternalPageSection } from '@/components/layout/page/InternalPageSection';
import { ArticlePageHeader } from '@/components/article/ArticlePageHeader';

function ArticlePage() {
  return (
    <LayoutRoot>
      <Page className="mb-[4.875rem]">
        <ArticlePageHeader />
        <InternalPageContent>
          <Container className="container">
            <InternalPageSection className="mt-10 flex flex-wrap justify-between gap-y-10 xl:mt-[3.75rem]">
              <ArticleList />
              <ArticleRecommended className="hidden sm:block" />
            </InternalPageSection>
            <Pagination className="mt-[23.45px] md:mt-[2.9006rem] " />
            <InternalPageSection className="mt-[38px] flex gap-x-[4.1875rem] sm:hidden">
              <div className="space-y-2">
                {articleCard.map((article, index) => (
                  <ArticleCard
                    key={index}
                    {...article}
                    className="h-[102.42px] w-[112px]"
                    style={{ fontSize: '6.67px' }}
                  />
                ))}
              </div>
              <ArticleRecommended />
            </InternalPageSection>
          </Container>
        </InternalPageContent>
      </Page>
    </LayoutRoot>
  );
}

const articleCard = [
  {
    title: 'Paternity Leave : Dads, It’s Time to Take-Off!',
    tag: 'Parenting',
    imageUrl: '/images/article-of-the-day-1.webp',
  },
  {
    title: "10 Tips for Raising Resilient Children in Today's World",
    tag: 'Parenting',
    imageUrl: '/images/article-of-the-day-3.webp',
  },
  {
    title: 'The Science of Sleep: Healthy Habits',
    tag: 'Sleeping',
    imageUrl: '/images/article-of-the-day-4.webp',
  },
];

export default ArticlePage;
