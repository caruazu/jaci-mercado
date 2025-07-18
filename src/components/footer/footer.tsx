import Link from 'next/link';
import { Logo } from '../logo';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-red-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Logo />
          <nav className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row">
            <Link href="/" className="hover:text-primary">
              Termos de uso
            </Link>
            <Link href="/" className="hover:text-primary">
              Politica de privacidade
            </Link>
            <Link href="/" className="hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
