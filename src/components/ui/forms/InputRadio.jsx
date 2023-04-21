import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { Circle } from '../icons/Circle';
import { cn } from '@/lib/utils';

const RadioGroup = ({ className, ...props }) => {
  return <RadioGroupPrimitive.Root className={cn(className)} {...props} />;
};
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = ({ className, ...props }) => {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'h-[14px] w-[14px] shrink-0 rounded-full border-2 border-black-10 text-slate-900 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-10 sm:h-6 sm:w-6',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2 w-2 fill-primary-10 text-primary-10 sm:h-4 sm:w-4" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
