import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: "https://madejandola.vercel.app/",
  integrations: [mdx(), react(), tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), prefetch(), svelte()]
});