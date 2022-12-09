import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons,Feather,AntDesign,MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Detalle from "../screens/Detalles";
import Categories from "../screens/Category";
import Add from "../screens/Add";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detalle" component={Detalle} />
      <Tab.Screen name="MiddleIcon" component={Add} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.bottomBar}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? "#0D70C3" : "#BBBBBB";
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress()}
            testID={options.tabBarTestID}
            accessibilityRole="button"
          >
            {index === 0 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <AntDesign name="home" size={26} color={color} />
                ) : (
                  <AntDesign name="home" size={24} color={color} />
                )}
              </View>
            )}
            {index === 1 && (
              <View style={styles.icon}>
                {isFocused ? (
                 <MaterialIcons name="description" size={26} color={color} />
                ) : (
                  <MaterialIcons name="description" size={26} color={color} />
                )}
              </View>
            )}
            {index === 2 && (
              <View style={styles.middleicon}>
                {isFocused ? (
                  <Feather name="plus" size={24} color="white" />
                ) : (
                  <Feather name="plus" size={24} color="white" />
                )}
              </View>
            )}
            {index === 3 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <MaterialIcons name="category" size={24} color={color} />
                ) : (
                  <MaterialIcons name="category" size={24} color={color} />
                )}
              </View>
            )}    
            {index === 4 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons name="people" size={24} color={color} />
                ) : (
                  <Ionicons name="people" size={24} color={color} />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {},
  bottomBar: {
    height: 80,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  middleicon: {
    bottom: 40,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#0D70C3",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabs;
