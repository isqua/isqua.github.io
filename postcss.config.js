const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./hugo_stats.json"],
    defaultExtractor: (content) => {
        const els = JSON.parse(content).htmlElements;
        return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
    },
    safelist: [],
    keyframes: true,
    variables: true,
});

const cssnano = require('cssnano')({
    preset: 'default',
});

module.exports = {
    plugins: [
        ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss, cssnano] : []),
    ],
};
