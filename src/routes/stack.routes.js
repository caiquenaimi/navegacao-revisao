import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Categorie from "../screens/Categorie";	
const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Categorie" component={Categorie} />
      </Stack.Navigator>
  );
};

export default StackRoutes;
