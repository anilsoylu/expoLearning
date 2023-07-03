import axios from "axios"
import { create } from "zustand"

type Todo = {
  id: number
  title: string
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
  fetchTodos: async () => {
    try {
      const response = await axios.get(
        "https://github.com/anilsoylu/expoLearning/blob/main/db.json"
      )
      const todosFromDB: Todo[] = response.data
      set({ todos: todosFromDB })
    } catch (error) {
      console.error("Error fetching todos:", error)
    }
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
