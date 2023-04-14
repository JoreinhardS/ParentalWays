import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={cn(
      'mx-auto flex w-full flex-wrap items-center justify-center gap-x-[1.7488rem] gap-y-[1.3225rem] border-b border-[#C5C5C5] pb-[1.1875rem] md:w-[42.125rem] md:gap-x-[2.3375rem] md:border-b-0 md:pb-0 xl:w-[62.5rem] xl:gap-x-[3.125rem] xl:border-b xl:pb-8',
      className
    )}
    {...props}
  />
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn(
      'text-[.8044rem] font-bold text-[#333333] data-[state=active]:text-primary-10 md:text-lg xl:text-xl',
      className
    )}
    {...props}
  />
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = ({ className, ...props }) => (
  <TabsPrimitive.Content
    className={cn('mt-[1.5625rem] md:mt-10 xl:mt-[4.375rem]', className)}
    {...props}
  />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
