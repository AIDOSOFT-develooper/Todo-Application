const root = require("../routes/root");
const todosRouter = require("../routes/todos");
const express = require("express");

const router = express.Router();

router.use("/", root);
router.use("/todos", todosRouter);

module.exports = router;
