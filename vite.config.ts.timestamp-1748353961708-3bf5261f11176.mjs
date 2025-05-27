// vite.config.ts
import { defineConfig } from "file:///C:/Users/Justin%20Clyde/Documents/GitHub/pi100-tripadvisor/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///C:/Users/Justin%20Clyde/Documents/GitHub/pi100-tripadvisor/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [svelte()],
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.jpeg"],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $assets: path.resolve("./src/assets")
      // Optional for direct access to assets
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKdXN0aW4gQ2x5ZGVcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxwaTEwMC10cmlwYWR2aXNvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSnVzdGluIENseWRlXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxccGkxMDAtdHJpcGFkdmlzb3JcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0p1c3RpbiUyMENseWRlL0RvY3VtZW50cy9HaXRIdWIvcGkxMDAtdHJpcGFkdmlzb3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbc3ZlbHRlKCldLFxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouSlBHJywgJyoqLyouanBnJywgJyoqLyoucG5nJywgJyoqLyouanBlZyddLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICRsaWI6IHBhdGgucmVzb2x2ZSgnLi9zcmMvbGliJyksXG4gICAgICAkYXNzZXRzOiBwYXRoLnJlc29sdmUoJy4vc3JjL2Fzc2V0cycpLCAvLyBPcHRpb25hbCBmb3IgZGlyZWN0IGFjY2VzcyB0byBhc3NldHNcbiAgICB9LFxuICB9LFxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXdXLFNBQVMsb0JBQW9CO0FBQ3JZLFNBQVMsY0FBYztBQUN2QixPQUFPLFVBQVU7QUFFakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUFBLEVBQ2xCLGVBQWUsQ0FBQyxZQUFZLFlBQVksWUFBWSxXQUFXO0FBQUEsRUFDL0QsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxLQUFLLFFBQVEsV0FBVztBQUFBLE1BQzlCLFNBQVMsS0FBSyxRQUFRLGNBQWM7QUFBQTtBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
