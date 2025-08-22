# Project Structure

```plaintext
├───.devcontainer/
│   ├───Dockerfile
│   ├───devcontainer.json
│   └───welcome-message.txt
├───.github/
│   ├───ISSUE_TEMPLATE/
│   │   ├───bug_report.md
│   │   └───feature_request.md
│   ├───workflows/
│   │   ├───cleanup.yml
│   │   ├───codeql.yml
│   │   ├───image-actions.yml
│   │   ├───links.yml
│   │   └───pagespeed-insights.yml
│   ├───.DS_Store
│   ├───FUNDING.yml
│   ├───PULL_REQUEST_TEMPLATE.md
│   └───dependabot.yml
├───.vscode/
│   ├───extensions.json
│   ├───launch.json
│   └───settings.sample.json
├───docs/
│   ├───hero.svg
│   ├───lighthouse.png
│   └───structure.md
├───public/
│   ├───admin/
│   │   └───config.yml
│   ├───.DS_Store
│   ├───android-icon.png
│   ├───apple-touch-icon.png
│   ├───favicon.png
│   ├───favicon.svg
│   └───ogp.png
├───src/
│   ├───assets/
│   │   ├───ar/
│   │   │   └───hero.svg
│   │   ├───en/
│   │   │   └───hero.svg
│   │   ├───es/
│   │   │   └───hero.svg
│   │   ├───images/
│   │   │   ├───ar/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   ├───en/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   ├───es/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   ├───ja/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   ├───zh-cn/
│   │   │   │   ├───first-post/
│   │   │   │   │   └───...
│   │   │   │   ├───second-post/
│   │   │   │   │   └───...
│   │   │   │   └───third-post/
│   │   │   │       └───...
│   │   │   ├───DALL·E 2025-02-21 23.23.12 - Una representación conceptual del Humane AI Pin, un dispositivo pequeño y elegante que se adhiere a la ropa. El diseño es minimalista, con un cuerpo m.webp
│   │   │   ├───blog-placeholder-1.avif
│   │   │   ├───blog-placeholder-2.avif
│   │   │   ├───blog-placeholder-3.avif
│   │   │   ├───blog-placeholder-4.avif
│   │   │   ├───cloudflare-vs-laliga-2.webp
│   │   │   └───photo-1601987077677-5346c0c57d3f.avif
│   │   ├───ja/
│   │   │   └───hero.svg
│   │   ├───zh-cn/
│   │   │   └───hero.svg
│   │   ├───.DS_Store
│   │   ├───astro-logo.svg
│   │   └───symbol.svg
│   ├───components/
│   │   ├───i18n/
│   │   │   ├───LocaleHtmlHead.astro
│   │   │   ├───LocaleSelect.astro
│   │   │   ├───LocaleSelectSingle.astro
│   │   │   ├───LocaleSuggest.astro
│   │   │   ├───LocalesHomeList.astro
│   │   │   └───NotTranslateCaution.astro
│   │   ├───.DS_Store
│   │   ├───Footer.astro
│   │   ├───Header.astro
│   │   ├───OptimizedPicture.astro
│   │   └───PageHeadline.astro
│   ├───data/
│   │   ├───authors/
│   │   │   ├───ar/
│   │   │   │   └───john-doe.json
│   │   │   ├───en/
│   │   │   │   └───john-doe.json
│   │   │   ├───es/
│   │   │   │   └───john-doe.json
│   │   │   ├───ja/
│   │   │   │   └───john-doe.json
│   │   │   ├───zh-cn/
│   │   │   │   └───john-doe.json
│   │   │   └───.DS_Store
│   │   ├───blog/
│   │   │   ├───ar/
│   │   │   │   ├───2025/
│   │   │   │   │   └───...
│   │   │   │   └───.DS_Store
│   │   │   ├───en/
│   │   │   │   ├───2025/
│   │   │   │   │   └───...
│   │   │   │   └───.DS_Store
│   │   │   ├───es/
│   │   │   │   ├───2025/
│   │   │   │   │   └───...
│   │   │   │   └───.DS_Store
│   │   │   ├───ja/
│   │   │   │   ├───2025/
│   │   │   │   │   └───...
│   │   │   │   └───.DS_Store
│   │   │   ├───zh-cn/
│   │   │   │   ├───2025/
│   │   │   │   │   └───...
│   │   │   │   └───.DS_Store
│   │   │   └───.DS_Store
│   │   ├───categories/
│   │   │   ├───ar/
│   │   │   │   ├───internet.md
│   │   │   │   └───test.md
│   │   │   ├───en/
│   │   │   │   ├───internet.md
│   │   │   │   └───test.md
│   │   │   ├───es/
│   │   │   │   ├───internet.md
│   │   │   │   └───test.md
│   │   │   ├───ja/
│   │   │   │   └───test.md
│   │   │   ├───jp/
│   │   │   │   └───internet.md
│   │   │   ├───zh-cn/
│   │   │   │   ├───internet.md
│   │   │   │   └───test.md
│   │   │   └───.DS_Store
│   │   ├───tags/
│   │   │   ├───ar/
│   │   │   │   ├───ai.md
│   │   │   │   └───test.md
│   │   │   ├───en/
│   │   │   │   ├───ai.md
│   │   │   │   └───test.md
│   │   │   ├───es/
│   │   │   │   ├───ai.md
│   │   │   │   └───test.md
│   │   │   ├───ja/
│   │   │   │   ├───ai.md
│   │   │   │   └───test.md
│   │   │   ├───zh-cn/
│   │   │   │   ├───ai.md
│   │   │   │   └───test.md
│   │   │   └───.DS_Store
│   │   └───.DS_Store
│   ├───i18n/
│   │   ├───__tests__/
│   │   │   └───i18n.test.ts
│   │   ├───translations/
│   │   │   ├───about.ts
│   │   │   ├───common.ts
│   │   │   ├───error.ts
│   │   │   ├───index.ts
│   │   │   └───theme.ts
│   │   ├───.DS_Store
│   │   ├───i18n.ts
│   │   ├───index.ts
│   │   ├───locales.ts
│   │   ├───types.ts
│   │   └───ui.ts
│   ├───layouts/
│   │   ├───Article.astro
│   │   └───Base.astro
│   ├───pages/
│   │   ├───[lang]/
│   │   │   ├───blog/
│   │   │   │   ├───[...id].astro
│   │   │   │   └───index.astro
│   │   │   ├───404.astro
│   │   │   ├───about.astro
│   │   │   ├───index.astro
│   │   │   ├───monolingual.astro
│   │   │   └───rss.xml.js
│   │   ├───ar/
│   │   │   ├───feature.mdx
│   │   │   ├───page.mdx
│   │   │   └───setup.mdx
│   │   ├───en/
│   │   │   ├───feature.mdx
│   │   │   ├───page.mdx
│   │   │   └───setup.mdx
│   │   ├───es/
│   │   │   ├───feature.mdx
│   │   │   ├───page.mdx
│   │   │   └───setup.mdx
│   │   ├───ja/
│   │   │   ├───feature.mdx
│   │   │   ├───page.mdx
│   │   │   └───setup.mdx
│   │   ├───zh-cn/
│   │   │   ├───feature.mdx
│   │   │   ├───page.mdx
│   │   │   └───setup.mdx
│   │   ├───.DS_Store
│   │   ├───404.astro
│   │   ├───admin.astro
│   │   ├───index.astro
│   │   └───robots.txt.ts
│   ├───styles/
│   │   ├───base.css
│   │   ├───global.css
│   │   ├───layout.css
│   │   └───reset.css
│   ├───.DS_Store
│   ├───consts.ts
│   ├───content.config.ts
│   └───env.d.ts
├───.gitignore
├───.lycheeignore
├───.npmrc
├───.pre-commit-config.yaml
├───LICENSE
├───README.md
├───SECURITY.md
├───astro.config.mjs
├───biome.json
├───package.json
├───pnpm-lock.yaml
├───pnpm-workspace.yaml
├───renovate.json
├───tsconfig.json
├───vitest.config.ts
└───vitest.setup.ts

```
