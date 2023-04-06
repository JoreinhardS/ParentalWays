import { cn } from '@/lib/utils';

export function Callout({ className }) {
  return (
    <div
      className={cn(
        'h-[7.5625rem] border-l-[1.125rem] border-primary-10 pt-6',
        className
      )}
    >
      <p className="ml-[1.3125rem] text-lg font-bold text-black">
        “Oh really?!” I say to myself. “A $200 electronic kitchen appliance
        actually adds nutrients (vitamins, minerals and fibre) to food?” I pause
        for effect. “No? I didn’t think so.”
      </p>
    </div>
  );
}
