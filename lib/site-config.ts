// Central configuration for NOX 3D.
// Update these placeholders with the real business information.

export const siteConfig = {
  name: "NOX 3D",
  // Displayed phone number (human readable)
  phoneDisplay: "01 71 62 43 65",
  // Phone number in international format for tel: links
  phoneHref: "+33171624365",
  // WhatsApp number in international format WITHOUT + or spaces
  whatsappNumber: "33171624365",
  email: "contact@nox3d.fr",
  // Main service area
  mainCity: "Lognes",
  department: "Seine-et-Marne (77)",
  // Nearby cities (placeholders — replace with real communes)
  nearbyCities: ["[VILLE 1]", "[VILLE 2]", "[VILLE 3]", "[VILLE 4]", "[VILLE 5]"],
  rating: "4,9",
  reviewCount: "XXX",
  // Public site URL (used for structured data / metadata)
  url: "https://www.nox3d.fr",
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
  punaises: "Bonjour, je pense avoir des punaises de lit chez moi. Pouvez-vous m'aider ?",
  guepes: "Bonjour, je pense avoir des guêpes/frelons chez moi. Pouvez-vous m'aider ?",
  desinsectisation: "Bonjour, j'aimerais des informations sur une intervention de désinsectisation.",
  technician: "Bonjour, j'aimerais parler à un technicien de ma situation.",
  appointment: "Bonjour, j'aimerais prendre rendez-vous pour un diagnostic.",
} as const
