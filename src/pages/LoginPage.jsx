import { Link } from 'react-router-dom';

import { LoginForm } from '@/components/LoginForm';
import { Logo } from '@/components/ui/Logo';

function LoginPage() {
  return (
    <main>
      <section className="grid min-h-screen grid-cols-1 gap-x-[3.25rem] xl:mr-5 xl:grid-cols-[870px_1fr] 2xl:mr-0 2xl:gap-x-0">
        <header className="relative hidden xl:block">
          <h1 className="absolute top-0 ml-[6.25rem] mt-[3.75rem]">
            <Link to="/">
              <Logo />
            </Link>
          </h1>
          <img
            src="/images/login-background.webp"
            alt="son with dad"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </header>
        <article className="mb-[14.6875rem] mt-[6.5rem] w-full max-w-[30.5rem] justify-self-center px-6 xl:mt-[12.1875rem] xl:px-0">
          <div className="mb-20 flex justify-center xl:hidden">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-black-10">Login</h2>
          <h3 className="mt-5 text-lg font-medium text-black-10 xl:mt-20">
            Login to your account
          </h3>
          <p className="mt-1 text-base font-normal text-neutral-30">
            Thank you for get back to Parental Ways, let’s access our best
            recommendation for you
          </p>
          <LoginForm />
          <p className="mt-[0.875rem] text-center text-base font-normal text-[#959595]">
            Don’t have an account yet?{' '}
            <Link to="/register" className="font-semibold text-primary-30">
              Join Parental Ways
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}

export default LoginPage;
