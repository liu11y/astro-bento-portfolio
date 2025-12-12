import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  // 关键修改1：强制生成纯静态 HTML 文件，Cloudflare 最喜欢这个
  output: 'static', 
  // 关键修改2：删掉了那个惹祸的 netlify 适配器
  site: 'https://astro-bento-portfolio-cji.pages.dev', 
  integrations: [sitemap(), Unocss()],
});
