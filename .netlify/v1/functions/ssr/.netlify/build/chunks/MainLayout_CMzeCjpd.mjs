import { a as createComponent, u as unescapeHTML, s as spreadAttributes, r as renderTemplate, c as createAstro, b as addAttribute, d as renderComponent, F as Fragment, m as maybeRenderHead, e as renderScript, f as renderSlot, g as renderHead } from './astro/server_BU7iqxl9.mjs';
import { c as getImage, $ as $$Image } from './_astro_assets_cBof1AZX.mjs';
import { i as icon } from './icon_usAXxtal.mjs';
/* empty css                           */

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/social.png";
							}
							
							return target[name];
						}
					});

const SITE = {
  title: "BSS Contracting",
  tagline: "Top-quality Hardware Tools",
  description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://bsscontracting.us",
  author: "Saifur Rahman"
};
const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
};
const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Maintain your property with BSS Contracting top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc
};

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== undefined && props.width === undefined && props.height === undefined) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const faviconSvgSrc = createSvgComponent({"meta":{"src":"/_astro/icon.B7KHh505.svg","width":512,"height":512,"format":"svg"},"attributes":{"mode":"inline","width":"512","height":"512","viewBox":"0 0 512 512","fill":"none"},"children":"\n<rect x=\"-0.00585938\" y=\"-0.000488281\" width=\"512\" height=\"512\" rx=\"100\" fill=\"#262626\" />\n<rect x=\"20.9297\" y=\"109.01\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 20.9297 109.01)\" fill=\"#FACC15\" />\n<rect x=\"100.982\" y=\"183.969\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 100.982 183.969)\" fill=\"#FACC15\" />\n<rect x=\"181.491\" y=\"259.354\" width=\"173.138\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 181.491 259.354)\" fill=\"#FACC15\" />\n<rect x=\"261.998\" y=\"334.739\" width=\"62.4311\" height=\"40.5431\" rx=\"20.2715\" transform=\"rotate(0.0432252 261.998 334.739)\" fill=\"#FACC15\" />\n<path d=\"M442.513 435.922C445.843 442.651 438.906 449.847 432.059 446.766L355.339 412.235C350.291 409.962 349.021 403.373 352.863 399.387L392.264 358.515C396.106 354.53 402.737 355.557 405.193 360.519L442.513 435.922Z\" fill=\"#FACC15\" />\n"});

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro("https://bsscontracting.us");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData
  } = Astro2.props;
  const URL = `${Astro2.site}`;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  Astro2.url.pathname;
  const ogTitle = OG.title;
  const ogDescription = OG.description;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const languages = {
    en: "",
    fr: "fr"
  };
  function createHref(lang, prefix, path) {
    const hasPrefix = path.startsWith(`/${prefix}/`);
    const basePath2 = hasPrefix ? path : `/${prefix}${path}`;
    const normalizedBasePath = basePath2.replace(/\/\/+/g, "/");
    return `${URL.slice(0, -1)}${normalizedBasePath}`;
  }
  const fullPath = Astro2.url.pathname;
  const alternateLanguageLinks = Object.entries(languages).map(([lang, prefix]) => {
    const basePath2 = lang === "en" ? fullPath.replace(/^\/fr\//, "/") : fullPath;
    const href = createHref(lang, prefix, basePath2);
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  }).join("\n");
  const faviconSvg = await getImage({
    src: faviconSvgSrc,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: icon,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`<!-- Inject structured data into the page if provided. This data is formatted as JSON-LD, a method recommended by Google for structured data pass:
     https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data -->${structuredData && renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<!-- Define the character set, description, author, and viewport settings --><meta charset="utf-8"><meta${addAttribute(meta, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(alternateLanguageLinks)}` })}<!-- Facebook Meta Tags --><meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(URL, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(URL, "content")}><meta property="twitter:url"${addAttribute(URL, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><!-- Links to the webmanifest and sitemap --><link rel="manifest" href="/manifest.json"><!-- https://docs.astro.build/en/guides/integrations-guide/sitemap/ --><link rel="sitemap" href="/sitemap-index.xml"><!-- Links for favicons --><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><!-- Set theme color --><meta name="theme-color" content="#facc15">`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/Meta.astro", undefined);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-orange-300 dark:focus:outline-none" data-hs-theme-click-value="dark"> <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <!-- Light Theme Toggle Button --> <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme --> </button> <button type="button" aria-label="Light Theme Toggle" class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-orange-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-none" data-hs-theme-click-value="light"> <!-- The SVG displayed shows a standard sun icon that stands for the light theme --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ThemeIcon.astro", undefined);

const $$Astro$4 = createAstro("https://bsscontracting.us");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-600 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/links/NavLink.astro", undefined);

const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" }
];
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Tools & Equipment", url: "/" },
      { name: "Construction Services", url: "/services" }
    ]
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/" },
      { name: "Blog", url: "/" },
      { name: "Careers", url: "/" },
      { name: "Customers", url: "/" }
    ]
  }
];
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/"
};
const navigation = {
  navBarLinks,
  footerLinks,
  socialLinks
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const strings = navigation;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none" href="/" aria-label="Brand"> ', " ", ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 md:gap-y-0 md:ps-7 lg:gap-x-7"> <!-- Navigation links and Authentication component --> ', ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', " </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = 'default'\n      let theme = localStorage.getItem('hs_theme') || defaultTheme\n\n      if (document.querySelector('html').classList.contains('dark')) return\n      this.setAppearance(theme)\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement('style')\n      $resetStyles.innerText = `*{transition: unset !important;}`\n      $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')\n      document.head.appendChild($resetStyles)\n      return $resetStyles\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad()\n\n      if (saveInStore) {\n        localStorage.setItem('hs_theme', theme)\n      }\n\n      if (theme === 'auto') {\n        theme = window.matchMedia('(prefers-color-scheme: dark)').matches\n          ? 'dark'\n          : 'default'\n      }\n\n      document.querySelector('html').classList.remove('dark')\n      document.querySelector('html').classList.remove('default')\n      document.querySelector('html').classList.remove('auto')\n\n      document.querySelector('html').classList.add(this.getOriginalAppearance())\n\n      setTimeout(() => {\n        $resetStylesEl.remove()\n      })\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent('on-hs-appearance-change', { detail: theme })\n        )\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance()\n      if (theme === 'auto') {\n        theme = window.matchMedia('(prefers-color-scheme: dark)').matches\n          ? 'dark'\n          : 'default'\n      }\n      return theme\n    },\n    getOriginalAppearance() {\n      const defaultTheme = 'default'\n      return localStorage.getItem('hs_theme') || defaultTheme\n    }\n  }\n  HSThemeAppearance.init()\n\n  window\n    .matchMedia('(prefers-color-scheme: dark)')\n    .addEventListener('change', () => {\n      if (HSThemeAppearance.getOriginalAppearance() === 'auto') {\n        HSThemeAppearance.setAppearance('auto', false)\n      }\n    })\n\n  window.addEventListener('load', () => {\n    const $clickableThemes = document.querySelectorAll(\n      '[data-hs-theme-click-value]'\n    )\n    const $switchableThemes = document.querySelectorAll(\n      '[data-hs-theme-switch]'\n    )\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener('click', () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute('data-hs-theme-click-value'),\n          true,\n          $item\n        )\n      )\n    })\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener('change', (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')\n      })\n\n      $item.checked = HSThemeAppearance.getAppearance() === 'dark'\n    })\n\n    window.addEventListener('on-hs-appearance-change', (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === 'dark'\n      })\n    })\n  })\n<\/script>"], ["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none" href="/" aria-label="Brand"> ', " ", ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 md:gap-y-0 md:ps-7 lg:gap-x-7"> <!-- Navigation links and Authentication component --> ', ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', " </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = 'default'\n      let theme = localStorage.getItem('hs_theme') || defaultTheme\n\n      if (document.querySelector('html').classList.contains('dark')) return\n      this.setAppearance(theme)\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement('style')\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`\n      $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')\n      document.head.appendChild($resetStyles)\n      return $resetStyles\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad()\n\n      if (saveInStore) {\n        localStorage.setItem('hs_theme', theme)\n      }\n\n      if (theme === 'auto') {\n        theme = window.matchMedia('(prefers-color-scheme: dark)').matches\n          ? 'dark'\n          : 'default'\n      }\n\n      document.querySelector('html').classList.remove('dark')\n      document.querySelector('html').classList.remove('default')\n      document.querySelector('html').classList.remove('auto')\n\n      document.querySelector('html').classList.add(this.getOriginalAppearance())\n\n      setTimeout(() => {\n        $resetStylesEl.remove()\n      })\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent('on-hs-appearance-change', { detail: theme })\n        )\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance()\n      if (theme === 'auto') {\n        theme = window.matchMedia('(prefers-color-scheme: dark)').matches\n          ? 'dark'\n          : 'default'\n      }\n      return theme\n    },\n    getOriginalAppearance() {\n      const defaultTheme = 'default'\n      return localStorage.getItem('hs_theme') || defaultTheme\n    }\n  }\n  HSThemeAppearance.init()\n\n  window\n    .matchMedia('(prefers-color-scheme: dark)')\n    .addEventListener('change', () => {\n      if (HSThemeAppearance.getOriginalAppearance() === 'auto') {\n        HSThemeAppearance.setAppearance('auto', false)\n      }\n    })\n\n  window.addEventListener('load', () => {\n    const $clickableThemes = document.querySelectorAll(\n      '[data-hs-theme-click-value]'\n    )\n    const $switchableThemes = document.querySelectorAll(\n      '[data-hs-theme-switch]'\n    )\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener('click', () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute('data-hs-theme-click-value'),\n          true,\n          $item\n        )\n      )\n    })\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener('change', (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')\n      })\n\n      $item.checked = HSThemeAppearance.getAppearance() === 'dark'\n    })\n\n    window.addEventListener('on-hs-appearance-change', (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === 'dark'\n      })\n    })\n  })\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": `/logo_dark.webp`, "class": "hidden h-14 w-28 dark:block md:h-20 md:w-36", "alt": "Logo", "width": 140, "height": 72, "format": "avif" }), renderComponent($$result, "Image", $$Image, { "src": `/logo.webp`, "class": "dark:hidden", "alt": "Logo", "width": 140, "height": 72, "format": "avif" }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), strings.navBarLinks.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "url": link.url, "name": link.name })}`), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}));
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/navbar&footer/Navbar.astro", undefined);

const $$Astro$3 = createAstro("https://bsscontracting.us");
const $$FooterSocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FooterSocialLink;
  const { url } = Astro2.props;
  const linkClass = "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(linkClass, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/links/FooterSocialLink.astro", undefined);

const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      }
    ],
    class: "h-6 w-6 flex-shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-orange-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 flex-shrink-0 text-orange-400 dark:text-orange-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 group-hover:dark:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      }
    ],
    class: "w-4.5 h-4.5 transition flex-shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 flex-shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  guides: {
    paths: [
      {
        d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  puzzle: {
    paths: [
      {
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  rocket: {
    paths: [
      {
        d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  hammer: {
    paths: [
      {
        d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  sparks: {
    paths: [
      {
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  community: {
    paths: [
      {
        d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chevronDown: {
    paths: [
      {
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    ],
    class: "ms-2 size-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  phone: {
    paths: [
      {
        d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
      }
    ],
    class: "mt-2 size-5 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$2 = createAstro("https://bsscontracting.us");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` }`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/icons/Icon.astro", undefined);

const $$Astro$1 = createAstro("https://bsscontracting.us");
const $$BrandLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BrandLogo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1316.26 807.53"><defs><style>
      .cls-1 {
        fill: none;
      }
      .cls-2 {
        clip-path: url(#clip-path);
      }
      .cls-3 {
        fill: url(#linear-gradient);
      }
      .cls-4 {
        clip-path: url(#clip-path-2);
      }
      .cls-5 {
        fill: url(#linear-gradient-2);
      }
      .cls-6 {
        clip-path: url(#clip-path-3);
      }
      .cls-7 {
        fill: url(#linear-gradient-3);
      }
      .cls-8 {
        clip-path: url(#clip-path-4);
      }
      .cls-9 {
        fill: url(#linear-gradient-4);
      }
      .cls-10 {
        clip-path: url(#clip-path-5);
      }
      .cls-11 {
        fill: url(#linear-gradient-5);
      }
      .cls-12 {
        clip-path: url(#clip-path-6);
      }
      .cls-13 {
        fill: url(#linear-gradient-6);
      }
      .cls-14 {
        clip-path: url(#clip-path-7);
      }
      .cls-15 {
        fill: url(#linear-gradient-7);
      }
      .cls-16 {
        clip-path: url(#clip-path-8);
      }
      .cls-17 {
        fill: url(#linear-gradient-8);
      }
      .cls-18 {
        clip-path: url(#clip-path-9);
      }
      .cls-19 {
        fill: url(#linear-gradient-9);
      }
      .cls-20 {
        clip-path: url(#clip-path-10);
      }
      .cls-21 {
        fill: url(#linear-gradient-10);
      }
      .cls-22 {
        clip-path: url(#clip-path-11);
      }
      .cls-23 {
        fill: url(#linear-gradient-11);
      }
      .cls-24 {
        clip-path: url(#clip-path-12);
      }
      .cls-25 {
        fill: url(#linear-gradient-12);
      }
      .cls-26,
      .cls-27 {
        font-size: 170.07px;
        font-family: Agency FB;
      }
      .cls-26 {
        fill: #f7931e;
      }
      .cls-27 {
        fill: #fff;
        font-weight: 700;
      }
      .cls-28 {
        font-size: 48.99px;
        fill: #444;
        font-family: Gotham Medium;
        white-space: pre;
      }
      .cls-29 {
        fill: #f9f4f4;
      }
      .cls-30 {
        clip-path: url(#clip-path-13);
      }
      .cls-31 {
        fill: url(#linear-gradient-13);
      }
      .cls-32 {
        clip-path: url(#clip-path-14);
      }
      .cls-33 {
        fill: url(#linear-gradient-14);
      }
      .cls-34 {
        clip-path: url(#clip-path-15);
      }
      .cls-35 {
        fill: url(#linear-gradient-15);
      }
    </style><clipPath id="clip-path" transform="translate(-458.67 -146.59)"><polygon class="cls-1" points="802.26 356.56 802.26 329.22 802.26 298 758.28 298 758.28 335.12 658.36 348.51 543 537.38 820.01 537.38 972.79 306.37 824.95 326.19 802.26 356.56"></polygon></clipPath><linearGradient id="linear-gradient" y1="1080.04" x2="1" y2="1080.04" gradientTransform="matrix(333.11, 0, 0, -333.11, 448.81, 360185.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f15a24"></stop><stop offset="1" stop-color="#fbb03b"></stop></linearGradient><clipPath id="clip-path-2" transform="translate(-458.67 -146.59)"><polygon class="cls-1" points="1183.81 389.12 1183.81 341.12 1147.75 341.12 1147.75 371.55 1065.82 382.53 1059.3 393.21 1193.94 537.38 1198.36 537.38 1323.63 347.98 1202.41 364.22 1183.81 389.12"></polygon></clipPath><linearGradient id="linear-gradient-2" x1="0" y1="1079.98" x2="1" y2="1079.98" gradientTransform="matrix(341.48, 0, 0, -341.48, 483.77, 369225.63)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-3" transform="translate(-458.67 -146.59)"><polygon class="cls-1" points="981.2 327.02 1035.88 404.89 1128.93 537.38 1177.66 537.38 1043.01 393.21 981.2 327.02"></polygon></clipPath><linearGradient id="linear-gradient-3" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(419.59, 0, 0, -419.59, 337.8, 453586.34)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-4" transform="translate(-458.67 -146.59)"><polygon class="cls-1" points="1381.12 419.19 1331.59 364.93 1375.4 428.76 1449.96 537.38 1489 537.38 1381.12 419.19"></polygon></clipPath><linearGradient id="linear-gradient-4" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(423.37, 0, 0, -423.37, 299.15, 457690.72)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-5" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="939.61" y="414.48" width="31.73" height="32.17"></rect></clipPath><linearGradient id="linear-gradient-5" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 487.96, 351733.26)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-6" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="975.78" y="414.48" width="31.73" height="32.17"></rect></clipPath><linearGradient id="linear-gradient-6" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 492.42, 351733.26)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-7" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="975.78" y="451.16" width="31.73" height="32.17"></rect></clipPath><linearGradient id="linear-gradient-7" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 508.16, 351769.94)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-8" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="939.61" y="451.16" width="31.73" height="32.17"></rect></clipPath><linearGradient id="linear-gradient-8" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 503.98, 351769.94)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-9" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="1299.76" y="437" width="22.54" height="22.85"></rect></clipPath><linearGradient id="linear-gradient-9" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 542.21, 351751.05)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-10" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="1325.45" y="437" width="22.54" height="22.85"></rect></clipPath><linearGradient id="linear-gradient-10" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 545.6, 351751.12)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-11" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="1325.45" y="463.05" width="22.54" height="22.85"></rect></clipPath><linearGradient id="linear-gradient-11" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 556.97, 351777.18)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-12" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="1299.76" y="463.05" width="22.54" height="22.85"></rect></clipPath><linearGradient id="linear-gradient-12" x1="0" y1="1080" x2="1" y2="1080" gradientTransform="matrix(325.28, 0, 0, -325.28, 553.59, 351777.11)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-13" transform="translate(-458.67 -146.59)"><polygon class="cls-1" points="709.9 828.22 1068.16 819.43 1068.16 834.66 709.9 828.22"></polygon></clipPath><linearGradient id="linear-gradient-13" x1="0.2" y1="1079.85" x2="1.2" y2="1079.85" gradientTransform="matrix(647.75, 0, 0, -647.75, 667.04, 700299.98)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-14" transform="translate(-458.67 -146.59)"><polygon class="cls-1" points="1645.41 828.22 1287.16 819.43 1287.16 834.66 1645.41 828.22"></polygon></clipPath><linearGradient id="linear-gradient-14" x1="0.2" y1="1079.83" x2="1.2" y2="1079.83" gradientTransform="matrix(649.38, 0, 0, -649.38, 711.41, 702051.67)" xlink:href="#linear-gradient"></linearGradient><clipPath id="clip-path-15" transform="translate(-458.67 -146.59)"><rect class="cls-1" x="1086.16" y="810" width="182" height="34"></rect></clipPath><linearGradient id="linear-gradient-15" x1="0.21" y1="1079.83" x2="1.21" y2="1079.83" gradientTransform="matrix(611.97, 0, 0, -611.97, 709.33, 661649.65)" xlink:href="#linear-gradient"></linearGradient></defs><title>Dark</title><g class="cls-2"><rect class="cls-3" x="513.6" y="225.15" width="488.58" height="385.09" transform="translate(-560.65 173.7) rotate(-22.4)"></rect></g><g class="cls-4"><rect class="cls-5" x="1031.87" y="298.16" width="319.18" height="282.18" transform="translate(-536.15 340.53) rotate(-22.4)"></rect></g><g class="cls-6"><rect class="cls-7" x="948.53" y="297.53" width="261.79" height="269.35" transform="translate(-541.92 297.31) rotate(-22.4)"></rect></g><g class="cls-8"><rect class="cls-9" x="1304.67" y="341.44" width="211.25" height="219.43" transform="translate(-524.18 424.81) rotate(-22.4)"></rect></g><g class="cls-10"><rect class="cls-11" x="934.68" y="409.64" width="41.6" height="41.84" transform="translate(-550.65 249.95) rotate(-22.4)"></rect></g><g class="cls-12"><rect class="cls-13" x="970.85" y="409.64" width="41.6" height="41.84" transform="translate(-547.92 263.74) rotate(-22.4)"></rect></g><g class="cls-14"><rect class="cls-15" x="970.85" y="446.32" width="41.6" height="41.84" transform="translate(-561.89 266.51) rotate(-22.4)"></rect></g><g class="cls-16"><rect class="cls-17" x="934.68" y="446.32" width="41.6" height="41.84" transform="translate(-564.62 252.72) rotate(-22.4)"></rect></g><g class="cls-18"><rect class="cls-19" x="1296.26" y="433.57" width="29.54" height="29.72" transform="translate(-530.63 386.78) rotate(-22.4)"></rect></g><g class="cls-20"><rect class="cls-21" x="1321.95" y="433.57" width="29.54" height="29.72" transform="translate(-528.69 396.57) rotate(-22.4)"></rect></g><g class="cls-22"><rect class="cls-23" x="1321.95" y="459.62" width="29.54" height="29.72" transform="translate(-538.62 398.54) rotate(-22.4)"></rect></g><g class="cls-24"><rect class="cls-25" x="1296.26" y="459.62" width="29.54" height="29.72" transform="translate(-540.56 388.75) rotate(-22.4)"></rect></g><text class="cls-26" transform="translate(84.33 538.97) scale(1.15 1)">BSS</text><text class="cls-27" transform="translate(376.17 538.97) scale(1.15 1)">CONTRACTING</text><text class="cls-28" transform="translate(84.33 622.8)"> <tspan class="cls-29" x="378.88" y="0">M A N A G E M E N T </tspan><tspan x="896.35" y="0"></tspan></text><g class="cls-30"><rect class="cls-31" x="718.99" y="755.99" width="340.09" height="142.11" transform="translate(-695.32 225.24) rotate(-20.91)"></rect></g><g class="cls-32"><rect class="cls-33" x="1296.24" y="755.99" width="340.09" height="142.11" transform="translate(-657.29 431.3) rotate(-20.91)"></rect></g><g class="cls-34"><rect class="cls-35" x="1086.08" y="778.64" width="182.15" height="96.73" transform="translate(-676.32 328.09) rotate(-20.91)"></rect></g></svg>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/BrandLogo.astro", undefined);

const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl"> <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-1"> <!-- Brand Logo --> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-32" })} </div> <!-- An array of links for Product and Company sections --> ${navigation.footerLinks.map((section) => renderTemplate`<div class="col-span-1"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${section.section} </h3> <ul class="mt-3 grid space-y-3"> ${section.links.map((link, index) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none"> ${link.name} </a>  </li>`)} </ul> </div>`)} </div> <div class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex items-center justify-between"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> ${SITE.title}. All rights reserved.
</p> </div> <!-- Social Brands --> <div> ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "facebookFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "xFooter" })}` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "githubFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "googleFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "slackFooter" })} ` })} </div> </div> ${renderScript($$result, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/navbar&footer/FooterSection.astro?astro&type=script&index=0&lang.ts")} </div> </footer>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/navbar&footer/FooterSection.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bsscontracting.us");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = SITE.title, meta, structuredData, lang = "en" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!--\nThis is the main structure for the page.\nWe set the language of the page to English and add classes for scrollbar and scroll behavior.\n--><html lang="en" class="scrollbar-hide lenis lenis-smooth scroll-pt-16" data-astro-cid-ouamjn2i> <head><!-- Adding metadata to the HTML document -->', "<!-- Define the title of the page --><title>", "</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem('hs_theme') === 'dark' ||\n        (!('hs_theme' in localStorage) &&\n          window.matchMedia('(prefers-color-scheme: dark)').matches)\n      ) {\n        document.documentElement.classList.add('dark')\n      } else {\n        document.documentElement.classList.remove('dark')\n      }\n    <\/script>", "", '</head> <body class="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800" data-astro-cid-ouamjn2i> <!--\n    Setting up the main structure of the page.\n    The Navbar is placed at the top, with a slot for the main content and FooterSection at the bottom.\n    --> <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8" data-astro-cid-ouamjn2i> ', " <main data-astro-cid-ouamjn2i> ", " </main> </div> ", "  </body> </html>"])), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "data-astro-cid-ouamjn2i": true }), title, renderScript($$result, "/home/saifur/Documents/projects/bsscontracting/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ouamjn2i": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "data-astro-cid-ouamjn2i": true }));
}, "/home/saifur/Documents/projects/bsscontracting/src/layouts/MainLayout.astro", undefined);

export { $$Icon as $, SITE as S, $$MainLayout as a };
