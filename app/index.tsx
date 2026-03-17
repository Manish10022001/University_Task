import { programs } from "@/data/programs";
import { Stack } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "University" }} />

      <View>
        <Text style={styles.title}>Universities</Text>
        <Text style={styles.subtitle}>Programs Worldwide</Text>
      </View>

      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.university}</Text>
            <Text>{item.country}</Text>
            <Text>Duration: {item.duration}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F%F7",
  },
  header: {
    padding: 20,
    paddingBottom: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0",
  },
  image: {
    width: "100%",
    height: 160,
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
  },
  subtitle: { fontSize: 13, color: "#888", marginTop: 2 },
  list: { paddingTop: 12, paddingBottom: 24 },
});
