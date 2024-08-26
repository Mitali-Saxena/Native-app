import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendCode = async () => {
    try {
      const payload = {
        mobile: phoneNumber,
      };

      const response = await fetch(
        "https://sowlab.com/assignment/#/Forgot%20password/post_user_forgot_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      console.log("Raw response:", response);

      const contentType = response.headers.get("Content-Type");

      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log("Parsed response data:", data);

      if (response.ok) {
        Alert.alert("Code Sent", `A code has been sent to ${phoneNumber}`);

        navigation.navigate("VerifyOtp", { phoneNumber });
      } else {
        Alert.alert(
          "Failed",
          data.message || "Failed to send code. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style= {styles.title}>FarmerEats</Text>
      <Text style={styles.headerText}>Forgot Password?</Text>
      <Text style={styles.subHeaderText}>
        Remember your password?{" "}
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.loginText}
        >
          Login
        </Text>
      </Text>

      <View style={styles.inputWithIconContainer}>
        <Image
          source={require("../assets/images/Phone.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#C7C7CD"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontFamily: "BeVietnam-Regular",
    color: "#000",
    textAlign: "flex-start",
    marginBottom: 50,
  },
  headerText: {
    fontFamily: "BeVietnam-Bold",
    fontSize: 32,
    color: "#000",
    marginBottom: 24,
  },
  subHeaderText: {
    fontFamily: "BeVietnam-Regular",
    fontSize: 14,
    color: "#6E6E6E",
    marginBottom: 50,
  },
  loginText: {
    color: "#D5715B",
    fontFamily: "BeVietnam-Regular",
    fontSize: 14,
  },
  inputWithIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 32,
    height: 50,
  },
  image: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    fontFamily: "BeVietnam-Regular",
  },
  button: {
    backgroundColor: "#D5715B",
    borderRadius: 50,
    paddingVertical: 13,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "BeVietnam-Regular",
    fontSize: 18,
  },
});

export default ForgotPasswordScreen;
