// configuracion
// quita las clases  que no se usa del css en modo produccion
module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production"
      ? [
        require("@fullhuman/postcss-purgecss")({
          content: [
            "./src/**/*.{js,jsx}"
            //   "./components/**/*.{ts,tsx}",
            //   "./plugins/**/*.{ts,tsx}",
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      ]
      : []),
    require("postcss-preset-env")
    // require("autoprefixer")
  ]
}
