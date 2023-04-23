import { useState } from 'react';
import { Eye, EyeSlash } from 'iconsax-react';

import { FormGroup } from './FormGroup';
import { cn } from '@/lib/utils';

export function InputPassword({ className, ...rest }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const hiddenPassword = ({ target }) => {
    if (target.value.length === 0) {
      setShow(false);
    }
  };

  return (
    <FormGroup className="relative">
      <input
        className={cn(
          'block h-[2.625rem] w-full rounded-lg border border-[#B6B6B6] py-2 pl-3 pr-11 text-base outline-none',
          className
        )}
        type={show ? 'text' : 'password'}
        onChange={hiddenPassword}
        {...rest}
      />
      {show ? (
        <Eye
          size="24"
          color="#B6B6B6"
          className="absolute right-4 top-2 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <EyeSlash
          size="24"
          color="#B6B6B6"
          className="absolute right-4 top-2 cursor-pointer"
          onClick={handleClick}
        />
      )}
    </FormGroup>
  );
}

InputPassword.displayName = 'InputPassword';
