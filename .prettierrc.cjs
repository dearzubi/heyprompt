// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs
const prettierConfig = require('@imaginary-cloud/prettier-config');

/** @type {import("prettier").Options} */
module.exports = {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};