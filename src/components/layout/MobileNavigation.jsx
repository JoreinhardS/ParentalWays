import { NavLink, Link } from 'react-router-dom';

import { Close } from '../ui/icons/Close';
import { PrimaryButton } from '../ui/button/PrimaryButton';
import { GhostedButton } from '../ui/button/GhostedButon';
import { navMenu } from '@/lib/data/navigationData';
import { cn } from '@/lib/utils';

export function MobileNavigation({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <div
      className={cn(
        'fixed top-0 z-50 h-screen w-[280px] md:w-1/3 bg-white shadow transition-all duration-300 ease-in-out flex flex-col items-center justify-center xl:hidden',
        mobileMenuOpen ? 'right-0' : '-right-full'
      )}
    >
      <ul className="flex flex-col items-center space-y-2">
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
      <div className="absolute bottom-10 flex flex-col items-center space-y-2">
        <Link to="/register">
          <PrimaryButton className="rounded px-4 py-2 text-[1.25rem] font-semibold leading-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.12)]">
            Sign Up
          </PrimaryButton>
        </Link>
        <Link to="/login">
          <GhostedButton className="px-[.5938rem] py-2 text-[1.25rem] font-semibold">
            Login
          </GhostedButton>
        </Link>
      </div>
      <button
        className="absolute right-5 top-5"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Close />
      </button>
    </div>
  );
}
