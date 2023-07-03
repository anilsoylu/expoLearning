import React, { useState } from "react"
import { useTodoStore } from "../stores/todoStore"
import { Card, TextInput, Button } from "react-native-paper"
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
    <Card
      style={{
        backgroundColor: "transparent",
        borderRadius: 0,
        padding: 0,
        marginBottom: 25,
      }}
    >
      <Card.Title titleVariant="displayMedium" title="Add Todo" />
      <TextInput
        style={{ marginTop: 15, marginBottom: 15 }}
        placeholder="Add Todo"
        value={text}
        onChangeText={setText}
      />
      <Button
        mode="contained"
        onPress={handleAddTodo}
        style={{
          borderRadius: 0,
          backgroundColor: "blue",
        }}
      >
        Add Todo
      </Button>
    </Card>
  )
}
