import { defineRule } from "../scripts/defineRule";

export default defineRule({
  condition: {
    urlFilter: "||www.bing.com/*",
    resourceTypes: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  id: 2,
  priority: 1,
});
