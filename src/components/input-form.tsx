import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ImgData } from '@/lib/types';
import {
  addImage,
  setError,
  setGenerating,
  setHistory,
} from '@/redux/slices/imagesSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/reduxHook';
import { toast } from 'sonner';

// Form validation with Zod
const FormSchema = z.object({
  prompt: z.string().min(2, {
    message: 'Prompt must be at least 2 characters.',
  }),
});

export function InputForm() {
  const dispatch = useAppDispatch();
  const { generating } = useAppSelector((state) => state.allImages);

  // For form validation
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: '',
    },
  });

  function onSubmit(formData: z.infer<typeof FormSchema>) {
    dispatch(setGenerating(true));
    dispatch(setError(null));

    // New socket instance
    const socket = new WebSocket(
      'wss://stable-diffusion.qura.law/generate?token=0f78a6f0-34cd-4377-955f-acc6e1e355a2'
    );

    socket.onopen = () => {
      //   console.log('WebSocket connection opened');
      const data = JSON.stringify({
        prompt: formData.prompt,
      });
      socket.send(data);
    };

    socket.onmessage = (event) => {
      //   console.log('WebSocket message received:', event.data);
      const data = JSON.parse(event.data) as ImgData;

      if (data.completed) {
        dispatch(addImage(data.image));
        dispatch(setGenerating(false));
      }

      dispatch(setHistory(data));
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.log('WebSocket error:', error);

      toast('Internal server error', {
        description: "Couldn't generate image. Please try again",
      });

      dispatch(setError('Error generating image'));
      dispatch(setGenerating(false));
      dispatch(setHistory(null));
      socket.close();
    };
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[70%] space-y-2 lg:w-1/3"
      >
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Type the prompt..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={generating} type="submit" className="w-full">
          {generating ? 'Generating...' : 'Generate'}
        </Button>
      </form>
    </Form>
  );
}
