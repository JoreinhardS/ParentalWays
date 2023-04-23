import { Link } from 'react-router-dom';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { PrimaryButton } from '../ui/button/PrimaryButton';
import { CourseItem } from '../course/CourseItem';
import { allCourse } from '@/lib/data/coursesData';

export function HomeCourses() {
  return (
    <section className="mt-[40.72px] md:mt-[42.96px] xl:mt-[145px]">
      <h2 className="text-center text-base font-bold text-black md:text-lg xl:text-[2rem]">
        Check our Courses
      </h2>
      <Tabs
        defaultValue="all"
        className="mt-[18px] w-full md:mt-[31px] xl:mt-[49px]"
      >
        <TabsList className="md:border-b md:pb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pre-marriage" disabled>
            Pre-marriage
          </TabsTrigger>
          <TabsTrigger value="parenting" disabled>
            Parenting
          </TabsTrigger>
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
            {allCourse.slice(0, 4).map((course) => (
              <CourseItem
                key={course.id}
                {...course}
                className="md:last:hidden xl:last:flex"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <div className="text-center">
        <Link to="/course">
          <PrimaryButton
            size="lg"
            className="mt-[40.21px] rounded-[3.52px] px-[21.5px] py-[12.53px] text-[14.07px] leading-none shadow-[0_0.72px_1.44px_rgba(0,0,0,0.12)] md:mt-[30px] md:rounded-[2.99px] md:px-[18px] md:py-[10.81px] md:text-[11.95px] xl:mt-[41px] xl:rounded-[5.76px] xl:px-[35px] xl:py-[20.52px] xl:text-xl xl:leading-[17.3px]"
          >
            Explore More Course
          </PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
