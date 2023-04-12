import { ArticleDetail } from '@/components/article/ArticleDetail';
import { ArticleReply } from '@/components/article/ArticleReply';
import { RelatedArticle } from '@/components/article/RelatedArticle';
import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';
import { Page } from '@/components/layout/page/Page';
import { Container } from '@/components/ui/Container';

function ArticleDetailPage() {
  return (
    <LayoutRoot>
      <Page className="relative mb-[3.0094rem] md:mb-[11.125rem]">
        <InternalPageContent>
          <Container className="mx-auto px-[1.875rem] md:max-w-[42.125rem] md:px-0 xl:max-w-[68rem]">
            <ArticleDetail />
            <ArticleReply />
            <RelatedArticle />
          </Container>
        </InternalPageContent>
      </Page>
    </LayoutRoot>
  );
}

export default ArticleDetailPage;
