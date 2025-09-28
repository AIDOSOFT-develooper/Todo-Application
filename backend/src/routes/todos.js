const express = require("express");
const {
    getTodos,
    getSingleTodo,
    postTodo,
    deleteTodo,
    changeTodo,
} = require("../controllers/todosControllers");
const router = express.Router();

router
    .get("/", getTodos)
    .get("/:todoId", getSingleTodo)
    .post("/:todoId", postTodo)
    .delete("/:todoId", deleteTodo)
    .put("/:todoId", changeTodo);

module.exports = router;
