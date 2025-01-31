import { WebhookClient } from 'discord.js';
import { object, pipe, string, minLength, maxLength, email, parse } from 'valibot';
export { renderers } from '../../renderers.mjs';

const webhook = new WebhookClient({
  url: process.env.DISCORD_WEBHOOK_URL
});
const sendDiscordMessage = async (message) => {
  const { firstName, lastName, email, phone, message: msg } = message;
  await webhook.send(
    `**Name:** ${firstName} ${lastName}
**Email:** ${email}
**Phone:** ${phone}
**Message:** ${msg}`
  );
};

const prerender = false;
const contactSchema = object({
  firstName: pipe(string(), minLength(2), maxLength(50)),
  lastName: pipe(string(), minLength(2), maxLength(50)),
  email: pipe(string(), email()),
  phone: string(),
  message: string()
});
const POST = async ({ request }) => {
  const data = await request.formData();
  const body = Object.fromEntries(data);
  const validData = parse(contactSchema, body);
  try {
    await sendDiscordMessage(validData);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
