import { create } from "zustand"

type Todo = {
  id: number
  text: string
  completed: boolean
}

type TodoStore = {
  todos: Todo[]
  fetchTodos: () => void
  addTodo: (todo: Todo) => void
  deleteTodo: (id: number) => void
  checkTodo: (id: number) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: () => {
    // Fake JSON veritabanından verileri al
    const todosFromDB: Todo[] = [
      {
        id: 1,
        text: "Learn React Native",
        completed: false,
      },
      {
        id: 2,
        text: "Learn TypeScript",
        completed: false,
      },
      {
        id: 3,
        text: "Learn Zustand",
        completed: false,
      },
    ]

    set({ todos: todosFromDB })
  },
  addTodo: (todo: Todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }))
  },
  checkTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo
      }),
    }))
  },
  deleteTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }))
  },
}))
