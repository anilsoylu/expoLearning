import create from "zustand"

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
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: () => {
    const todos: Todo[] = [
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

    set({ todos })
  },
  addTodo: (todo: Todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }))
  },
  deleteTodo: (id: number) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }))
  },
}))
