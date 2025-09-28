const router = require("../routes/index");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use((request, response, next) => {
    next();
});

app.use(router);

app.listen(PORT, () => {
    console.log(`App was listened on ${PORT} port`);
});
