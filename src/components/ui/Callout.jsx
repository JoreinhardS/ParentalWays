import { cn } from '@/lib/utils';

export function Callout({ className }) {
  return (
    <div
      className={cn(
        'flex items-center xl:items-start h-full md:h-[5.5rem] xl:h-[7.5625rem] border-l-[.3281rem] md:border-l-[1.125rem] border-primary-10 xl:pt-6',
        className
      )}
    >
      <p className="ml-[.3281rem] text-justify text-[.9756rem] font-bold text-black md:ml-[1.3125rem] md:text-lg">
        “Oh really?!” I say to myself. “A $200 electronic kitchen appliance
        actually adds nutrients (vitamins, minerals and fibre) to food?” I pause
        for effect. “No? I didn’t think so.”
      </p>
    </div>
  );
}
