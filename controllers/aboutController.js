exports.getAbout = (req, res) => {
  res.render("about", { message: "hi there!", footerMsg: "yo!" });
};
