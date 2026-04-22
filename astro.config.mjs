import { defineConfig } from "astro/config";

const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
const hasRepoContext = Boolean(owner && repo);

export default defineConfig({
  output: "static",
  site: hasRepoContext ? `https://${owner}.github.io` : "https://example.github.io",
  base: hasRepoContext ? `/${repo}/` : "/",
  build: {
    format: "directory"
  }
});