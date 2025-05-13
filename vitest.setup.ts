import { vi } from "vitest";

// Mock import.meta.env
vi.stubGlobal("import.meta", {
	env: {
		LANG: "en", // Default language for tests
		DEV: true,
		PROD: false,
		SSR: true,
	},
	glob: vi.fn((pattern, options) => {
		// Mock implementation for import.meta.glob
		// This is used in ui.ts to load translation files
		return {};
	}),
});

// Mock getRelativeLocaleUrl from astro:i18n
vi.mock("astro:i18n", () => ({
	getRelativeLocaleUrl: vi.fn((lang, path) => `/${lang}${path}`),
}));
