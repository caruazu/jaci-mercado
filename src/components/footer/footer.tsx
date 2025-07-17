import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="botder-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md flex flex-col justify-between gap-8 py-8 md:flex-row">
          <Link href="/">
            <Image src="/logo.svg" alt="logo do site" width={166} height={32} />
          </Link>
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
