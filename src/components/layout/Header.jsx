import { Link, NavLink } from 'react-router-dom';

import { Logo } from '../ui/Logo';
import { GhostedButton } from '../ui/button/GhostedButon';
import { PrimaryButton } from '../ui/button/PrimaryButton';
import { navMenu } from '@/lib/data/navigationData';

function Navigation() {
  return (
    <nav className="flex h-[6.0625rem] items-center px-[3.4375rem]">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex items-center space-x-6">
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
        <div className="space-x-[1.0625rem]">
          <Link to="/login">
            <GhostedButton className="text-[1.25rem]">Login</GhostedButton>
          </Link>
          <Link to="/register">
            <PrimaryButton className="text-[1.25rem]">Sign Up</PrimaryButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Header() {
  return (
    <header>
      <Navigation />
    </header>
  );
}
