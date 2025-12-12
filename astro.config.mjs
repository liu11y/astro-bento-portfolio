import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import Unocss from 'unocss/astro';
import icon from 'astro-icon';
import solidJs from '@astrojs/solid-js'; // 👈 补回了：渲染地球特效专用
import svelte from '@astrojs/svelte';    // 👈 补回了：渲染其他UI组件专用

// https://astro.build/config
export default defineConfig({
  // 保持静态模式，这对 Cloudflare 最友好
  output: 'static',
  site: 'https://astro-bento-portfolio-cji.pages.dev',
  integrations: [
    sitemap(), 
    Unocss(), 
    icon(), 
    solidJs(), // 启用 SolidJS
    svelte()   // 启用 Svelte
  ],
});
