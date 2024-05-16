import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    built: {
        minify: "terser",
    },
});