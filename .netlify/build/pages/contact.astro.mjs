/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_BU7iqxl9.mjs';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from '../chunks/MainLayout_CMzeCjpd.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_DmNjGxvJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bsscontracting.us");
const $$ContactIconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`<!-- Root container, which arranges the heading and content -->${maybeRenderHead()}<div class="flex gap-x-7 py-6"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3 class="font-bold text-neutral-700 dark:text-neutral-300"> ${heading} </h3> <!-- Content of the section --> <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">${content}</p> <!-- Conditional rendering of address content if isAddressVisible is true --> ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm italic text-neutral-500">${addressContent}</p>` : null} <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true --> ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1"${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/blocks/ContactIconBlock.astro", undefined);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact us";
  const subTitle = "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.";
  const formTitle = "Fill in the form below";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Call us", "content": "Need help? Call our support team for assistance.", "linkTitle": "+44 20 8556 8050", "linkURL": "tel:+442085568050", "isLinkVisible": true, "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "phone" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contact us by email", "content": "Prefer the written word? Drop us an email at", "isLinkVisible": true, "linkTitle": "support@screwfast.uk", "linkURL": "mailto:support@screwfast.uk", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "envelopeOpen" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Visit our office", "content": "UK ScrewFast", "isAddressVisible": true, "addressContent": "72 Union Terrace, E10 4PE London" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "FAQ", "content": "Explore our FAQ for quick, clear answers to common queries.", "isLinkVisible": true, "linkTitle": "Visit FAQ", "linkURL": "/", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chatBubble" })} ` })} </div> </div> </div> </section>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/misc/ContactSection.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Contact | ${SITE.title}`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bsscontracting.us/contact",
    url: "https://bsscontracting.us/contact",
    name: "Contact Us | BSS Contracting",
    description: "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://bsscontracting.us",
      name: "BSS Contracting",
      description: "BSS Contracting offers top-tier property management services to maintain your property with quality customer support. Trusted by many."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "/home/saifur/Documents/projects/bsscontracting/src/pages/contact.astro", undefined);

const $$file = "/home/saifur/Documents/projects/bsscontracting/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
