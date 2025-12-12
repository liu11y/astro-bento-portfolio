import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  // 把这里改成 static，生成纯静态网页
  output: 'static', 
  // 删掉了 adapter: netlify() 那一行
  site: 'https://你的域名.pages.dev', // 这里如果你没买域名，可以先随便填，或者不填
  integrations: [sitemap(), Unocss()],
});
