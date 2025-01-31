/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, e as renderScript } from '../chunks/astro/server_BU7iqxl9.mjs';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_CMzeCjpd.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_cBof1AZX.mjs';
import { $ as $$PrimaryCTA, a as articles, b as $$RightSection, c as $$LeftSection } from '../chunks/services_CFc5yffV.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_DmNjGxvJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://bsscontracting.us");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/buttons/SecondaryCTA.astro", undefined);

const $$Astro$7 = createAstro("https://bsscontracting.us");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"> ${subTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden rounded-2xl"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/landing/HeroSection.astro", undefined);

const $$Astro$6 = createAstro("https://bsscontracting.us");
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 24 24"> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> </section>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/landing/HeroSectionAlt.astro", undefined);

const $$Astro$5 = createAstro("https://bsscontracting.us");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Block to display the feature image --> <div class="relative mb-6 overflow-hidden rounded-xl md:mb-8"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full object-cover object-center", "draggable": "false", "format": "avif", "loading": "eager" })}`} </div> </section>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/features/FeaturesGeneral.astro", undefined);

const $$Astro$4 = createAstro("https://bsscontracting.us");
const $$TestimonialItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl italic text-neutral-800 dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/testimonials/TestimonialItem.astro", undefined);

const $$Astro$3 = createAstro("https://bsscontracting.us");
const $$StatsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/blocks/StatsGrid.astro", undefined);

const $$Astro$2 = createAstro("https://bsscontracting.us");
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const {
    title,
    subTitle,
    testimonials,
    statistics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Container for the testimonials --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1"> <!-- Title and Subtitle --> <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. --> ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/testimonials/TestimonialsSection.astro", undefined);

const $$Astro$1 = createAstro("https://bsscontracting.us");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/blocks/AccordionItem.astro", undefined);

const $$Astro = createAstro("https://bsscontracting.us");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate`<!-- Main container that holds all content. Customized for different viewport sizes. -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ${faqs.subTitle} </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ${faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  })} </div> </div> </div> </section> <!--Import the necessary Accordion plugin--> <!--https://preline.co/plugins/html/accordion.html--> ${renderScript($$result, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/misc/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/misc/FAQ.astro", undefined);

const heroImage = new Proxy({"src":"/_astro/hero-image.DLKA8KBE.webp","width":1024,"height":768,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/hero-image.webp";
							}
							
							return target[name];
						}
					});

const subTitle = "Ask us anything about our brand and products, and get factual responses.";
const faqs = [{"question":"What types of tools are included in the Starter Kit?","answer":"The Starter Kit features essential hand and power tools for diverse DIY projects, including hammers, drills, screwdrivers, and a variety of fasteners. It's a curated selection to help beginners and experienced DIYers alike tackle most home improvement tasks."},{"question":"Can I upgrade from the Starter Kit to the Professional Toolbox?","answer":"Absolutely! You can upgrade to the Professional Toolbox at any time to access a wider range of high-quality tools, enjoy priority customer support, and receive exclusive content. Contact our support team for a seamless transition."},{"question":"What discounts are available for bulk orders through the Professional Toolbox plan?","answer":"Professional Toolbox members are entitled to exclusive discounts on bulk orders, the percentage of which may vary depending on the order volume. Get in touch with us to discuss your needs, and we'll provide a tailored discount structure."},{"question":"What kind of customer support can I expect?","answer":"All our customers receive dedicated email support. With the Starter Kit, you'll receive our standard support, while the Professional Toolbox plan upgrades you to priority support, meaning faster response times and specialized assistance."},{"question":"How current are the online resources and tutorials?","answer":"We regularly update our online resources and tutorials to reflect the latest trends in DIY and construction, as well as introductions to new tools and techniques. Our material aims to be comprehensive and user-friendly for all skill levels."},{"question":"Does ScrewFast offer services for large-scale construction projects?","answer":"Yes, our Enterprise Solutions are designed for larger companies requiring comprehensive services. We provide consultation, planning, and supply of high-grade tools and materials, as well as staffing solutions for substantial construction needs. Contact us for a customized quote."}];
const faqs$1 = {
  subTitle,
  faqs,
};

const featureImage = new Proxy({"src":"/_astro/features-image.BW-D8kNa.webp","width":1349,"height":905,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/features-image.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact us";
  const subTitle = "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Maintain your property with <span
        class="text-yellow-500 dark:text-yellow-400">BSS Contracting Management</span>`, "subTitle": "We offer top-tier maintenance to your property with quality customer support. Trusted by many.", "primaryBtn": "Start Exploring", "primaryBtnURL": "/services", "secondaryBtn": "Contact Us", "secondaryBtnURL": "/contact", "src": heroImage, "alt": "Stack of ScrewFast product boxes containing assorted hardware tools" })} ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })}${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "src": featureImage, "alt": "Worker working on construction site" })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Fast-Track Your Projects", "subTitle": "At Bss Contracting, we're proud to have helped countless clients achieve their goals. Here's what they have to say about our services.", "testimonials": [
    {
      content: "Bss Contracting has been an invaluable partner in our construction projects. Their tools and services have helped us save time and money, and their customer support is second to none.",
      author: "Samantha Ruiz",
      role: "Project Manager",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "70k+",
      description: "customers equipped \u2014 from DIY to major construction sites"
    },
    {
      count: "35%",
      description: "uptick in project efficiency with Bss Contracting tools and services"
    },
    {
      count: "15.3%",
      description: "reduction in maintenance costs reported by long-term clients"
    },
    {
      count: "2x",
      description: "quicker assembly using innovative fastening solutions"
    }
  ] })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Frequently<br />asked questions", "faqs": faqs$1 })} ${maybeRenderHead()}<div class="mx-auto max-w-xl space-y-6 pb-14 md:space-y-10 lg:max-w-2xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Let's Build Together with BSS Contracting", "subTitle": "We're here to help you with all your property maintenance needs. Reach out to us today and let's get started!" })} ` })}`;
}, "/home/saifur/Documents/projects/bsscontracting/src/pages/index.astro", undefined);

const $$file = "/home/saifur/Documents/projects/bsscontracting/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
