import { InputForm } from '@/components/input-form';
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/hooks/reduxHook';

export default function Prompt() {
  const [steps, setSteps] = useState<number>(0);
  const { generating, generationHistory } = useAppSelector(
    (state) => state.allImages
  );

  // For the progress bar while generating image
  useEffect(() => {
    if (generationHistory) {
      setSteps(generationHistory.completed ? 0 : generationHistory.step);
    } else setSteps(0);
  }, [generationHistory]);

  return (
    <main className="flex flex-col items-center flex-1 p-4 md:p-8">
      <img
        alt="Product image"
        className="object-cover w-[70%] rounded-md lg:w-1/3 aspect-square"
        src={
          !generationHistory
            ? '/placeholder.svg'
            : `data:image/jpeg;base64,${generationHistory.image}`
        }
      />

      <Progress
        value={steps}
        className={cn(
          'w-[70%] lg:w-1/3 my-4 invisible',
          generating && 'visible'
        )}
      />

      <InputForm />
    </main>
  );
}
