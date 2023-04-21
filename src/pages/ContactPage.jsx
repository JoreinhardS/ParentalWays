import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { Page } from '@/components/layout/page/Page';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';
import { Container } from '@/components/ui/Container';
import { ContactStart } from '@/components/contact/ContactStart';
import { ContactForm } from '@/components/contact/ContactForm';
import { InternalPageSection } from '@/components/layout/page/InternalPageSection';
import { ContactSocialMedia } from '@/components/contact/ContactSocialMedia';
import { ContactAddress } from '@/components/contact/ContactAddress';

function ContactPage() {
  return (
    <LayoutRoot>
      <Page className="mb-[3.125rem] xl:mb-[6.25rem]">
        <InternalPageContent>
          <Container className="container">
            <InternalPageSection className="xl:px-[3.4375rem]">
              <ContactStart />
              <ContactForm />
              <ContactSocialMedia />
              <ContactAddress />
            </InternalPageSection>
          </Container>
        </InternalPageContent>
      </Page>
    </LayoutRoot>
  );
}

export default ContactPage;
