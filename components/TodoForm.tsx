import React, { useState } from "react"
import { useTodoStore } from "../stores/todoStore"
import { Button, TextInput, View } from "react-native"

type Props = {}

export const TodoForm = () => {
  const [text, setText] = useState("")
  const { addTodo } = useTodoStore()

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      const newTodo = { id: Date.now(), text, completed: false }
      addTodo(newTodo)
      setText("")
    }
  }
  return (
    <View>
      <TextInput
        style={{ flex: 1, marginRight: 10 }}
        placeholder="Add Todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  )
}
