export function ContactStart() {
  return (
    <section className="py-20">
      <div className="flex flex-wrap items-center justify-center gap-x-[90px] gap-y-10 sm:justify-start">
        <h1 className="max-w-[317.39px] text-center text-3xl font-bold text-black-10 sm:text-start xl:max-w-[484px] xl:text-5xl">
          What would you like to discuss?{' '}
          <span className="text-primary-10">I am ready to help.</span>
        </h1>
        <figure className="relative h-[222px] w-[266.61px] overflow-hidden rounded-[20px] xl:h-[428px] xl:w-[514px]">
          <img
            src="/images/contact.webp"
            alt="customer service"
            className="absolute -top-32 left-0 object-cover xl:-top-64"
          />
        </figure>
      </div>
      <div></div>
    </section>
  );
}
