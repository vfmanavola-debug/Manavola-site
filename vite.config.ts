import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import javascriptObfuscator from "vite-plugin-javascript-obfuscator";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    javascriptObfuscator({
      options: {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        debugProtection: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: "hexadecimal",
        renameGlobals: false,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: ["base64"],
        stringArrayThreshold: 0.85,
        transformObjectKeys: true,
        unicodeEscapeSequence: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
