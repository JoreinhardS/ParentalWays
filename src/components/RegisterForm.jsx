import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from './ui/button/PrimaryButton';
import { FormLabel } from './ui/forms/FormLabel';
import { InputCheckbox } from './ui/forms/InputCheckbox';
import { InputPassword } from './ui/forms/InputPassword';
import { InputText } from './ui/forms/InputText';

export function RegisterForm() {
  const navigate = useNavigate();

  function registerHandler(event) {
    event.preventDefault();
    navigate('/login');
  }

  return (
    <form className="mt-10" onSubmit={registerHandler}>
      <div className="grid grid-cols-2 gap-x-10 gap-y-8">
        <div className="space-y-2">
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <InputText type="text" id="firstName" className="text-black-10" />
        </div>
        <div className="space-y-2">
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <InputText type="text" id="lastName" className="text-black-10" />
        </div>
        <div className="space-y-2">
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          <InputText type="tel" id="phoneNumber" className="text-black-10" />
        </div>
        <div className="space-y-2">
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputText type="email" id="email" className="text-black-10" />
        </div>
        <div className="relative space-y-2">
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputPassword id="password" className="text-black-10" />
        </div>
        <div className="space-y-2">
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <InputPassword id="confirmPassword" className="text-black-10" />
        </div>
      </div>
      <div className="mt-5 flex items-center space-x-3">
        <InputCheckbox id="terms" />
        <FormLabel
          htmlFor="terms"
          className="text-black-10 text-base font-normal"
        >
          I accept the <span className="text-primary-30">Terms of Service</span>{' '}
          as well as <span className="text-primary-30">Privacy Policy.</span>
        </FormLabel>
      </div>
      <PrimaryButton
        type="submit"
        className="mt-[3.875rem] w-full rounded-lg py-3"
      >
        Create Account
      </PrimaryButton>
    </form>
  );
}
