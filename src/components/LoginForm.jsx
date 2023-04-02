import { PrimaryButton } from './ui/button/PrimaryButton';
import { FormLabel } from './ui/forms/FormLabel';
import { InputCheckbox } from './ui/forms/InputCheckbox';
import { InputPassword } from './ui/forms/InputPassword';
import { InputText } from './ui/forms/InputText';

export function LoginForm() {
  return (
    <form className="mt-10">
      <div className="space-y-8">
        <div className="space-y-2">
          <FormLabel>Email or Phone Number</FormLabel>
          <InputText type="text" className="text-black-10" />
        </div>
        <div className="space-y-2">
          <FormLabel>Password</FormLabel>
          <InputPassword className="text-black-10" />
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <InputCheckbox id="rememberMe" />
        <FormLabel
          htmlFor="rememberMe"
          className="text-black-10 ml-3 flex-1 text-base font-normal"
        >
          Remember me
        </FormLabel>
        <p className="text-primary-10 text-base font-normal">Reset Password</p>
      </div>
      <PrimaryButton type="submit" className="mt-11 w-full">
        Sign in
      </PrimaryButton>
    </form>
  );
}
