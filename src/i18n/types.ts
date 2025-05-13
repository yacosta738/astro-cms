import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./locales";
/**
 * User-defined locales list
 */
export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>;
type LocaleConfig = {
	readonly label: string;
	readonly lang?: string;
	readonly dir?: "ltr" | "rtl";
	readonly flag?: string;
};

/**
 * Configuration to determine if default language should be shown in URLs
 * When false, the default language won't have a prefix in URLs
 * @example
 * If false: /about (for default language) and /es/about (for other languages)
 * If true: /en/about and /es/about
 */
export const SHOW_DEFAULT_LANG_IN_URL = true;

/**
 * Type for the language code
 * @example
 * "en" | "ja" | ...
 */
export type Lang = keyof typeof LOCALES;

/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING as Lang;

// Dictionary type for UI translations
export type UIDict = Record<string, string>;

// Tipo para las traducciones de la UI (siempre objetos por idioma)
export type UIMultilingual = { [key in Lang]: UIDict };

// Tipo para el texto multilingüe pasado a t (cadenas por idioma)
export type Multilingual = { [key in Lang]?: string };
