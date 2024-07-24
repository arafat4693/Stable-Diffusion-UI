import { Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import NavbarSheet from './navbar-sheet';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-16 gap-4 px-4 border-b bg-background md:px-6">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="w-6 h-6" />
          <span className="sr-only">Qura Inc</span>
        </Link>
        <Link
          to="/"
          className="transition-colors text-muted-foreground hover:text-foreground"
        >
          Prompt
        </Link>

        <Link
          to="/gallery"
          className="transition-colors text-muted-foreground hover:text-foreground"
        >
          Gallery
        </Link>
      </nav>

      <NavbarSheet />

      <ModeToggle />
    </header>
  );
}
