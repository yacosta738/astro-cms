import type { UIDict } from "../types";

export const index: {
	en: UIDict;
	es: UIDict;
	ja: UIDict;
	"zh-cn": UIDict;
	ar: UIDict;
} = {
	en: {
		intro:
			"i18n Starter is a simple Astro theme for creating multilingual websites. It supports i18n feature from Astro v4.0.",
		"url.description":
			"Basically, only the subdirectory URL scheme is supported. It is managed by the URL as follows for each language. The root URL is redirected to the specified default language.",
		feature: "Feature",
		"feature.astro.i18n": "support for Astro's official i18n feature",
		"feature.multilingual": "Various management methods for multilingual pages",
		"feature.seo": "SEO friendly",
		"feature.performance": "100/100 Lighthouse performance",
		"getting.started": "Getting Started",
		"getting.started.description": "Assumes basic knowledge of Astro.",
		"getting.started.cta": "If you're okay, let's get started!",
		"start.setup": "Start Setup",
	},
	es: {
		intro:
			"i18n Starter es un tema Astro simple para crear sitios web multilingües. Admite la función i18n de Astro v4.0.",
		"url.description":
			"Básicamente, solo se admite el esquema de URL de subdirectorio. Se administra mediante la URL de la siguiente manera para cada idioma. La URL raíz se redirige al idioma predeterminado especificado.",
		feature: "Característica",
		"feature.astro.i18n": "soporte para la función i18n oficial de Astro",
		"feature.multilingual":
			"Varios métodos de gestión para páginas multilingües",
		"feature.seo": "SEO amigable",
		"feature.performance": "100/100 Lighthouse rendimiento",
		"getting.started": "Empezando",
		"getting.started.description": "Supone conocimientos básicos de Astro.",
		"getting.started.cta": "Si estás bien, ¡empecemos!",
		"start.setup": "Comenzar la configuración",
	},
	ja: {
		intro:
			"i18n Starter は多言語対応サイトを作成するためのシンプルな Astro theme です。Astro v4.0からのi18n機能に対応しています。",
		"url.description":
			"基本的にサブディレクトリ方式のURLのみサポートしています。言語ごとに以下のようなURLで管理されます。ルートURLは指定したデフォルト言語にリダイレクトされます。",
		feature: "特徴",
		"feature.astro.i18n": "Astro公式のi18n機能をサポート",
		"feature.multilingual": "多言語ページの様々な管理方法",
		"feature.seo": "SEOフレンドリー",
		"feature.performance": "100/100 Lighthouse スコア",
		"getting.started": "はじめに",
		"getting.started.description": "Astroの基本的な知識を前提とします。",
		"getting.started.cta": "大丈夫な方は、さっそく初めましょう！",
		"start.setup": "設定を開始",
	},
	"zh-cn": {
		intro:
			"i18n Starter 是一个用于创建多语言网站的简单 Astro 主题。它支持 Astro v4.0 的 i18n 功能。",
		"url.description":
			"基本上，只支持子目录 URL 方案。 它由以下 URL 为每种语言进行管理。 根 URL 将重定向到指定的默认语言。",
		feature: "特点",
		"feature.astro.i18n": "支持 Astro 官方的 i18n 功能",
		"feature.multilingual": "多语言页面的各种管理方法",
		"feature.seo": "SEO 友好",
		"feature.performance": "100/100 Lighthouse 性能",
		"getting.started": "入门指南",
		"getting.started.description": "假设您具有 Astro 的基本知识。",
		"getting.started.cta": "如果您没问题，让我们开始吧！",
		"start.setup": "开始设置",
	},
	ar: {
		intro:
			"i18n Starter هو موضوع Astro بسيط لإنشاء مواقع الويب متعددة اللغات.يدعم ميزة i18n من Astro v4.0.",
		"url.description":
			"أساساً، يتم دعم نظام URL الفرعي فقط. يتم إدارتها من خلال URL كما يلي لكل لغة. يتم توجيه عنوان URL الجذري إلى اللغة الافتراضية المحددة.",
		feature: "ميزة",
		"feature.astro.i18n": "دعم لميزة i18n الرسمية لـ Astro",
		"feature.multilingual": "طرق إدارة متعددة للصفحات متعددة اللغات",
		"feature.seo": "SEO ودية",
		"feature.performance": "أداء Lighthouse 100/100",
		"getting.started": "البدء",
		"getting.started.description": "يفترض المعرفة الأساسية بـ Astro.",
		"getting.started.cta": "إذا كنت على ما يرام، دعنا نبدأ!",
		"start.setup": "ابدأ الإعداد",
	},
};
