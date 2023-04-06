import { ArticleItem } from './ArticleItem';
import { articles } from '@/lib/data/articles';

export function ArticleList() {
  return (
    <div className="space-y-11">
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article} />
      ))}
    </div>
  );
}
