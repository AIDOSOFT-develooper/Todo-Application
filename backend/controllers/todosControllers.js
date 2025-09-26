const todos = [
    { id: 1, todo: "Learn Node", isCompleted: false },
    { id: 2, todo: "Learn React", isCompleted: true },
];

const getTodos = (request, response) => {
    response.json(todos);
};

const getSingleTodo = (request, response) => {
    response.send("You got only one todo");
};

const postTodo = (request, response) => {
    const todo = request.body;
    console.log("Новый todo:", todo);
    todos.push(todo);
    response.status(201).json(todo);
};

const deleteTodo = (request, response) => {
    response.send("You deleted your todo");
};

module.exports = {
    getTodos,
    getSingleTodo,
    postTodo,
    deleteTodo,
};
