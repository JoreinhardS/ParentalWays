import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { CourseItem } from './CourseItem';
import { allCourse } from '@/lib/data/coursesData';

export function CourseList() {
  return (
    <Tabs
      defaultValue="account"
      className="mt-12 w-full md:mt-[4.875rem] xl:mt-[4.375rem]"
    >
      <TabsList>
        <TabsTrigger value="account">All</TabsTrigger>
        <TabsTrigger value="pre-marriage">Pre-marriage</TabsTrigger>
        <TabsTrigger value="parenting">Parenting</TabsTrigger>
        <TabsTrigger value="education" disabled={true}>
          Education
        </TabsTrigger>
        <TabsTrigger value="health" disabled={true}>
          Health
        </TabsTrigger>
        <TabsTrigger value="nutrition" disabled={true}>
          Nutrition
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="grid grid-cols-1 justify-items-center gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 md:gap-y-5 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-[1.875rem]">
          {allCourse.map((course, index) => (
            <CourseItem key={index} {...course} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="pre-marriage">
        <div className="grid grid-cols-1 justify-items-center gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 md:gap-y-5 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-[1.875rem]">
          {allCourse
            .filter((course) => course.tag === 'Pre-marriage')
            .map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="parenting">
        <div className="grid grid-cols-1 justify-items-center gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 md:gap-y-5 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-[1.875rem]">
          {allCourse
            .filter((course) => course.tag === 'Parenting')
            .map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
