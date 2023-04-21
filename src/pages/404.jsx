import { Link } from 'react-router-dom';
import { SecondaryButton } from '@/components/ui/button/SecondaryButton';

function Page404() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-10">
      <h1 className="text-center text-5xl font-bold text-white">
        404 <br /> Page not found
      </h1>
      <Link to="/" className="mt-6">
        <SecondaryButton>Back to home</SecondaryButton>
      </Link>
    </div>
  );
}

export default Page404;
