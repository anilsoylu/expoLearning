import React from "react"
import { View } from "react-native"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"

const App = () => {
  return (
    <View>
      <TodoList />
      <TodoForm />
    </View>
  )
}

export default App
