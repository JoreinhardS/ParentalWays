import { CheckoutDetails } from '@/components/CheckoutDetails';
import { LayoutRoot } from '@/components/layout/LayoutRoot';
import { InternalPageContent } from '@/components/layout/page/InternalPageContent';
import { Page } from '@/components/layout/page/Page';
import { Container } from '@/components/ui/Container';

function CheckoutPage() {
  return (
    <LayoutRoot>
      <Page className="mb-6 mt-[11px] sm:mb-[120px] sm:mt-[30px] xl:mb-[245px] xl:mt-[108px]">
        <InternalPageContent>
          <Container className="container">
            <h1 className="text-center text-[1.5rem] font-bold text-[#333] xl:text-4xl">
              Checkout Details
            </h1>
            <CheckoutDetails />
          </Container>
        </InternalPageContent>
      </Page>
    </LayoutRoot>
  );
}

export default CheckoutPage;
