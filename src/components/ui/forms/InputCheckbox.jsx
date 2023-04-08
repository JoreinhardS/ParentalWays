import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Check } from '../icons/Check';
import { cn } from '@/lib/utils';

export function InputCheckbox({ className, ...rest }) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'peer h-6 w-6 shrink-0 rounded-lg border border-primary-10',
        className
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center')}
      >
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

InputCheckbox.displayName = 'InputCheckbox';
