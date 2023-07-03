import React, { useEffect } from "react"
import { Card, List, IconButton } from "react-native-paper"
import { useTodoStore } from "../../stores/todoStore"
import { ScrollView } from "react-native"
import { ActivityIndicator, MD2Colors } from "react-native-paper"

type Props = {}

export const TodoList = (props: Props) => {
  const { todos, fetchTodos, deleteTodo, checkTodo } = useTodoStore()

  // loading

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
    // loading
    <ScrollView>
      {todos.length === 0 ? (
        <ActivityIndicator
          animating={true}
          color={MD2Colors.pinkA200}
          size="large"
        />
      ) : (
        todos.map((todo) => (
          <Card
            key={todo.id}
            style={{
              backgroundColor: "transparent",
              borderRadius: 0,
              padding: 0,
              marginBottom: 25,
            }}
          >
            <List.Item
              title={todo.title}
              onPress={() => handleCheckTodo}
              left={() => (
                <IconButton
                  icon={todo.completed ? "check-circle" : "circle-outline"}
                  onPress={() => handleCheckTodo}
                />
              )}
              right={() => (
                <IconButton icon="delete" onPress={() => handleDeleteTodo} />
              )}
            />
          </Card>
        ))
      )}
    </ScrollView>
  )
}
