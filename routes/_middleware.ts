import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 633,
  site: "afubra",
  domains: ["deco-sites-afubra.deno.dev"],
});