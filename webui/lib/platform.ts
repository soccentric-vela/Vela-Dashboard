/**
 * Platform identity — single source of truth.
 *
 * Override at build time via .env.local:
 *   NEXT_PUBLIC_PLATFORM_SLUG=vela
 *   NEXT_PUBLIC_PLATFORM_NAME=Vela
 *   NEXT_PUBLIC_PLATFORM_SERVER=http://vela-server:8080
 */

/** Short identifier used in localStorage keys, URLs, and log tags. */
export const PLATFORM_SLUG =
    process.env.NEXT_PUBLIC_PLATFORM_SLUG ?? "vela";

/** Human-readable display name used in page titles and UI copy. */
export const PLATFORM_NAME =
    process.env.NEXT_PUBLIC_PLATFORM_NAME ?? "Vela";
