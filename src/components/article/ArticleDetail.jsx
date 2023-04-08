import { Callout } from '../ui/Callout';
import { Bookmark } from '../ui/icons/Bookmark';

export function ArticleDetail() {
  return (
    <article className="mt-[2.375rem]">
      <header>
        <h1 className="text-center text-4xl font-bold text-[#414141]">
          Coocking tips : Turns your food into super vitamin
        </h1>
        <div className="mt-[3.4375rem] flex items-center justify-between">
          <div className="flex items-center space-x-[1.4375rem]">
            <img
              src="/images/gresa-erna.webp"
              alt="Gresa Erna"
              loading="lazy"
              className="h-[4.375rem] w-[4.375rem]"
            />
            <div>
              <div className="text-xl font-medium text-[#2B414C]">
                Gresa Erna
              </div>
              <div className="mt-[.125rem] text-base font-normal text-[#2B414C]">
                Bachelor of Science
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-normal text-[#2B414C]">
              16 February 2023
            </span>
            <div className="bg-primary-10 ml-[.8125rem] mr-5 mt-1 h-[.9375rem] w-[.9375rem] rounded-full" />
            <span className="text-lg font-normal text-[#2B414C]">
              7 min read
            </span>
          </div>
        </div>
      </header>
      <section className="mt-[3.875rem]">
        <figure className="relative">
          <img src="/images/article-detail.webp" alt="baby eating" />
          <figcaption className="mt-[.4375rem] text-center text-xl font-normal text-black">
            Picture
          </figcaption>
          <button className="absolute right-1 top-[.375rem]">
            <Bookmark size={40} color="none" stroke="#80C2E5" />
          </button>
        </figure>
        <p className="mt-[3.6875rem] text-justify text-lg font-normal text-black">
          On the odd occasion that I flick through the TV channels, a particular
          infomercial pops up that really gets me riled. I created ‘rant day
          Tuesday’ at The Healthy Eating Hub – a day specifically set aside for
          my staff and I to rant about crazy nutrition claims – for the sole
          purpose of venting my rage for the Nutri-Bullet. The little blender
          that apparently “turns regular foods into superfoods”. They said it
          not me.
        </p>
        <br />
        <p className="text-justify text-lg font-normal text-black">
          “Oh really?!” I say to myself. “A $200 electronic kitchen appliance
          actually adds nutrients (vitamins, minerals and fibre) to food?” I
          pause for effect. “No? I didn’t think so.”
        </p>
        <br />
        <p className="text-justify text-lg font-normal text-black">
          Superfoods aren’t made by blenders, nor do you need a nutrition
          extraction system to get the most out of your daily fruit and
          vegetable intake. You have an in-built mechanism in your body to
          extract nutrition, it’s called your digestive system and it includes
          teeth.
        </p>
        <br />
        <p className="text-justify text-lg font-normal text-black">
          Please excuse my sarcastic frustration. I’m just tired of seeing
          gimmick after gimmick making false and ridiculous claims about how
          important they are for you to achieve good health, when in reality,
          good health is much simpler than that.
        </p>
        <Callout className="mt-[3.8125rem]" />
        <p className="mt-[2.0625rem] text-justify text-lg font-normal text-black">
          On the odd occasion that I flick through the TV channels, a particular
          infomercial pops up that really gets me riled. I created ‘rant day
          Tuesday’ at The Healthy Eating Hub – a day specifically set aside for
          my staff and I to rant about crazy nutrition claims – for the sole
          purpose of venting my rage for the Nutri-Bullet. The little blender
          that apparently “turns regular foods into superfoods”. They said it
          not me.
        </p>
        <br />
        <p className="text-justify text-lg font-normal text-black">
          “Oh really?!” I say to myself. “A $200 electronic kitchen appliance
          actually adds nutrients (vitamins, minerals and fibre) to food?” I
          pause for effect. “No? I didn’t think so.”
        </p>
        <br />
        <p className="text-justify text-lg font-normal text-black">
          Superfoods aren’t made by blenders, nor do you need a nutrition
          extraction system to get the most out of your daily fruit and
          vegetable intake. You have an in-built mechanism in your body to
          extract nutrition, it’s called your digestive system and it includes
          teeth.
        </p>
        <br />
        <p className="text-justify text-lg font-normal text-black">
          Please excuse my sarcastic frustration. I’m just tired of seeing
          gimmick after gimmick making false and ridiculous claims about how
          important they are for you to achieve good health, when in reality,
          good health is much simpler than that.
        </p>
      </section>
    </article>
  );
}
