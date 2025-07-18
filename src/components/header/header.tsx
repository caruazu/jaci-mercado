import Link from 'next/link';
import { Button } from '../ui/button';
import { ActiveLink } from '../active-link';
import { Logo } from '../logo';

export const Header = () => {
  return (
    <header className="bg-backgroud/95 supports-[backdrop-filter]:bg-backgroud/60 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-5">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild>
              <Link href="/começar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
