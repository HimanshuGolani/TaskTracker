import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#7cb9e8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <>
                <FontAwesome5 name="tasks" size={24} color="#7cb9e8" />
              </>
            ) : (
              <>
                <FontAwesome5 name="tasks" size={24} color="black" />
              </>
            ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "Calendar",
          tabBarLabelStyle: { color: "#7cb9e8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <>
                <AntDesign name="calendar" size={24} color="#7cb9e8" />
              </>
            ) : (
              <>
                <AntDesign name="calendar" size={24} color="black" />
              </>
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "#7cb9e8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <>
                <AntDesign name="profile" size={24} color="#7cb9e8" />
              </>
            ) : (
              <>
                <AntDesign name="profile" size={24} color="black" />
              </>
            ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
