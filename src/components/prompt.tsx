import { InputForm } from '@/components/input-form';
import { ImgData } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/hooks/reduxHook';

export default function Prompt() {
  const [message, setMessage] = useState<ImgData | undefined>(undefined);
  const [steps, setSteps] = useState<number>(0);
  const { generating } = useAppSelector((state) => state.allImages);

  useEffect(() => {
    if (message) {
      setSteps(message.completed ? 0 : message.step);
    }
  }, [message, generating]);

  return (
    <main className="flex flex-col items-center flex-1 p-4 md:p-8">
      <img
        alt="Product image"
        className="object-cover w-[70%] rounded-md lg:w-1/3 aspect-square"
        src={
          !message
            ? '/placeholder.svg'
            : `data:image/jpeg;base64,${message.image}`
        }
      />

      <Progress
        value={steps}
        className={cn(
          'w-[70%] lg:w-1/3 my-4 invisible',
          generating && 'visible'
        )}
      />

      <InputForm setMessage={setMessage} />
    </main>
  );
}
