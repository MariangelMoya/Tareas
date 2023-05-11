/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue\", ./index.html\"}"],
    theme: {
        extend: {},
    },
    plugins: [],
}

module.exports = {
    //...
    plugins: [require("daisyui")],
}