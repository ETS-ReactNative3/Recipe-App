import react from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";
import dummyData from "../constants/dummyData";
import RecipeCard from "../components/RecipeCard";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("RecipeDetails");
  };

  const renderRecipe = ({ item }) => (
    <TouchableOpacity>
      <RecipeCard
        recipeItem={item}
        onPress={() => navigation.navigate("Recipe Details", { recipe: item })}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={dummyData.data}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipe}
      />
    </SafeAreaView>
  );
}
