import { Image, StyleSheet, Text, View } from "react-native";
import { Scores } from "./Scores";

export function GameCard({ game }) {
  return (
    <View
      className="flex-row bg-black-700 p-4 rounded-xl gap-4 mb-10"
      key={game.slug}
    >
      <Image className="" source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        <Scores score={game.score} maxScore={100} />
        <Text style={styles.description}>
          {game.description.slice(0, 200)}...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  image: {
    width: 107,
    height: 150,
    borderRadius: 11,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow",
  },
  description: {
    fontSize: 16,
    color: "white",
  },
});
