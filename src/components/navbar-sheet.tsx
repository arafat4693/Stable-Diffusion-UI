import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// For navbar. See in smaller screens
export default function NavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="w-6 h-6" />
            <span className="sr-only">Qura Inc</span>
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Prompt
          </Link>
          <Link
            to="/gallery"
            className="text-muted-foreground hover:text-foreground"
          >
            Gallery
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
