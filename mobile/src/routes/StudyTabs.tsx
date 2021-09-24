import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Favorites from "../pages/Favorites";
import TeacherList from "../pages/TeacherList";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
        },
        tabBarInactiveBackgroundColor: "#fafafc",
        tabBarActiveBackgroundColor: "#ebebf5",
        tabBarInactiveTintColor: "#c1bccc",
        tabBarActiveTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="easel-outline"
                color={focused ? "#8257E5" : color}
                size={size}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="heart-outline"
                color={focused ? "#8257E5" : color}
                size={size}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
