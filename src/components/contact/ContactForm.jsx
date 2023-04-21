import { PrimaryButton } from '../ui/button/PrimaryButton';
import { FormLabel } from '../ui/forms/FormLabel';
import { InputText } from '../ui/forms/InputText';
import { InputTextarea } from '../ui/forms/InputTextarea';

function submitHandler(event) {
  event.preventDefault();
}

export function ContactForm() {
  return (
    <section className="mx-auto max-w-[902px] py-[3.75rem]">
      <h2 className="text-center text-2xl font-bold text-black-10 placeholder:text-sm sm:placeholder:text-base xl:text-3xl">
        &quot;We are ready to help you with questions and concerns about
        parenting.&quot;
      </h2>
      <form className="mt-[3.75rem] space-y-[15px]" onSubmit={submitHandler}>
        <div>
          <FormLabel htmlFor="fullName" className="sr-only">
            Full Name
          </FormLabel>
          <InputText
            type="text"
            id="fullName"
            className="text-black-10 placeholder:text-sm sm:placeholder:text-base"
            placeholder="Input Your Full Name"
          />
        </div>
        <div>
          <FormLabel htmlFor="emailAddress" className="sr-only">
            Email Address
          </FormLabel>
          <InputText
            type="email"
            id="emailAddress"
            className="text-black-10 placeholder:text-sm sm:placeholder:text-base"
            placeholder="Input Your Email Address"
          />
        </div>
        <div>
          <FormLabel htmlFor="phoneNumber" className="sr-only">
            Phone Number
          </FormLabel>
          <InputText
            type="tel"
            id="phoneNumber"
            className="text-black-10 placeholder:text-sm sm:placeholder:text-base"
            placeholder="The Phone Number That Can Be Contacted"
          />
        </div>
        <div>
          <FormLabel htmlFor="fullName" className="sr-only">
            Full Name
          </FormLabel>
          <InputTextarea
            id="fullName"
            className="h-[160px] pl-3 pt-2 text-black-10 placeholder:text-sm sm:placeholder:text-base"
            placeholder="Could you give us a brief description of the problem or issue you want to convey?"
          />
        </div>
        <PrimaryButton type="submit" className="w-full">
          Send Message
        </PrimaryButton>
      </form>
    </section>
  );
}
