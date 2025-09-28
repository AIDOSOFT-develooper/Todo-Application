const todos = [
    { id: 1, todo: "Learn Node", isCompleted: false },
    { id: 2, todo: "Learn React", isCompleted: true },
];

const getTodos = (request, response) => {
    response.json(todos);
};

const getSingleTodo = (request, response) => {
    const { todoId } = request.params;
    const id = parseInt(todoId);
    const todo = todos.find((todo) => todo.id === id);
    response.json(todo);
};

const postTodo = (request, response) => {
    const todo = request.body;
    todos.push(todo);
    response.status(201).json(todo);
};

const deleteTodo = (request, response) => {
    const { todoId } = request.params;
    const id = parseInt(todoId);

    const index = todos.findIndex((todo) => todo.id === id);

    todos.splice(index, 1);
    response.send("Todo was deleted");
};

const changeTodo = (request, response) => {
    const { todoId } = request.params;
    const { todo } = request.body;
    const id = parseInt(todoId);
    const found = todos.find((todo) => todo.id === id);
    const changed = (found.todo = todo);
    response.json(changed);
};

module.exports = {
    getTodos,
    getSingleTodo,
    postTodo,
    deleteTodo,
    changeTodo,
};
