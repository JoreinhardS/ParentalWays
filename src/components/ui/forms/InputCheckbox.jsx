import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '../../../lib/utils';
import { Check } from '../icons/Check';

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
        <Check className="text-primary-10 h-6 w-6" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

InputCheckbox.displayName = 'InputCheckbox';
