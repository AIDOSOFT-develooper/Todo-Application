const router = require("./routes/index");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use((request, response, next) => {
    const todoData = request.body;
    console.log(todoData);
    next();
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`App was listened on ${process.env.PORT} port`);
});
