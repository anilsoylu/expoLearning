import React, { useEffect } from "react"
import { useTodoStore } from "../stores/todoStore"
import { Button, FlatList, Text, View } from "react-native"

type Props = {}

export const TodoList = (props: Props) => {
  const { todos, fetchTodos, deleteTodo } = useTodoStore()

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
  }

  return (
    <View>
      <Text>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
          </View>
        )}
      />
    </View>
  )
}
