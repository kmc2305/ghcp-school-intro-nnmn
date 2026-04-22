import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kmc2305.github.io",
  base: "/ghcp-school-intro-nnmn",
  output: "static",
  integrations: [tailwind()],
});
