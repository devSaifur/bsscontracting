import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BU7iqxl9.mjs';
import { $ as $$Image } from './_astro_assets_cBof1AZX.mjs';
import { $ as $$Icon } from './MainLayout_CMzeCjpd.mjs';

const $$Astro$2 = createAstro("https://bsscontracting.us");
const $$PrimaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PrimaryCTA;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-none";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </a>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/buttons/PrimaryCTA.astro", undefined);

const $$Astro$1 = createAstro("https://bsscontracting.us");
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/blocks/LeftSection.astro", undefined);

const $$Astro = createAstro("https://bsscontracting.us");
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8"> <!-- Single image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-lg", "src": imgOne, "alt": imgOneAlt, "format": "avif" })} </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "avif" })} <!-- Second image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "avif" })} </div>`} </section>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/blocks/RightSection.astro", undefined);

const beforeAfter = new Proxy({"src":"/_astro/before-after.BntBToq6.avif","width":2048,"height":1366,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/before-after.avif";
							}
							
							return target[name];
						}
					});

const treeService = new Proxy({"src":"/_astro/tree-services-1.u5NgDNz5.webp","width":768,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/tree-services-1.webp";
							}
							
							return target[name];
						}
					});

const treeService2 = new Proxy({"src":"/_astro/tree-services-2.ClCJfvlw.webp","width":768,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/tree-services-2.webp";
							}
							
							return target[name];
						}
					});

const lawnCare = new Proxy({"src":"/_astro/lawn-care-1.B_TYW5eN.webp","width":2464,"height":1632,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/lawn-care-1.webp";
							}
							
							return target[name];
						}
					});

const lawnCare2 = new Proxy({"src":"/_astro/lawn-care-2.Bu59sPFf.webp","width":776,"height":434,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/lawn-care-2.webp";
							}
							
							return target[name];
						}
					});

const interiorDesign = new Proxy({"src":"/_astro/interior-design.D2tz7L9b.webp","width":1280,"height":720,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/interior-design.webp";
							}
							
							return target[name];
						}
					});

const fixSupport = new Proxy({"src":"/_astro/fix-support-1.CHa8o359.webp","width":1353,"height":884,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/fix-support-1.webp";
							}
							
							return target[name];
						}
					});

const fixSupport2 = new Proxy({"src":"/_astro/fix-support-2.CVj3j5il.webp","width":740,"height":416,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/fix-support-2.webp";
							}
							
							return target[name];
						}
					});

const articles = [
  {
    isRightSection: true,
    title: "Tree Services by Trusted Arborist",
    subTitle: "BSS Contracting offers a comprehensive range of tree services to keep your property safe and beautiful. Our certified arborists provide expert tree care, including pruning, removal, and emergency services. We use the latest equipment and techniques to ensure the health and longevity of your trees.",
    single: false,
    imgOne: treeService,
    imgOneAlt: "Tree services by trusted arborist",
    imgTwo: treeService2,
    imgTwoAlt: "Person working in the tree"
  },
  {
    isRightSection: false,
    title: "Transforming Designs into Reality",
    subTitle: "Our skilled craftsmen bring precision and excellence to every construction project. From minor installations to substantial structural work, ScrewFast offers reliable construction services to turn your plans into tangible outcomes. We ensure the highest standards of safety and workmanship, utilizing top-quality tools and materials from our extensive inventory.",
    img: beforeAfter,
    imgAlt: "Construction site before and after",
    btnExists: true,
    btnTitle: "Learn More",
    btnURL: "/contact"
  },
  {
    isRightSection: true,
    title: "Lawn Care and Maintenance Services",
    subTitle: "BSS Contracting provides professional lawn care and maintenance services to keep your property looking its best. Our team of experts offers a range of services, including mowing, edging, fertilization, and weed control. We use environmentally friendly products and techniques to ensure a healthy and vibrant lawn.",
    single: false,
    imgOne: lawnCare,
    imgOneAlt: "Lawn care and maintenance services",
    imgTwo: lawnCare2,
    imgTwoAlt: "Person mowing the lawn"
  },
  {
    isRightSection: false,
    title: "Interior Design and Renovation Services",
    subTitle: "BSS Contracting's interior design and renovation services are tailored to meet your unique needs and style preferences. Our team of experts works closely with you to create a space that reflects your personality and lifestyle. From concept to completion, we handle every aspect of the project with precision and care, ensuring a beautiful and functional result.",
    img: interiorDesign,
    imgAlt: "Interior design and renovation services by BSS Contracting"
  },
  {
    isRightSection: true,
    title: "Fixing & Support Services",
    subTitle: "Our team of skilled professionals provides reliable fixing and support services to address a wide range of issues in your home or business. From minor repairs to major renovations, we have the expertise and tools to get the job done right. We offer prompt and efficient service to ensure your property is safe and functional.",
    single: false,
    imgOne: fixSupport,
    imgOneAlt: "A man fixing electrical wires",
    imgTwo: fixSupport2,
    imgTwoAlt: "Person fixing electrical wires",
    btnExists: true,
    btnTitle: "Learn More",
    btnURL: "/contact"
  }
];

export { $$PrimaryCTA as $, articles as a, $$RightSection as b, $$LeftSection as c };
