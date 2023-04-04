import { Link } from 'react-router-dom';

import { CopyRight } from '../ui/icons/Copyright';

export function Footer() {
  return (
    <footer className="bg-primary-10 flex h-[25.625rem] items-center">
      <div className="mx-auto flex max-w-[81.25rem] gap-x-32">
        <div>
          <span className="text-5xl font-bold text-white">
            Parental <br /> Ways
          </span>
          <p className="mt-6 max-w-[20.75rem] text-base font-normal text-white">
            Website for parent who want to find a class or course, and consult
            with the expert for every field.
          </p>
          <div className="mt-[2.5625rem] inline-flex items-end text-lg font-normal text-white">
            Parental Ways{' '}
            <span className="mx-2">
              <CopyRight />
            </span>{' '}
            {new Date().getFullYear()}
          </div>
        </div>
        <div className="flex gap-x-[6.6875rem]">
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/course" className="text-xl font-medium text-white">
                  Course
                </Link>
              </li>
              <li>
                <Link to="/article" className="text-xl font-medium text-white">
                  Article
                </Link>
              </li>
              <li>
                <Link
                  to="/our-expert"
                  className="text-xl font-medium text-white"
                >
                  Our Expert
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xl font-medium text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-xl font-medium text-white">{heading}</h3>
              <ul className="mt-3 space-y-2">
                {links.map(({ name }) => (
                  <li key={name} className="text-base font-normal text-white">
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
  },
];
