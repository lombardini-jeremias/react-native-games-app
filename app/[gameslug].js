import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalles del Juego {gameslug}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver
        </Link>
      </View>
    </View>
  );
}
