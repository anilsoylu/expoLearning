import axios from "axios"
import { create } from "zustand"

type Todo = {
  id: string
  title: string
  completed: boolean
  currentDate: Date
  updateDate: Date
}

const localIP = "http://localhost:3000"

type TodoStore = {
  todos: Todo[]
  fetchTodos: () => void
  addTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
  checkTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: async () => {
    try {
      const response = await axios.get<Todo[]>(`${localIP}/todos`)
      set({ todos: response.data })
    } catch (error) {
      console.error("Error fetching todos:", error)
    }
  },
  addTodo: async (todo: Todo) => {
    try {
      const response = await axios.post<Todo>(`${localIP}/todos`, todo)
      const newTodo = {
        ...todo,
        id: response.data.id,
        currentDate: new Date(response.data.currentDate),
        updateDate: new Date(response.data.updateDate),
      }
      set((state) => ({
        todos: [...state.todos, newTodo],
      }))
    } catch (error) {
      console.error("Error adding todo:", error)
    }
  },
  checkTodo: async (id: string) => {
    try {
      await axios.put(`${localIP}/todos/${id}/check`)
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
                updateDate: new Date(),
              }
            : todo
        ),
      }))
    } catch (error) {
      console.error("Error checking todo:", error)
    }
  },
  deleteTodo: async (id: string) => {
    try {
      await axios.delete(`${localIP}/todos/${id}`)
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }))
    } catch (error) {
      console.error("Error deleting todo:", error)
    }
  },
}))
