import { Image, StyleSheet, Text, View } from 'react-native';

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}> {game.title} </Text>
      <Text style={styles.description}> {game.description} </Text>
      <Text style={styles.score}> {game.score} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
    marginTop: 10,
    marginBottom: 10,
  },
});
