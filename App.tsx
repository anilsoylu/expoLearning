import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, CommonActions } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, View, TouchableOpacity, ScrollView } from "react-native"
import HomeView from "./View/HomeView"
import { ImagePicker } from "./View/ImagePicker"

const App = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  const BottomTabBar = ({ navigation, state }) => {
    const onSelectTab = (index) => {
      navigation.dispatch({
        ...CommonActions.navigate(state.routes[index].name),
        target: state.key,
      })
    }

    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 15,
          paddingBottom: 35,
        }}
      >
        {state.routes.map((route, index) => (
          <TouchableOpacity key={route.key} onPress={() => onSelectTab(index)}>
            <Text>{route.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="TodoApp" component={HomeView} />
        <Tab.Screen name="Image Picker" component={ImagePicker} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
