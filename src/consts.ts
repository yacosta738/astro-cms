// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";

export const BRAND_NAME: string | Multilingual = "Astro CMS";
export const SITE_TITLE: string | Multilingual = "Astro CMS";

export const SITE_DESCRIPTION: string | Multilingual = {
	en: "Weekly tech news digest delivered every Friday, plus a comprehensive catalog of resources for developers and tech enthusiasts.",
	es: "Resumen semanal de noticias tecnológicas enviado todos los viernes, además de un catálogo completo de recursos útiles para programadores y entusiastas de la tecnología.",
};

export const X_ACCOUNT: string | Multilingual = "@yacosta738";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
	en: "This page is not available in your language.",
	es: "Esta página no está disponible en tu idioma.",
};

// Base URLs
const BASE_URL_LOCAL = "http://localhost:4321";
const BASE_URL_PROD = "https://astro-cms-dpv.pages.dev";
export const BASE_URL = import.meta.env.DEV ? BASE_URL_LOCAL : BASE_URL_PROD;
