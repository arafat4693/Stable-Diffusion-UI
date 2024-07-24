# Stable Diffusion UI

## Project Overview

This project is a simple web application that interacts with a real-time image generation API using the Stable Diffusion API. It has two views:

1. **Prompting Page**: A user can enter text prompts to generate images and view the generation progress in real-time.
2. **Gallery Page**: Displays previously generated images.

## Technologies Used

- **React**: For building the user interface.
- **Redux (with Redux Toolkit)**: For state management.
- **TypeScript**: For type safety and better development experience.
- **Websocket**: For WebSocket communication with the Stable Diffusion API.
- **React Router**: For routing between the Prompting Page and Gallery Page.
- **Shadcn**: For UI components.

## Architecture

The project follows a typical React-Redux architecture with a focus on modularity and separation of concerns. The key components and files are:

- **src/components/prompt.tsx**: Contains the UI and logic for the prompting page.
- **src/components/galleryPage.tsx**: Contains the UI for displaying the gallery of generated images.
- **src/redux/slices/imagesSlice.ts**: Redux slice that manages the state for images, loading, and errors.
- **src/redux/store.ts**: Configures the Redux store.
- **src/App.tsx**: Main application component that sets up routing.
- **src/index.tsx**: Entry point for the React application.

## Setup Instructions

```bash
git clone <repository_url>
cd <repository_directory>

npm install
npm run dev
```
