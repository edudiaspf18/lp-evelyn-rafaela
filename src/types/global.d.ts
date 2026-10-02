export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: "event" | "config" | "js" | "consent", ...args: unknown[]) => void;
    fbq?: (command: "track" | "init" | "trackCustom", ...args: unknown[]) => void;
  }
}
