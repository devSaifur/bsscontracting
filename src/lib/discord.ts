import { WebhookClient } from 'discord.js'

interface DiscordMessage {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const webhook = new WebhookClient({
  url: 'https://discord.com/api/webhooks/1334259177945825310/zV4Y9bzjh1qo_IzDLnWk2S6HUm_uSGImFziGp1TJXQ9n29h3fsrkkNQrrFBWzxSZFGc0'
})

export const sendDiscordMessage = async (message: DiscordMessage) => {
  const { firstName, lastName, email, phone, message: msg } = message
  await webhook.send(
    `**Name:** ${firstName} ${lastName}\n**Email:** ${email}\n**Phone:** ${phone}\n**Message:** ${msg}`
  )
}
