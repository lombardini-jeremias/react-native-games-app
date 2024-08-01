import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Scores } from "./Scores";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-grey-500/10 rounded-xl p4">
        <View className="flex-row gap-4" key={game.slug}>
          <Image
            className=""
            source={{ uri: game.image }}
            style={styles.image}
          />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Scores score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>
              {game.description.slice(0, 200)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
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
