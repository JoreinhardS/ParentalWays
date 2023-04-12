import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HambergerMenu } from 'iconsax-react';

import { Logo } from '../ui/Logo';
import { GhostedButton } from '../ui/button/GhostedButon';
import { PrimaryButton } from '../ui/button/PrimaryButton';
import { MobileNavigation } from './MobileNavigation';
import { navMenu } from '@/lib/data/navigationData';

function NavigationLinks() {
  return (
    <ul className="hidden items-center space-x-6 xl:flex">
      {navMenu.map(({ name, href }) => (
        <li key={name}>
          <NavLink
            to={href}
            className={({ isActive }) =>
              `${
                isActive ? 'text-primary-10' : 'text-black'
              } text-lg font-medium`
            }
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="container flex h-[3.25rem] items-center md:h-20 xl:h-[6.0625rem]">
        <div className="relative flex w-full items-center justify-between xl:px-[3.4375rem]">
          <Link to="/" className="mx-auto sm:mx-0">
            <Logo className="h-[1.3388rem] w-[7.125rem] md:h-[1.9375rem] md:w-[10.3125rem]" />
          </Link>
          <NavigationLinks />
          <div className="hidden space-x-[1.0625rem] xl:block">
            <Link to="/login">
              <GhostedButton className="text-[1.25rem]">Login</GhostedButton>
            </Link>
            <Link to="/register">
              <PrimaryButton className="text-[1.25rem] font-semibold leading-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.12)]">
                Sign Up
              </PrimaryButton>
            </Link>
          </div>
          <button
            className="absolute right-0 top-0 sm:static xl:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HambergerMenu color="#292D32" className="h-7 w-7 md:h-8 md:w-8" />
          </button>
        </div>
        <MobileNavigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
}
