export interface ImgData {
  image: string;
  step: number;
  completed: boolean;
  request: Request;
}

export interface Request {
  prompt: string;
  negative_prompt: null;
  image_size: number[];
  steps: number;
  guidance_scale: number;
}
