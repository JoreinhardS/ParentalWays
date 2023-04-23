export function HomeCategory() {
  return (
    <section className="mt-[41.24px] sm:mt-[45px] xl:mt-[97px]">
      <h2 className="text-center text-lg font-extrabold text-black xl:text-[2rem]">
        Category
      </h2>
      <div className="mt-[29px] flex flex-wrap justify-center gap-x-[20.64px] gap-y-[26.36px] sm:mt-[42px] md:justify-between xl:mt-[53px]">
        <div className="flex h-[124.58px] w-[91.24px] flex-col items-center justify-between rounded-lg bg-white pb-[8.76px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] sm:h-[129.05px] sm:w-[94.52px] xl:h-[229px] xl:w-[168px] xl:pb-4">
          <img
            src="/images/parent.svg"
            alt="becoming a parent"
            className="mt-[5.84px] h-[66.86px] w-[59.51px] sm:h-[68.27px] sm:w-[60.76px] xl:mt-[10.38px] xl:h-[121.34px] xl:w-[108px]"
          />
          <h3 className="text-center text-[13.5px] font-extrabold text-[#303030] xl:text-[1.5rem]">
            <span className="text-primary-10">Becoming</span> <br /> a Parent
          </h3>
        </div>
        <div className="flex h-[124.58px] w-[91.24px] flex-col items-center justify-between rounded-lg bg-white pb-[8.76px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] sm:h-[129.05px] sm:w-[94.52px] xl:h-[229px] xl:w-[168px] xl:pb-4">
          <img
            src="/images/child.svg"
            alt="child age stage"
            className="mt-1 h-[66.29px] w-[50.15px] translate-x-1 sm:h-[68.63px] sm:w-[51.91px] xl:h-[121.99px] xl:w-[92.27px] xl:translate-x-2"
          />
          <h3 className="text-center text-[13.5px] font-extrabold text-[#303030] xl:text-[1.5rem]">
            <span className="text-primary-10">Child</span> <br /> age stage
          </h3>
        </div>
        <div className="flex h-[124.58px] w-[91.24px] flex-col items-center justify-between rounded-lg bg-white pb-[8.76px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] sm:h-[129.05px] sm:w-[94.52px] xl:h-[229px] xl:w-[168px] xl:pb-4">
          <img
            src="/images/parenting.svg"
            alt="parenting for parent"
            className="mt-[23.85px] h-[49.1px] w-[66.84px] sm:h-[50.81px] sm:w-[69.2px] xl:mt-[42.38px] xl:h-[90.31px] xl:w-[123px]"
          />
          <h3 className="text-center text-[13.5px] font-extrabold text-[#303030] xl:text-[1.5rem]">
            <span className="text-primary-10">Parenting</span> <br /> for Parent
          </h3>
        </div>
        <div className="flex h-[124.58px] w-[91.24px] flex-col items-center justify-between rounded-lg bg-white pb-[8.76px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] sm:h-[129.05px] sm:w-[94.52px] xl:h-[229px] xl:w-[168px] xl:pb-4">
          <img
            src="/images/education.svg"
            alt="education plan"
            className="mt-[23.85px] h-[37.59px] w-[59.93px] sm:h-[38.89px] sm:w-[62.03px] xl:mt-[42.38px] xl:h-[69.12px] xl:w-[110.25px]"
          />
          <h3 className="text-center text-[13.5px] font-extrabold text-[#303030] xl:text-[1.5rem]">
            <span className="text-primary-10">Education</span> <br /> Plan
          </h3>
        </div>
        <div className="flex h-[124.58px] w-[91.24px] flex-col items-center justify-between rounded-lg bg-white pb-[8.76px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] sm:h-[129.05px] sm:w-[94.52px] xl:h-[229px] xl:w-[168px] xl:pb-4">
          <img
            src="/images/money.svg"
            alt="money parenting"
            className="mt-[14.84px] h-[53.35px] w-[47.33px] sm:h-[54.47px] sm:w-[48.33px] xl:mt-[26.38px] xl:h-[96.82px] xl:w-[85.9px]"
          />
          <h3 className="text-center text-[13.5px] font-extrabold text-[#303030] xl:text-[1.5rem]">
            <span className="text-primary-10">Money</span> <br /> Parenting
          </h3>
        </div>
        <div className="flex h-[124.58px] w-[91.24px] flex-col items-center justify-between rounded-lg bg-white pb-[8.76px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] sm:h-[129.05px] sm:w-[94.52px] xl:h-[229px] xl:w-[168px] xl:pb-4">
          <img
            src="/images/health.svg"
            alt="health and nutrition"
            className="mt-[20.25px] h-[44.53px] w-[44.53px] sm:h-[46.13px]  sm:w-[46.13px] xl:mt-9 xl:h-[82px] xl:w-[82px]"
          />
          <h3 className="text-center text-[13.5px] font-extrabold text-[#303030] xl:text-[1.5rem]">
            <span className="text-primary-10">Health and</span> <br /> Nutrition
          </h3>
        </div>
      </div>
    </section>
  );
}
