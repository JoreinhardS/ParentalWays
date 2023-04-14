import { Link } from 'react-router-dom';

import { RegisterForm } from '@/components/RegisterForm';
import { Logo } from '@/components/ui/Logo';

function RegisterPage() {
  return (
    <main>
      <section className="grid min-h-screen grid-cols-1 gap-x-10 xl:mr-5 xl:grid-cols-[518px_1fr] xl:gap-x-20 2xl:mr-0 2xl:gap-x-0">
        <header className="relative hidden bg-[url('/images/register-background.webp')] bg-cover bg-no-repeat xl:block">
          <h1 className="ml-[6.25rem] mt-[3.75rem]">
            <Link to="/">
              <Logo />
            </Link>
          </h1>
        </header>
        <article className="mb-[14.5rem] mt-[6.5rem] w-full max-w-[46rem] self-center justify-self-center px-6 xl:px-0">
          <div className="mb-20 flex justify-center xl:hidden">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-black-10">Register</h2>
          <h3 className="mt-5 text-lg font-medium text-black-10 xl:mt-20">
            Parenting science for a better future
          </h3>
          <p className="mt-1 text-base font-normal text-neutral-30">
            Let’s make our children comfortable and better in the family
            environment
          </p>
          <RegisterForm />
          <p className="mt-[0.875rem] text-center text-base font-normal text-[#959595]">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary-30">
              Log in
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}

export default RegisterPage;
