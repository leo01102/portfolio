import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: { outDir: "dist" },
  plugins: [mdx(), react(), tsconfigPaths()],
});
