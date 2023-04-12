import { Callout } from '../ui/Callout';
import { Bookmark } from '../ui/icons/Bookmark';

export function ArticleDetail() {
  return (
    <article className="mt-[.8125rem] md:mt-[2.8125rem] xl:mt-[2.375rem]">
      <header className="pt-[11.9063rem] sm:pt-0">
        <h1 className="hidden text-center text-xl font-bold text-[#414141] sm:block md:text-3xl xl:text-4xl">
          Coocking tips : Turns your food into super vitamin
        </h1>
        <div className="mt-[1.5938rem] flex items-center justify-between sm:mt-[4.3125rem] xl:mt-[3.4375rem]">
          <div className="flex items-center space-x-[.6713rem] md:space-x-[1.4375rem]">
            <img
              src="/images/gresa-erna.webp"
              alt="Gresa Erna"
              loading="lazy"
              className="h-[1.9906rem] w-[1.9906rem] md:h-[4.375rem] md:w-[4.375rem]"
            />
            <div>
              <div className="text-[.6544rem] font-medium text-[#2B414C] md:text-xl">
                Gresa Erna
              </div>
              <div className="text-[.455rem] font-normal text-[#2B414C] md:mt-[.125rem] md:text-base">
                Bachelor of Science
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[.4469rem] font-normal text-[#2B414C] md:text-sm xl:text-lg">
              16 February 2023
            </span>
            <div className="bg-primary-10 mx-[1.0625rem] ml-[.2794rem] mr-[.4706rem] h-[.3525rem] w-[.3525rem] rounded-full md:h-[.9375rem] md:w-[.9375rem] xl:ml-[.8125rem] xl:mr-5" />
            <span className="text-[.4469rem] font-normal text-[#2B414C] md:text-sm xl:text-lg">
              7 min read
            </span>
          </div>
        </div>
      </header>
      <section className="sm:mt-10 xl:mt-[3.875rem]">
        <figure className="absolute left-0 top-0 w-full sm:relative">
          <img
            src="/images/article-detail.webp"
            alt="baby eating"
            className="h-[11.9063rem] w-full object-cover md:h-auto md:w-full"
          />
          <figcaption className="mt-[.4375rem] hidden text-center text-xl font-normal text-black xl:block">
            Picture
          </figcaption>
          <button className="absolute right-1 top-[.375rem] hidden xl:block">
            <Bookmark size={40} color="none" stroke="#80C2E5" />
          </button>
        </figure>
        <div className="mt-[2.1344rem] md:mt-[1.875rem] xl:mt-[3.6875rem]">
          <p className="text-justify text-[.9756rem] font-normal text-black md:text-base xl:text-lg">
            On the odd occasion that I flick through the TV channels, a
            particular infomercial pops up that really gets me riled. I created
            ‘rant day Tuesday’ at The Healthy Eating Hub – a day specifically
            set aside for my staff and I to rant about crazy nutrition claims –
            for the sole purpose of venting my rage for the Nutri-Bullet. The
            little blender that apparently “turns regular foods into
            superfoods”. They said it not me.
          </p>
          <br />
          <p className="text-justify text-[.9756rem] font-normal text-black md:text-base xl:text-lg">
            “Oh really?!” I say to myself. “A $200 electronic kitchen appliance
            actually adds nutrients (vitamins, minerals and fibre) to food?” I
            pause for effect. “No? I didn’t think so.”
          </p>
          <br />
          <p className="text-justify text-[.9756rem] font-normal text-black md:text-base xl:text-lg">
            Superfoods aren’t made by blenders, nor do you need a nutrition
            extraction system to get the most out of your daily fruit and
            vegetable intake. You have an in-built mechanism in your body to
            extract nutrition, it’s called your digestive system and it includes
            teeth.
          </p>
          <br />
          <p className="text-justify text-[.9756rem] font-normal text-black md:text-base xl:text-lg">
            Please excuse my sarcastic frustration. I’m just tired of seeing
            gimmick after gimmick making false and ridiculous claims about how
            important they are for you to achieve good health, when in reality,
            good health is much simpler than that.
          </p>
          <Callout className="mt-[2.125rem] md:mt-[1.875rem] xl:mt-[3.8125rem]" />
          <p className="mt-[1.3125rem] text-justify text-[.9756rem] font-normal text-black md:mt-[1.875rem] md:text-base xl:mt-[2.0625rem] xl:text-lg">
            On the odd occasion that I flick through the TV channels, a
            particular infomercial pops up that really gets me riled. I created
            ‘rant day Tuesday’ at The Healthy Eating Hub – a day specifically
            set aside for my staff and I to rant about crazy nutrition claims –
            for the sole purpose of venting my rage for the Nutri-Bullet. The
            little blender that apparently “turns regular foods into
            superfoods”. They said it not me.
          </p>
          <br />
          <p className="text-justify text-[.9756rem] font-normal text-black md:text-base xl:text-lg">
            “Oh really?!” I say to myself. “A $200 electronic kitchen appliance
            actually adds nutrients (vitamins, minerals and fibre) to food?” I
            pause for effect. “No? I didn’t think so.”
          </p>
          <br />
          <p className="text-justify text-[.9756rem] font-normal text-black md:text-base xl:text-lg">
            Superfoods aren’t made by blenders, nor do you need a nutrition
            extraction system to get the most out of your daily fruit and
            vegetable intake. You have an in-built mechanism in your body to
            extract nutrition, it’s called your digestive system and it includes
            teeth.
          </p>
          <br />
          <p className="text-justify text-[.9756rem] font-normal text-black md:text-base xl:text-lg">
            Please excuse my sarcastic frustration. I’m just tired of seeing
            gimmick after gimmick making false and ridiculous claims about how
            important they are for you to achieve good health, when in reality,
            good health is much simpler than that.
          </p>
        </div>
      </section>
    </article>
  );
}
