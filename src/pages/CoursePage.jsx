import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { CourseList } from '@/components/course/CourseList';
import { Container } from '@/components/ui/Container';
import { Page } from '@/components/layout/page/Page';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';

function CoursePage() {
  return (
    <LayoutRoot>
      <Page className="mb-[5.7769rem] mt-[.6875rem] md:mb-[8.875rem] md:mt-10 xl:mb-[13.4375rem] xl:mt-24">
        <InternalPageContent>
          <Container className="container">
            <h1 className="text-center text-[1.5rem] font-bold text-[#333333] md:text-3xl xl:text-4xl">
              Courses
            </h1>
            <CourseList />
          </Container>
        </InternalPageContent>
      </Page>
    </LayoutRoot>
  );
}

export default CoursePage;
