import { Link } from 'react-router-dom';

import { LoginForm } from '../components/LoginForm';
import { Logo } from '../components/ui/Logo';

function LoginPage() {
  return (
    <section className="grid min-h-screen grid-cols-[870px_1fr] gap-x-[3.25rem] 2xl:gap-x-0">
      <header className="relative">
        <h1 className="absolute top-0 ml-[6.25rem] mt-[3.75rem]">
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        <img
          src="/images/login-background.webp"
          alt="son with dad"
          className="h-full object-cover"
          loading="lazy"
        />
      </header>
      <article className="mb-[14.6875rem] mt-[12.1875rem] w-full max-w-[30.5rem] 2xl:justify-self-center">
        <h2 className="text-black-10 text-2xl font-bold">Login</h2>
        <h3 className="text-black-10 mt-20 text-lg font-medium">
          Login to your account
        </h3>
        <p className="text-neutral-30 mt-1 text-base font-normal">
          Thank you for get back to Parental Ways, let’s access our best
          recommendation for you
        </p>
        <LoginForm />
        <p className="mt-[0.875rem] text-center text-base font-normal text-[#959595]">
          Don’t have an account yet?{' '}
          <Link to="/register" className="text-primary-30 font-semibold">
            Join Parental Ways
          </Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
