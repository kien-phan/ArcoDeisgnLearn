/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                HEADERHEIGHT: "60px",
                STANDARDMARGINANDPADDING: 8,
                BREADCRUMBMARGINY: "8px",
                STANDARDCONTAINERPADDINGX: "8px",
                STANDARDCONTAINERPADDINGY: "8px",
                TABLEMARGINTOP: "8px",
                SIDERHEIGHT: "calc(100vh - 60px)",
                SIDERCOLLAPSEWIDTH: 54,
                SIDERNORMALWIDTH: 280,
                CONTENTPADDINGSTARTCOLLAPSE: "62px",
                CONTENTPADDINGSTART: "288px",
            },
            colors: {
                CGREEN: "green",
                CRED: "red",
                CBLUE: "#6981ff",
                ARCOBLUE1: "rgb(var(--arcoblue-1))",
            },
            backgroundImage: {
                USERINFOBACKGROUND:
                    "url('https://lf-cdn-tos.bytescm.com/obj/static/arcodesign/proPreview/static/media/header-banner.fcb7b1aa6ce12d210c85.png')",
                GRADIENTBLUE: "linear-gradient(180deg, #f2f9fe, #e6f4fe)",
                GRADIENTDARKBLUE: "linear-gradient(180deg, #284991, #122b62)",
                GRADIENTGREEN: "linear-gradient(180deg, #f5fef2, #e6feee)",
                GRADIENTDARKGREEN: "linear-gradient(180deg, #3d492e, #263827);",
                GRADIENTLIGHTPURPLE:
                    "linear-gradient(180deg, #f7f7ff, #ececff)",
                GRADIENTDARKPURPLE: "linear-gradient(180deg, #312565, #201936)",
            },
        },

        screens: {
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
    },
    plugins: [],
};
