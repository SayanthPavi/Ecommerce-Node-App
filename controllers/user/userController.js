const pageNotFound = async (req, res) => {
  try {
    res.render("pageNotFount-404");
  } catch (error) {
    res.redirect("/pageNotFound");
  }
};

const loadHomepage = async (req, res) => {
  try {
    return res.render("home");
  } catch (error) {
    console.log("Home Page Not Found");
    res.status(500).send("Server Error");
  }
};

module.exports = { loadHomepage, pageNotFound };
