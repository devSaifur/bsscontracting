import { WebhookClient } from 'discord.js'

interface DiscordMessage {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const webhook = new WebhookClient({
  url: process.env.DISCORD_WEBHOOK_URL!
})

export const sendDiscordMessage = async (message: DiscordMessage) => {
  const { firstName, lastName, email, phone, message: msg } = message
  await webhook.send(
    `**Name:** ${firstName} ${lastName}\n**Email:** ${email}\n**Phone:** ${phone}\n**Message:** ${msg}`
  )
}
