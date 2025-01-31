import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderScript } from './astro/server_BU7iqxl9.mjs';

const $$Astro$4 = createAstro("https://bsscontracting.us");
const $$AuthBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AuthBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:bg-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const disabledClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  return renderTemplate`<!-- Styled submit button with dynamic title -->${maybeRenderHead()}<button type="submit"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`, "class")}>${title}</button>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/buttons/AuthBtn.astro", undefined);

const $$Astro$3 = createAstro("https://bsscontracting.us");
const $$TextInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TextInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(name, "name")}${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/forms/input/TextInput.astro", undefined);

const $$Astro$2 = createAstro("https://bsscontracting.us");
const $$EmailContactInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EmailContactInput;
  const { label = Astro2.currentLocale === "fr" ? "E-mail" : "Email", id } = Astro2.props;
  return renderTemplate`<!-- Container for the label and email input field -->${maybeRenderHead()}<div> <!-- Label for the email input field, visually hidden but accessible to screen readers --> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <!-- Email input field --> <input type="email" name="email"${addAttribute(id, "id")} autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1" placeholder="Email"> </div>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/forms/input/EmailContactInput.astro", undefined);

const $$Astro$1 = createAstro("https://bsscontracting.us");
const $$PhoneInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PhoneInput;
  const {
    label = Astro2.currentLocale === "fr" ? "Num\xE9ro de t\xE9l\xE9phone" : "Phone Number",
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="number" name="phone"${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/forms/input/PhoneInput.astro", undefined);

const $$Astro = createAstro("https://bsscontracting.us");
const $$TextAreaInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextAreaInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")} rows="4" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}></textarea> </div>`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/ui/forms/input/TextAreaInput.astro", undefined);

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const formSubTitle = "We'll get back to you in 1-2 business days.";
  return renderTemplate`${maybeRenderHead()}<form id="contactForm" action="/api/contact" method="POST"> <div class="grid gap-4 md:gap-5"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname-contacts", "label": "First Name", "name": "firstName" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-contacts", "label": "Last Name", "name": "lastName" })} </div> ${renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "id": "hs-email-contacts" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "hs-about-contacts", "label": "Details", "name": "message" })} </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Send Message" })} </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> </div> </form> ${renderScript($$result, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/misc/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/saifur/Documents/projects/bsscontracting/src/components/sections/misc/ContactForm.astro", undefined);

export { $$ContactForm as $ };
