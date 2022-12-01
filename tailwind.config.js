/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                summary: "url('/wave-GS.png')",
                footer: "url('/lake-gs.png')",
            },
            minWidth: {
                14: '3.5rem',
            },
        },
    },
    plugins: [],
}
