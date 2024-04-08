/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                HEADERHEIGHT: "60px",
                BREADCRUMBHEIGHT: "48px",
                STANDARDCONTAINERPADDINGX: "16px",
                STANDARDCONTAINERPADDINGY: "8px",
                TABLEFILTERHEIGHT: "53px",
                TABLEMARGINTOP: "16px",
                TABLEHEAD: "58px",
                TABLEPAGINATION: "44px",
                SIDERHEIGHT: "calc(100vh - 60px)",
                SIDERCOLLAPSEWIDTH: 54,
                CONTENTPADDINGSTARTCOLLAPSE: "64px",
                SIDERNORMALWIDTH: 280,
                CONTENTPADDINGSTART: "290px",
            },
        },
    },
    plugins: [],
};
