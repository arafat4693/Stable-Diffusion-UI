import { Separator } from '@/components/ui/separator';
import NoImagePlaceholder from '@/components/no-image-placeholder';
import { useAppSelector } from '@/lib/hooks/reduxHook';

export default function Gallery() {
  const { images } = useAppSelector((state) => state.allImages);

  return (
    <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
            <p className="text-sm text-muted-foreground">
              Your all generated images.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
      </div>

      {images.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-md">
              <img
                src={`data:image/jpeg;base64,${src}`}
                alt="generated"
                className="object-cover transition-all hover:scale-105 aspect-square"
              />
            </div>
          ))}
        </div>
      ) : (
        <NoImagePlaceholder />
      )}
    </main>
  );
}
