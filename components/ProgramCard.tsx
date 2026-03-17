import { Program } from "@/data/programs";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = { program: Program };

export default function ProgramCard({ program }: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.75}
      // onPress={() => router.push(/program/${program.id})}
      onPress={() =>
        router.push({
          pathname: "/program/[id]",
          params: { id: program.id.toString() },
        })
      }
    >
      {/* Image */}
      <Image source={program.image} style={styles.image} resizeMode="cover" />
      {/* University info */}
      <View style={styles.info}>
        <View style={styles.left}>
          <Text style={styles.university}>{program.university}</Text>
          <Text style={styles.country}>{program.country}</Text>
        </View>

        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{program.duration}</Text>
        </View>
      </View>
      <Text style={styles.shortDescription} numberOfLines={2}>
        {program.shortDescription}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: "#E8E8E8",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    gap: 10,
  },
  left: {
    flex: 1,
  },
  university: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 3,
  },
  country: {
    fontSize: 13,
    color: "#888",
  },
  durationBadge: {
    backgroundColor: "#E6F1FB",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    flexShrink: 0,
  },
  durationText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#185FA5",
  },
  shortDescription: {
    fontSize: 13,
    color: "#555",
    lineHeight: 19,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
});
