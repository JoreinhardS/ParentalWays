export function ArticleRecommended({ className }) {
  return (
    <section className={className}>
      <h3 className="text-center text-[.6644rem] font-bold leading-[120%] text-[#2B414C] md:text-start md:text-[1.3787rem] xl:text-center">
        Recommended
      </h3>
      <ul className="mt-[1.0625rem] max-w-[17.6319rem] space-y-3 md:mt-6 md:space-y-3.5 xl:mt-[2.2644rem] xl:space-y-[1.3787rem]">
        {recommendedArticle.map(({ imageUrl, title }, index) => (
          <li
            key={index}
            className="flex items-center space-x-[.4512rem] border-b border-black pb-[.875rem] last:border-0 md:space-x-[.9356rem] xl:pb-[1.5263rem]"
          >
            <img
              src={imageUrl}
              alt={title}
              className="h-[1.6612rem] w-[1.6612rem] rounded md:h-[3.4463rem] md:w-[3.4463rem] md:rounded-[.4925rem]"
              loading="lazy"
            />
            <h4 className="text-[.5456rem] font-normal leading-[120%] text-black md:text-[1.1325rem]">
              {title}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}

const recommendedArticle = [
  {
    imageUrl: '/images/article-3.webp',
    title: '14 weeks paternity leave!',
  },
  {
    imageUrl: '/images/article-2.webp',
    title: '“I’m Still Waiting for Him to Call Me Mum” : Wom...',
  },
  {
    imageUrl: '/images/article-3.webp',
    title: 'Why Singaporean Dads Are No Longer Taking ...',
  },
  {
    imageUrl: '/images/article-2.webp',
    title: 'Melissa Faith Yeo Claims Andie Chen Accused ...',
  },
];
