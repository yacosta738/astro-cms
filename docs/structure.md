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
│   │   ├───Footer.astro
│   │   ├───Header.astro
│   │   └───PageHeadline.astro
│   ├───data/
│   │   ├───authors/
│   │   │   ├───ar/
│   │   │   │   └───john-doe.json
│   │   │   ├───en/
│   │   │   │   └───john-doe.json
│   │   │   ├───ja/
│   │   │   │   └───john-doe.json
│   │   │   └───zh-cn/
│   │   │       └───john-doe.json
│   │   ├───blog/
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
│   │   │   │   ├───third-post/
│   │   │   │   │   └───...
│   │   │   │   └───.DS_Store
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
│   │   │   └───.DS_Store
│   │   ├───categories/
│   │   │   ├───ar/
│   │   │   │   └───internet.md
│   │   │   ├───en/
│   │   │   │   └───internet.md
│   │   │   ├───es/
│   │   │   │   └───internet.md
│   │   │   ├───jp/
│   │   │   │   └───internet.md
│   │   │   └───zh-cn/
│   │   │       └───internet.md
│   │   ├───tags/
│   │   │   ├───ar/
│   │   │   │   └───ai.md
│   │   │   ├───en/
│   │   │   │   └───ai.md
│   │   │   ├───es/
│   │   │   │   └───ai.md
│   │   │   ├───jp/
│   │   │   │   └───ai.md
│   │   │   └───zh-cn/
│   │   │       └───ai.md
│   │   └───.DS_Store
│   ├───layouts/
│   │   ├───Article.astro
│   │   └───Base.astro
│   ├───pages/
│   │   ├───[lang]/
│   │   │   ├───blog/
│   │   │   │   ├───[...id].astro
│   │   │   │   └───index.astro
│   │   │   ├───404.astro
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
│   ├───env.d.ts
│   ├───i18n.ts
│   └───locales.ts
├───.gitignore
├───.lycheeignore
├───.npmrc
├───.pre-commit-config.yaml
├───LICENSE
├───README.md
├───astro.config.mjs
├───biome.json
├───package.json
├───pnpm-lock.yaml
├───renovate.json
└───tsconfig.json

```
