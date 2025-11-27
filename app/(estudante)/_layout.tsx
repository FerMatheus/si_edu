import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 4,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 80,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          position: "absolute",
        },
        tabBarActiveTintColor: "#4361EE",
        tabBarInactiveTintColor: "#c4c4c4",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="materiais"
        options={{
          title: "Materiais",
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="simulados"
        options={{
          title: "Simulados",
          tabBarIcon: ({ color }) => (
            <Ionicons name="clipboard" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notas"
        options={{
          title: "Notas",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bar-chart-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen name="quiz" options={{ href: null }} />
    </Tabs>
  );
}
