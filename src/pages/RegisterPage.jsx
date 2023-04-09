import { Link } from 'react-router-dom';

import { RegisterForm } from '@/components/RegisterForm';
import { Logo } from '@/components/ui/Logo';

function RegisterPage() {
  return (
    <main>
      <section className="grid min-h-screen grid-cols-[518px_1fr] gap-x-20 2xl:gap-x-0">
        <header className="relative bg-[url('/images/register-background.webp')] bg-cover bg-no-repeat">
          <h1 className="ml-[6.25rem] mt-[3.75rem]">
            <Link to="/">
              <Logo />
            </Link>
          </h1>
        </header>
        <article className="mb-[14.5rem] mt-[6.5rem] w-full max-w-[46rem] 2xl:justify-self-center">
          <h2 className="text-black-10 text-2xl font-bold">Register</h2>
          <h3 className="text-black-10 mt-20 text-lg font-medium">
            Parenting science for a better future
          </h3>
          <p className="text-neutral-30 mt-1 text-base font-normal">
            Let’s make our children comfortable and better in the family
            environment
          </p>
          <RegisterForm />
          <p className="mt-[0.875rem] text-center text-base font-normal text-[#959595]">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-30 font-semibold">
              Log in
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}

export default RegisterPage;
