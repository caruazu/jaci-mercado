import { Footer } from '../footer';
import { Header } from '../header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark relative flex min-h-screen flex-col">
      <Header />
      <main className="mv-12 flex flex-1 flex-col">{children}</main>
      <Footer></Footer>
    </div>
  );
};
