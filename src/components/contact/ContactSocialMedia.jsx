export function ContactSocialMedia() {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl font-bold text-black-10 xl:text-3xl">
        You Can Also Contact Us Through Social Media.
      </h2>
      <div className="mt-12 flex items-center justify-between py-10 sm:px-[6.25rem] xl:px-[12.5rem]">
        <img
          src="/images/whatsapp.png"
          alt="whatsapp"
          className="h-[3.75rem] w-[3.75rem] xl:h-[5.625rem] xl:w-[5.625rem]"
        />
        <img
          src="/images/instagram.png"
          alt="instagram"
          className="h-[3.75rem] w-[3.75rem] xl:h-[5.625rem] xl:w-[5.625rem]"
        />
        <img
          src="/images/twitter.png"
          alt="twitter"
          className="h-[3.75rem] w-[3.75rem] xl:h-[5.625rem] xl:w-[5.625rem]"
        />
      </div>
    </section>
  );
}
