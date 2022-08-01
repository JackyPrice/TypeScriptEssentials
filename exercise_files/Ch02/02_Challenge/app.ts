interface Todo {
    id: number,
    title: string,
    status: StatusType,
    completedOn?: Date
}

enum StatusType {
    Done = "done",
    InProgress = "in-progress",
    Todo = "Todo",
}

const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: StatusType.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: StatusType.InProgress },
    { id: 3, title: "Write the best app in the world", status: StatusType.Todo },
]

function addTodoItem(todo: string) {
    const id: number = getNextId(todoItems)

    const newTodo:Todo = {
        id,
        title: todo,
        status: StatusType.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

// function getNextId<T extends Todo>(items: T[]): number {
function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))