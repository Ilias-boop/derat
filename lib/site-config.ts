// Central configuration for 3D Dératisation.
// Update these placeholders with the real business information.

export const siteConfig = {
  name: "3D Dératisation",
  // Displayed phone number (human readable)
  phoneDisplay: "01 23 45 67 89",
  // Phone number in international format for tel: links
  phoneHref: "+33123456789",
  // WhatsApp number in international format WITHOUT + or spaces
  whatsappNumber: "33123456789",
  email: "contact@3d-deratisation.fr",
  // Main service area
  mainCity: "[VILLE]",
  department: "[DÉPARTEMENT]",
  // Nearby cities (placeholders — replace with real communes)
  nearbyCities: ["[VILLE 1]", "[VILLE 2]", "[VILLE 3]", "[VILLE 4]", "[VILLE 5]"],
  rating: "4,9",
  reviewCount: "XXX",
  // Public site URL (used for structured data / metadata)
  url: "https://www.3d-deratisation.fr",
} as const

// Build a WhatsApp click-to-chat URL with a pre-filled message.
export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Default pre-filled WhatsApp messages for different intents.
export const waMessages = {
  general: "Bonjour, j'aimerais des informations sur une intervention de dératisation.",
  photo: "Bonjour, je vous envoie une photo de ce que j'ai trouvé chez moi. Pouvez-vous m'aider ?",
  rats: "Bonjour, je pense avoir des rats chez moi. Pouvez-vous m'aider ?",
  mice: "Bonjour, je pense avoir des souris chez moi. Pouvez-vous m'aider ?",
  cockroaches: "Bonjour, je pense avoir des cafards chez moi. Pouvez-vous m'aider ?",
  technician: "Bonjour, j'aimerais parler à un technicien de ma situation.",
  appointment: "Bonjour, j'aimerais prendre rendez-vous pour un diagnostic.",
} as const
