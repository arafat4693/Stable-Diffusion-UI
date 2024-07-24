import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function NoImagePlaceholder() {
  return (
    <div
      className="flex items-center justify-center flex-1 border border-dashed rounded-lg shadow-sm"
      x-chunk="dashboard-02-chunk-1"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">You have no image</h3>
        <p className="text-sm text-muted-foreground">
          You can start generating images from the prompt page.
        </p>
        <Button asChild className="mt-4">
          <Link to="/">Generate Image</Link>
        </Button>
      </div>
    </div>
  );
}
