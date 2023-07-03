import * as React from "react"
import { AppRegistry } from "react-native"
import { Provider as PaperProvider } from "react-native-paper"
import appJson from "./app.json"
import App from "./App"

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appJson.expo.name, () => Main)
