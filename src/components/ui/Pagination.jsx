import { ChevronDoubleLeft } from '@/components/ui/icons/ChevronDoubleLeft';
import { ChevronDoubleRight } from '@/components/ui/icons/ChevronDoubleRight';
import { cn } from '@/lib/utils';

export function Pagination({ className }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center space-x-[5.3px] md:space-x-[.6394rem]',
        className
      )}
    >
      <ChevronDoubleLeft className="h-[9.88px] w-[9.88px] md:h-[20.45px] md:w-[20.45px]" />
      <ol className="flex w-[112px] items-center justify-between md:w-[14.5rem]">
        <li className="text-[11.53px] font-medium leading-[120%] text-primary-10 md:text-[1.4919rem]">
          1
        </li>
        <li className="text-[11.53px] font-medium leading-[120%] text-black md:text-[1.4919rem]">
          2
        </li>
        <li className="text-[11.53px] font-medium leading-[120%] text-black md:text-[1.4919rem]">
          3
        </li>
        <li className="text-[11.53px] font-medium leading-[120%] text-black md:text-[1.4919rem]">
          4
        </li>
        <li className="text-[11.53px] font-medium leading-[120%] text-black md:text-[1.4919rem]">
          5
        </li>
        <li className="text-[11.53px] font-medium leading-[120%] text-black md:text-[1.4919rem]">
          6
        </li>
        <li className="text-[11.53px] font-medium leading-[120%] text-black md:text-[1.4919rem]">
          7
        </li>
      </ol>
      <ChevronDoubleRight className="h-[9.88px] w-[9.88px] md:h-[20.45px] md:w-[20.45px]" />
    </div>
  );
}
