import { createClient as createOccClient } from "deco-sites/std/commerce/occ/client.ts";
// import { createClient as createShopifyClient } from "deco-sites/std/commerce/shopify/client.ts";
import { createClient as createVTEXClient } from "deco-sites/std/commerce/vtex/client.ts";


export const vtexData = {
  account: "lojasafubra",
  defaultLocale: "pt-BR",
  defaultSalesChannel: "1",
}

export const vtex = createVTEXClient(vtexData);

// export const shopify = createShopifyClient({
//   storeName: "gimenesdevstore",
//   storefrontAccessToken: "27c1ac16fe30a0fb6c5d634eeb63bf81",
// });

export const occ = createOccClient({
  baseUrl: "https://deco.cx.teste/",
});
