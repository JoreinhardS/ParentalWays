import { Page } from '@/components/layout/page/Page';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';
import { Container } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OurExpertList } from '@/components/OurExpertList';
import { Pagination } from '@/components/ui/Pagination';

function OurExpertPage() {
  return (
    <>
      <Header className="xl:px-0" />
      <main>
        <Page className="mb-20">
          <InternalPageContent>
            <Container className="container">
              <OurExpertList />
              <Pagination className="mt-10 hidden md:flex" />
            </Container>
          </InternalPageContent>
        </Page>
      </main>
      <Footer />
    </>
  );
}

export default OurExpertPage;
