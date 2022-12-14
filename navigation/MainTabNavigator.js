import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplement from "../components/NotImpelemtComp";
import ChatsScreen from "../screens/ChatsScreens";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerStyle: { backgroundColor: "whitesmoke" },
      }}>
      <Tab.Screen
        name="Status"
        component={NotImplement}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="logo-whatsapp" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Calls"
        component={NotImplement}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="call-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Camera"
        component={NotImplement}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="camera-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="ios-chatbubbles-sharp"
                size={size}
                color={color}
              />
            );
          },
          headerRight: () => (
            <Entypo
              name="new-message"
              size={18}
              color="royalblue"
              style={{ marginRight: 15 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={NotImplement}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="settings-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
