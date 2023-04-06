export function ArticleAside() {
  return (
    <aside>
      <h3 className="text-center text-[1.3787rem] font-bold leading-[120%] text-[#2B414C]">
        Recommended
      </h3>
      <ul className="mt-[2.2644rem] w-[17.6319rem] space-y-[1.3787rem]">
        {recommendedArticle.map(({ imageUrl, title }, index) => (
          <li
            key={index}
            className="flex items-center space-x-[.9356rem] border-b border-black pb-[1.5263rem] last:border-0"
          >
            <img
              src={imageUrl}
              alt={title}
              className="h-[3.4463rem] w-[3.4463rem] rounded-[.4925rem]"
              loading="lazy"
            />
            <h4 className="text-[1.1325rem] font-normal leading-[120%] text-black">
              {title}
            </h4>
          </li>
        ))}
      </ul>
    </aside>
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
