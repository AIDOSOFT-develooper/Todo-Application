const getHomePage = (request, response) => {
    response.send("Homepage");
};

module.exports = {
    getHomePage,
};
