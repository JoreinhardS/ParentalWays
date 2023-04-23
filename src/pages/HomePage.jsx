import { Header } from '@/components/layout/Header';
import { Page } from '@/components/layout/page/Page';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';
import { Container } from '@/components/ui/Container';
import { Footer } from '@/components/layout/Footer';
import { HomeStart } from '@/components/home/HomeStart';
import { InternalPageSection } from '@/components/layout/page/InternalPageSection';
import { HomeCategory } from '@/components/home/HomeCategory';
import { HomeSuccessStory } from '@/components/home/HomeSuccessStory';
import { HomeCourses } from '@/components/home/HomeCourses';
import { HomeArticle } from '@/components/home/HomeArticle';
import { HomeSubscribeArticle } from '@/components/home/HomeSubscribeArticle';

function HomePage() {
  return (
    <>
      <Header className="xl:px-0" />
      <main>
        <Page>
          <InternalPageContent className="xl:hero-pattern">
            <HomeStart />
            <InternalPageSection className="relative overflow-hidden">
              <Container className="container">
                <HomeCategory />
                <HomeSuccessStory />
                <HomeCourses />
                <HomeArticle />
              </Container>
              <img
                src="/images/subtract-2.svg"
                alt="subtract"
                className="absolute left-0 top-[35px] hidden xl:block"
              />
              <img
                src="/images/subtract-3.svg"
                alt="subtract"
                className="absolute right-0 top-[-120px] hidden xl:block"
              />
            </InternalPageSection>
            <HomeSubscribeArticle />
          </InternalPageContent>
        </Page>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
