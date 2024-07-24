import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

type AppProps = {
  children: React.ReactNode;
};

export default function Home({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-full min-h-screen">
        <Navbar />
        {children}

        {/*Toaster to show notifications such as API errors*/}
        <Toaster
          toastOptions={{
            style: {
              background: 'red',
            },
            className: 'class',
          }}
        />
      </div>
    </ThemeProvider>
  );
}
