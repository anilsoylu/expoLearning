import React, { useEffect } from "react"
import { Card, List, IconButton } from "react-native-paper"
import { useTodoStore } from "../../stores/todoStore"
import { ScrollView } from "react-native"

type Props = {}

export const TodoList = (props: Props) => {
  const { todos, fetchTodos, deleteTodo, checkTodo } = useTodoStore()

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
  }

  const handleCheckTodo = (id: number) => {
    checkTodo(id)
  }

  return (
    <ScrollView>
      <Card
        style={{
          backgroundColor: "none",
        }}
      >
        <Card.Title title="Todo list" titleVariant="headlineMedium" />
        <Card.Content>
          <List.Section>
            {todos.map((todo) => (
              <List.Item
                key={todo.id}
                title={todo.text}
                left={(props) => (
                  <IconButton
                    {...props}
                    icon={todo.completed ? "check" : "cancel"}
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
            ))}
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}
