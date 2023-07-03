import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, TouchableOpacity, View } from "react-native"
import HomeView from "./View/HomeView"
import { ImagePicker } from "./View/ImagePicker"

const App = () => {
  const Tab = createBottomTabNavigator()

  const BottomTabBar = ({ navigation, state }) => {
    const onSelectTab = (index) => {
      navigation.navigate(state.routeNames[index])
    }

    return (
      <View
        style={{
          display: "flex",
          padding: 25,
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: 35,
        }}
      >
        {state.routeNames.map((routeName, index) => (
          <TouchableOpacity key={index} onPress={() => onSelectTab(index)}>
            <Text>{routeName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="TodoApp">{() => <HomeView />}</Tab.Screen>
        <Tab.Screen name="Image Picker">{() => <ImagePicker />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
