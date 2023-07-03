import React from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"
import { Card, Provider as PaperProvider } from "react-native-paper"
import { ScrollView } from "react-native"

const App = () => {
  return (
    <ScrollView>
      <PaperProvider>
        <Card
          style={{
            width: "100%",
            minHeight: "100%",
            flex: 1,
            justifyContent: "space-between",
            alignSelf: "center",
            paddingTop: 50,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "none",
          }}
        >
          <TodoForm />
          <TodoList />
        </Card>
      </PaperProvider>
    </ScrollView>
  )
}

export default App
