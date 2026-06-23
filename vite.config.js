import { defineConfig } from "vite";

export default defineConfig({
  // 京 ME 网页应用属于嵌入式部署，使用相对资源路径避免发布目录变化导致白屏。
  // Source: https://vite.dev/config/shared-options.html#base
  base: "./",
  build: {
    target: "es2018",
  },
});
