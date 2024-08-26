import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DoneScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.checkmarkContainer}>
          <Icon
            name="check-circle"
            size={80}
            color="green"
            style={styles.checkmark}
          />
        </View>

        <Text style={styles.headerText}>You’re all done!</Text>
        <Text style={styles.subHeaderText}>
          Hang tight! We are currently reviewing your account and will follow up
          with you in 2-3 business days. In the meantime, you can set up your
          inventory.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {navigation.navigate("Login")
          console.log("Got it button pressed");
        }}
      >
        <Text style={styles.buttonText}>Got it!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmarkContainer: {
    marginBottom: 32,
  },
  checkmark: {
    width: 80,
    height: 80,
  },
  headerText: {
    fontSize: 28,
    fontFamily: "BeVietnam-Bold",
    color: "#4A3627",
    marginBottom: 24,
    textAlign: "center",
  },
  subHeaderText: {
    fontSize: 12,
    fontFamily: "BeVietnam-Regular",
    color: "#7E7E7E",
    textAlign: "center",
    marginBottom: 50,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#D5715B",
    paddingVertical: 15,
    paddingHorizontal: 110,
    borderRadius: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "BeVietnam-Regular",
    fontWeight: "600",
  },
});

export default DoneScreen;
