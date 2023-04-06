import { ArticleDetail } from '@/components/article/ArticleDetail';
import { ArticleReply } from '@/components/article/ArticleReply';
import { RelatedArticle } from '@/components/article/RelatedArticle';
import { Header } from '@/components/layout/Header';

function ArticleDetailPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mb-[11.125rem]">
          <div className="mx-auto max-w-[68.25rem]">
            <ArticleDetail />
            <ArticleReply />
            <RelatedArticle />
          </div>
        </section>
      </main>
    </>
  );
}

export default ArticleDetailPage;
