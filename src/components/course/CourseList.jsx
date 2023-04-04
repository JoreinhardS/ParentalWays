import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { CourseItem } from './CourseItem';
import { allCourse } from '@/lib/data/coursesData';

export function CourseList() {
  return (
    <Tabs defaultValue="account" className="mt-[4.375rem] w-full">
      <TabsList>
        <TabsTrigger value="account">All</TabsTrigger>
        <TabsTrigger value="pre-marriage">Pre-marriage</TabsTrigger>
        <TabsTrigger value="parenting">Parenting</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="health">Health</TabsTrigger>
        <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="grid grid-cols-2 gap-x-6 gap-y-[1.875rem]">
          {allCourse.map((course, index) => (
            <CourseItem key={index} {...course} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="pre-marriage">
        <div className="grid grid-cols-2 gap-x-6 gap-y-[1.875rem]">
          {allCourse
            .filter((course) => course.tag === 'Pre-marriage')
            .map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="parenting">
        <div className="grid grid-cols-2 gap-x-6 gap-y-[1.875rem]">
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
