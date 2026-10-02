// Acesso literal a process.env.NEXT_PUBLIC_* é obrigatório: o Next só inlina assim no bundle do cliente.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.evelynrafaelanutri.com.br";

// WhatsApp oficial (somente dígitos, com DDI)
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5562993818529";

export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  "https://www.instagram.com/evelynrafaelanutrii/";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
