import React, { useEffect } from "react"
import { Card, List, IconButton, ActivityIndicator } from "react-native-paper"
import { useTodoStore } from "../../stores/todoStore"
import { ScrollView } from "react-native"

type Props = {}

export const TodoList = (props: Props) => {
  const { todos, fetchTodos, deleteTodo, checkTodo } = useTodoStore()

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id)
  }

  const handleCheckTodo = (id: string) => {
    checkTodo(id)
  }

  return (
    <ScrollView>
      {todos.length === 0 ? (
        <ActivityIndicator animating={true} color="pink" size="large" />
      ) : (
        todos.map((todo, index) => (
          <Card
            key={todo.id ? String(todo.id) : `todo_${index}`} // Benzersiz anahtar propu
            style={{
              backgroundColor: "transparent",
              borderRadius: 0,
              padding: 0,
              marginBottom: 25,
            }}
          >
            <List.Item
              title={todo.title}
              onPress={() => handleCheckTodo(todo.id)}
              left={() => (
                <IconButton
                  icon={todo.completed ? "check-circle" : "circle-outline"}
                  onPress={() => handleCheckTodo(todo.id)}
                />
              )}
              right={() => (
                <IconButton
                  icon="delete"
                  onPress={() => handleDeleteTodo(todo.id)}
                />
              )}
            />
          </Card>
        ))
      )}
    </ScrollView>
  )
}
