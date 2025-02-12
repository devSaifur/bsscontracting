import type { APIRoute } from 'astro'

import { sendDiscordMessage } from '@/lib/discord'
import {
  object,
  string,
  email,
  pipe,
  parse,
  minLength,
  maxLength
} from 'valibot'

export const prerender = false

const contactSchema = object({
  firstName: pipe(string(), minLength(2), maxLength(50)),
  lastName: pipe(string(), minLength(2), maxLength(50)),
  email: pipe(string(), email()),
  phone: string(),
  message: string()
})

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const body = Object.fromEntries(data)

  const validData = parse(contactSchema, body)

  try {
    await sendDiscordMessage(validData)
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ success: false }), { status: 500 })
  }
}
