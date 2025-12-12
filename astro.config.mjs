import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import Unocss from 'unocss/astro';
import icon from 'astro-icon'; // 👈 补回了这一行：引入图标功能

// https://astro.build/config
export default defineConfig({
  // 保持静态模式
  output: 'static',
  site: 'https://astro-bento-portfolio-cji.pages.dev',
  // 👇 补回了 icon()：启用图标插件
  integrations: [sitemap(), Unocss(), icon()],
});
