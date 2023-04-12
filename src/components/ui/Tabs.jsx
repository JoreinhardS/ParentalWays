import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={cn(
      'w-full md:w-[42.125rem] xl:w-[62.5rem] flex flex-wrap items-center justify-center gap-x-[1.7488rem] md:gap-x-[2.3375rem] gap-y-[1.3225rem] xl:gap-x-[3.125rem] border-b md:border-b-0 xl:border-b border-[#C5C5C5] pb-[1.1875rem] md:pb-0 xl:pb-8 mx-auto',
      className
    )}
    {...props}
  />
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn(
      'text-[#333333] text-[.8044rem] md:text-lg xl:text-xl font-bold data-[state=active]:text-primary-10',
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
