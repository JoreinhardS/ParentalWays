import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Close } from './icons/Close';
import { cn } from '@/lib/utils';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ className, children, ...props }) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = ({ className, ...props }) => (
  <DialogPrimitive.Overlay
    className={cn('fixed inset-0 z-50 bg-black/50', className)}
    {...props}
  />
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = ({ className, children, ...props }) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        'fixed z-50 flex min-h-fit w-full max-w-[327px] flex-col justify-between rounded-2xl bg-white px-4 pb-[11px] pt-[13.72px] sm:h-[659px] sm:max-w-[514px] sm:rounded-[28px] sm:px-7 sm:pb-5 sm:pt-6 2xl:h-[816px] 2xl:max-w-[572px]',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-5 top-3 sm:left-5 sm:top-6">
        <Close className="h-8 w-8 sm:h-10 sm:w-10" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }) => (
  <div className={cn('', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = ({ className, ...props }) => (
  <DialogPrimitive.Title
    className={cn(
      'text-center text-[18.87px] font-bold text-black-10 sm:text-2xl 2xl:text-3xl',
      className
    )}
    {...props}
  />
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({ className, ...props }) => (
  <DialogPrimitive.Description
    className={cn('text-sm text-slate-500', 'dark:text-slate-400', className)}
    {...props}
  />
);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
