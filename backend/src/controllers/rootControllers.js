const getHomePage = (request, response) => {
    response.send("You're on the HomePage");
};

module.exports = {
    getHomePage,
};
