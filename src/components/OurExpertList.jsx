import { OurExpertItem } from './OurExpertItem';

export function OurExpertList() {
  return (
    <section>
      {ourExpert.map((item, index) => (
        <OurExpertItem key={index} {...item} />
      ))}
    </section>
  );
}

const ourExpert = [
  {
    imageUrl: '/images/our-expert-1.webp',
    name: 'Mary Johnson, MPH',
    description:
      'Mary Johnson is a clinical psychologist specializing in child development. She has worked as a parenting consultant for more than 10 years and has experience in providing consultations related to parenting, family counseling and child therapy.',
  },
  {
    imageUrl: '/images/our-expert-2.webp',
    name: 'Sarah Brown, MSW',
    description:
      'Sarah Brown is a social worker with a specialization in child and family mental health. She has experience working with families of diverse backgrounds and providing support with issues such as conduct disorders, anxiety and depression.',
  },
  {
    imageUrl: '/images/our-expert-3.webp',
    name: 'Alexandria, MSW',
    description:
      'Alexandria is a social worker with a specialization in child and family mental health. She has experience working with families of diverse backgrounds and providing support with issues such as conduct disorders, anxiety and depression.',
  },
  {
    imageUrl: '/images/our-expert-4.webp',
    name: 'Kevin Moder, MSW',
    description:
      'Kevin Moder is a social worker with a specialization in child and family mental health. He has experience working with families of diverse backgrounds and providing support with issues such as conduct disorders, anxiety and depression.',
  },
];
