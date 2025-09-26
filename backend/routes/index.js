const root = require("./root");
const todosRouter = require("./todos");
const express = require("express");

const router = express.Router();

router.use("/", root);
router.use("/todos", todosRouter);

module.exports = router;
