import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,
          elevation: 21,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: ({ focused }) => (focused ? <Text style={{marginBottom: 10}}>Profile</Text>: null),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: ({ focused }) => (focused ? <Text style={{marginBottom: 10}}>Home</Text> : null),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="grid"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: ({ focused }) => (focused ? <Text style={{marginBottom: 10}}>Category</Text> : null),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
