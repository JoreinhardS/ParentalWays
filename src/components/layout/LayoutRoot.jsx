import { Header } from './Header';
import { Footer } from './Footer';

export function LayoutRoot({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
