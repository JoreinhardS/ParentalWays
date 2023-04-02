import { cn } from '../../../lib/utils';

export function FormGroup({ className, children }) {
  return <div className={cn('flex', className)}>{children}</div>;
}

FormGroup.displayName = 'FormGroup';
