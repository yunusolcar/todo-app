exports.getIndexPage = (req, res) => {
    res.status(200).render("index", {
        page_name: "Index",
    });
};
