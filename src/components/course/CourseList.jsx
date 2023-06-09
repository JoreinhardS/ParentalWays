import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { CourseItem } from './CourseItem';
import { allCourse } from '@/lib/data/coursesData';

export function CourseList() {
  return (
    <Tabs
      defaultValue="all"
      className="mt-12 w-full md:mt-[4.875rem] xl:mt-[4.375rem]"
    >
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="pre-marriage">Pre-marriage</TabsTrigger>
        <TabsTrigger value="parenting">Parenting</TabsTrigger>
        <TabsTrigger value="education" disabled>
          Education
        </TabsTrigger>
        <TabsTrigger value="health" disabled>
          Health
        </TabsTrigger>
        <TabsTrigger value="nutrition" disabled>
          Nutrition
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 justify-items-center gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 md:gap-y-5 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-[1.875rem]">
          {allCourse.map((course) => (
            <CourseItem key={course.id} {...course} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="pre-marriage">
        <div className="grid grid-cols-1 justify-items-center gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 md:gap-y-5 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-[1.875rem]">
          {allCourse
            .filter((course) => course.tag === 'Pre-marriage')
            .map((course) => (
              <CourseItem key={course.id} {...course} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="parenting">
        <div className="grid grid-cols-1 justify-items-center gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 md:gap-y-5 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-[1.875rem]">
          {allCourse
            .filter((course) => course.tag === 'Parenting')
            .map((course) => (
              <CourseItem key={course.id} {...course} />
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
