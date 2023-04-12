import { ArticleItem } from './ArticleItem';
import { articles } from '@/lib/data/articles';

export function ArticleList() {
  return (
    <section className="space-y-[1.0881rem] sm:space-y-7 xl:space-y-11">
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article} />
      ))}
    </section>
  );
}
