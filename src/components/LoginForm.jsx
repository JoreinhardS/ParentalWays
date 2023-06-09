import { PrimaryButton } from './ui/button/PrimaryButton';
import { FormLabel } from './ui/forms/FormLabel';
import { InputCheckbox } from './ui/forms/InputCheckbox';
import { InputPassword } from './ui/forms/InputPassword';
import { InputText } from './ui/forms/InputText';

export function LoginForm() {
  function LoginHandler(event) {
    event.preventDefault();
  }

  return (
    <form className="mt-10" onSubmit={LoginHandler}>
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
          className="ml-3 flex-1 text-base font-normal text-black-10"
        >
          Remember me
        </FormLabel>
        <p className="text-base font-normal text-primary-10">Reset Password</p>
      </div>
      <PrimaryButton
        type="submit"
        className="mt-11 w-full rounded-lg py-3 text-base font-medium"
      >
        Sign in
      </PrimaryButton>
    </form>
  );
}
