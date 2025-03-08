import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_GOOGLE_CLIENT_ID': JSON.stringify(
      process.env.VITE_GOOGLE_OAUTH_CLIENT_ID
    ),
    'process.env.VITE_REACT_SANITY_PROJECT_ID': JSON.stringify(
      process.env.VITE_REACT_SANITY_PROJECT_ID
    ),
    'process.env.VITE_REACT_SANITY_PROJECT_TOKEN': JSON.stringify(
      process.env.VITE_REACT_SANITY_PROJECT_TOKEN
    ),
  },
});
