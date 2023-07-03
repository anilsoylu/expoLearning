import React from "react"
import { Card, Text } from "react-native-paper"
import { TodoForm } from "../ToDo/TodoForm"
import { TodoList } from "../ToDo/TodoList"

type Props = {}

export const Home = (props: Props) => {
  return (
    <Card
      style={{
        width: "100%",
        minHeight: "100%",
        flex: 1,
        justifyContent: "space-between",
        alignSelf: "center",
        padding: 15,
        backgroundColor: "none",
      }}
    >
      <TodoForm />
      <TodoList />
    </Card>
  )
}
