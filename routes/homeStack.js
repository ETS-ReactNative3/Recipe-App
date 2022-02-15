import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import AllRecipes from "../screens/allRecipes";
import RecipeDetails from "../screens/recipeDetail";
import About from "../screens/about";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllRecipes" component={AllRecipes} />
        <Stack.Screen name="Recipe Details" component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
