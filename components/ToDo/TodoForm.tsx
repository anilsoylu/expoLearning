import React, { useState } from "react"
import { Card, TextInput, Button } from "react-native-paper"
import { useTodoStore } from "../../stores/todoStore"
type Props = {}

export const TodoForm = () => {
  const [title, setTitle] = useState("")
  const { addTodo } = useTodoStore()

  const handleAddTodo = () => {
    if (title.trim() !== "") {
      const newTodo = { id: Date.now(), title, completed: false }
      addTodo(newTodo)
      setTitle("")
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
        value={title}
        onChangeText={setTitle}
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
