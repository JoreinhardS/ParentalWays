import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { CourseList } from '@/components/course/CourseList';

function CoursePage() {
  return (
    <LayoutRoot>
      <section className="mb-[13.4375rem] mt-24">
        <div className="container">
          <h1 className="text-center text-4xl font-bold text-[#333333]">
            Courses
          </h1>
          <CourseList />
        </div>
      </section>
    </LayoutRoot>
  );
}

export default CoursePage;
