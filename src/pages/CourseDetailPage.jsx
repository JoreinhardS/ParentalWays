import { CourseDetail } from '@/components/course/CourseDetail';
import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';
import { Page } from '@/components/layout/page/Page';
import { Container } from '@/components/ui/Container';

function CourseDetailPage() {
  return (
    <LayoutRoot>
      <Page className="mb-[2.5625rem]">
        <InternalPageContent>
          <Container className="container">
            <CourseDetail />
          </Container>
        </InternalPageContent>
      </Page>
    </LayoutRoot>
  );
}

export default CourseDetailPage;
