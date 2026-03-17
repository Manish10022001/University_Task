import { programs } from "@/data/programs";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width } = Dimensions.get("window");

export default function ProgramDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const program = programs.find((p) => p.id === Number(id));
  const [modalVisible, setModalVisible] = useState(false);
  if (!program) {
    return (
      <View style={styles.notFound}>
        <Text>Study Program not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: program.university,
          headerTransparent: true,
          headerTintColor: "#c187f4",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image
            source={program.image}
            style={styles.Imdage}
            resizeMode="cover"
          />

          <View style={styles.overlay} />
          <View style={styles.text}>
            <Text style={styles.country}>{program.country}</Text>
            <Text style={styles.university}>{program.university}</Text>
          </View>
        </View>
        {/* stats */}
        <View style={styles.statsGrid}>
          {(
            [
              ["Duration", program.duration],
              ["Language", program.language],
            ] as [string, string][]
          ).map(([label, value]) => (
            <View key={label} style={styles.statCard}>
              <Text style={styles.statLabel}>{label}</Text>
              <Text style={styles.statValue}>{value}</Text>
            </View>
          ))}
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ABOUT</Text>
          <Text style={styles.body}>{program.description}</Text>
        </View>

        {/* Requirements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>REQUIREMENTS</Text>
          {Object.entries(program.requirements).map(([key, val]) => (
            <View key={key} style={styles.reqRow}>
              <Text style={styles.reqKey}>{key}</Text>
              <Text style={styles.reqVal}>{val}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.applyText}>Apply Now</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modalCard}>
              {/* Icon */}
              <View style={styles.iconCircle}>
                <Text style={styles.iconText}>✓</Text>
              </View>

              {/* Title */}
              <Text style={styles.modalTitle}>Thank You for Applying!</Text>

              {/* Message */}
              <Text style={styles.modalMessage}>
                Your application to{" "}
                <Text style={styles.modalHighlight}>{program.university}</Text>{" "}
                has been received. Our admissions team will review your profile
                and contact you shortly with the next steps.
              </Text>

              {/* Divider */}
              <View style={styles.divider} />

              {/* Close button */}
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeBtnText}>Got it</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroContainer: {
    width: width,
    height: 280,
  },
  Imdage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.42)",
  },
  text: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  country: {
    fontSize: 13,
    color: "rgba(255,255,255,0.75)",
    marginBottom: 4,
  },
  university: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 28,
  },
  statsGrid: {
    flexDirection: "row",
    padding: 12,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  statLabel: {
    fontSize: 11,
    color: "#aaa",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
  section: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginBottom: 10,
    borderRadius: 14,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 11,
    color: "#aaa",
    fontWeight: "600",
    letterSpacing: 0.6,
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
  reqRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F7",
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
  },
  reqKey: {
    fontSize: 13,
    color: "#888",
  },
  reqVal: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
  },
  applyBtn: {
    backgroundColor: "#c187f4",
    margin: 16,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#c187f4",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  applyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  modalCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 28,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#f3e8fd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  iconText: {
    fontSize: 28,
    color: "#c187f4",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
    textAlign: "center",
  },
  modalHighlight: {
    fontWeight: "600",
    color: "#c187f4",
  },
  divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#E5E5E5",
    marginVertical: 20,
  },
  closeBtn: {
    backgroundColor: "#c187f4",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  closeBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
