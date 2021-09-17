module.exports = (ctx) => {
  return {
    plugins: {
      autoprefixer: {
        ...ctx.options.autoprefixer,
        flexbox: "no-2009",
        grid: "no-2009",
        gridArea: "no-2009",
        gridTemplate: "no-2009",
      },
      "postcss-nested": {},
    },
  };
};
