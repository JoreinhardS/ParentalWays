import { Link } from 'react-router-dom';

import { CopyRight } from '../ui/icons/Copyright';

export function Footer() {
  return (
    <footer className="bg-primary-10 pb-[2.0656rem] pt-[2.8831rem] md:pb-[2.5625rem] md:pt-16 xl:py-16">
      <div className="mx-auto flex max-w-[40rem] flex-col gap-y-12 px-[1.875rem] md:max-w-[43.375rem] md:flex-col-reverse md:gap-x-32 md:gap-y-7 md:px-0 xl:max-w-[75rem] xl:flex-row 2xl:max-w-[81.25rem]">
        <div>
          <span className="text-3xl font-bold text-white xl:text-5xl">
            Parental <br /> Ways
          </span>
          <p className="mt-4 max-w-[230px] text-xs font-normal text-white md:max-w-[20.75rem] md:text-sm xl:mt-6 xl:text-base">
            Website for parent who want to find a class or course, and consult
            with the expert for every field.
          </p>
          <div className="mt-5 inline-flex items-center text-sm font-normal text-white md:text-base xl:mt-[2.5625rem] xl:text-lg">
            Parental Ways{' '}
            <span className="mx-[.3606rem] md:mx-2">
              <CopyRight className="h-[.8562rem] w-[.8562rem] md:h-[.875rem] md:w-[.875rem] xl:h-[1.1875rem] xl:w-[1.1875rem]" />
            </span>{' '}
            {new Date().getFullYear()}
          </div>
        </div>
        <div className="flex w-full max-w-[50.1506rem] flex-wrap justify-between gap-x-5 gap-y-[2.83rem]">
          <div className="order-1">
            <ul className="space-y-2">
              {sitemap.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    to={href}
                    className="text-[1.0362rem] font-normal text-white md:text-xl xl:font-medium"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {footerLinks.map(({ heading, links, order }) => (
            <div key={heading} className={order}>
              <h3 className="text-[1.0362rem] font-medium text-white md:text-lg xl:text-xl">
                {heading}
              </h3>
              <ul className="mt-[.5625rem] space-y-2 md:mt-3">
                {links.map(({ name }) => (
                  <li
                    key={name}
                    className="text-[.7206rem] font-normal text-white md:text-sm xl:text-base"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

const sitemap = [
  {
    name: 'Course',
    href: '/course',
  },
  {
    name: 'Article',
    href: '/article',
  },
  {
    name: 'Our Expert',
    href: '/our-expert',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const footerLinks = [
  {
    heading: 'Services',
    links: [
      {
        name: 'Class',
        href: '',
      },
      {
        name: 'Course',
        href: '',
      },
      {
        name: 'Consultations',
        href: '',
      },
    ],
    order: 'order-3 sm:order-2',
  },
  {
    heading: 'Our Community',
    links: [
      {
        name: 'Java Community',
        href: '',
      },
      {
        name: 'Sumatera Community',
        href: '',
      },
      {
        name: 'Papua Community',
        href: '',
      },
      {
        name: 'Kalimantan Community',
        href: '',
      },
    ],
    order: 'order-4 sm:order-3',
  },
  {
    heading: 'Social',
    links: [
      {
        name: 'Facebook',
        href: '',
      },
      {
        name: 'Instagram',
        href: '',
      },
      {
        name: 'Twitter',
        href: '',
      },
      {
        name: 'Youtube',
        href: '',
      },
      {
        name: 'Tiktok',
        href: '',
      },
    ],
    order: 'order-2 sm:order-4',
  },
];
