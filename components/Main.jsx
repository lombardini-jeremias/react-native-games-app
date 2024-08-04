import { useState, useEffect } from "react";
import { getLatestGames } from "../library/metacritic";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View
      className="bg-black"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <FlatList
        data={games}
        keyExtractor={(game) => game.slug}
        renderItem={({ item }) => <GameCard game={item} />}
      />
    </View>
  );
}
