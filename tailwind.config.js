export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
 // tailwind.config.js
theme: {
  extend: {
    keyframes: {
      dropIn: {
        "0%":   { transform: "scale(0.2) translateY(-8px)", opacity: "0" },
        "60%":  { opacity: "1" },
        "100%": { transform: "scale(1) translateY(54px)", opacity: "1" },
      },
      dropOut: {
        "0%":   { transform: "scale(1) translateY(54px)", opacity: "1" },
        "40%":  { opacity: "1" },
        "100%": { transform: "scale(0.1) translateY(0)", opacity: "0" },
      },
    },
    animation: {
      "drop-in":  "dropIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      "drop-out": "dropOut 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards",
    },
  },
}
}