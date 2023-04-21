import { PrimaryButton } from './ui/button/PrimaryButton';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog';
import { Divider } from './ui/Divider';
import { FormLabel } from './ui/forms/FormLabel';
import { RadioGroup, RadioGroupItem } from './ui/forms/InputRadio';

export function PaymentMethod({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment Method</DialogTitle>
        </DialogHeader>
        <div className="mt-4 2xl:mt-7">
          <RadioGroup>
            <div>
              <span className="text-base font-medium text-black-10 sm:text-xl 2xl:text-2xl">
                Transfer Bank
              </span>
              <div className="mt-[11px] grid grid-cols-3 gap-x-[29.16px] gap-y-[14px] px-[17px] sm:mt-5 sm:gap-x-[51px] sm:gap-y-4 sm:px-[30px] 2xl:gap-y-6">
                {payments.bank.map(({ name, imageUrl }) => (
                  <div
                    key={name}
                    className="flex items-center space-x-[14px] sm:space-x-6"
                  >
                    <RadioGroupItem value={name} id={name} />
                    <FormLabel htmlFor={name}>
                      <img
                        src={imageUrl}
                        alt={name}
                        className="h-[28.58px] w-[40.02px] object-cover sm:h-9 sm:w-[50px] 2xl:h-[50px] 2xl:w-[70px]"
                      />
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
            <Divider className="my-[11px] sm:my-[14px] 2xl:my-5" />
            <div>
              <span className="text-base font-medium text-black-10 sm:text-xl 2xl:text-2xl">
                E wallet
              </span>
              <div className="mt-[11px] grid grid-cols-3 gap-x-[29.16px] gap-y-[14px] px-[17px] sm:mt-5 sm:gap-x-[51px] sm:gap-y-4 sm:px-[30px] 2xl:gap-y-6">
                {payments.eWallet.map(({ name, imageUrl }) => (
                  <div
                    key={name}
                    className="flex items-center space-x-[14px] sm:space-x-6"
                  >
                    <RadioGroupItem value={name} id={name} />
                    <FormLabel htmlFor={name}>
                      <img
                        src={imageUrl}
                        alt={name}
                        className="h-[28.58px] w-[40.02px] object-cover sm:h-9 sm:w-[50px] 2xl:h-[50px] 2xl:w-[70px]"
                      />
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter className="mt-[11px] sm:mt-5">
          <div className="w-full rounded-[3.43px] bg-white px-4 py-[14px] shadow-[0_0_12px_rgba(0,0,0,0.12)] sm:rounded-2xl sm:px-3 2xl:px-6 2xl:py-7">
            <div className="space-y-[6.86px] sm:space-y-2 2xl:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[13.15px] font-normal text-black-10 sm:text-base 2xl:text-xl">
                  Price Class
                </span>
                <span className="text-[13.15px] font-bold text-black-10 sm:text-base 2xl:text-xl">
                  Rp 150.000
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13.15px] font-normal text-black-10 sm:text-base 2xl:text-xl">
                  Fee Service
                </span>
                <span className="text-[13.15px] font-bold text-black-10 sm:text-base 2xl:text-xl">
                  Rp 10.000
                </span>
              </div>
            </div>
            <div className="mt-[14px] flex items-center justify-between 2xl:mt-[26px]">
              <span className="text-base font-medium text-black-10 sm:text-lg 2xl:text-2xl">
                Total Payment
              </span>
              <span className="text-base font-bold text-primary-10 sm:text-lg 2xl:text-2xl">
                Rp 160.000
              </span>
            </div>
          </div>
          <PrimaryButton
            size="lg"
            className="mt-[14px] w-full py-[13.15px] text-[13.15px] sm:py-[23px] sm:text-xl 2xl:mt-6"
          >
            Pay Now
          </PrimaryButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const payments = {
  bank: [
    {
      name: 'bni',
      imageUrl: '/images/bni.png',
    },
    {
      name: 'bca',
      imageUrl: '/images/bca.png',
    },
    {
      name: 'jago',
      imageUrl: '/images/jago.png',
    },
    {
      name: 'permata',
      imageUrl: '/images/permata.png',
    },
    {
      name: 'bri',
      imageUrl: '/images/bri.png',
    },
    {
      name: 'mandiri',
      imageUrl: '/images/mandiri.png',
    },
  ],
  eWallet: [
    {
      name: 'dana',
      imageUrl: '/images/dana.png',
    },
    {
      name: 'flip',
      imageUrl: '/images/flip.png',
    },
    {
      name: 'gopay',
      imageUrl: '/images/gopay.png',
    },
    {
      name: 'ovo',
      imageUrl: '/images/ovo.png',
    },
    {
      name: 'linkaja',
      imageUrl: '/images/linkaja.png',
    },
    {
      name: 'shopeepay',
      imageUrl: '/images/shopeepay.png',
    },
  ],
};
