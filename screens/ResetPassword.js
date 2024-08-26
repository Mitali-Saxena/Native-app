import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from "react-native";

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match. Please try again.");
      return;
    }

    try {
      const payload = {
        token: "895642",
        password: newPassword,
        cpassword: confirmPassword,
      };

      const response = await fetch(
        "https://sowlab.com/assignment/#/Verify%20OTP/post_user_reset_password", 
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
        
        Alert.alert("Success", "Password reset successfully!");
        
        navigation.navigate("Login");
      } else {
     
        Alert.alert(
          "Failed",
          data.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FarmerEats</Text>
      <Text style={styles.headerText}>Reset Password</Text>
      <Text style={styles.subHeaderText}>
        Remember your password?{" "}
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.loginText}
        >
          Login
        </Text>
      </Text>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/1.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#C7C7CD"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      <View style={styles.inputContainer2}>
        <Image
          source={require("../assets/images/1.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          placeholderTextColor="#C7C7CD"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Submit</Text>
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
    marginBottom: 72,
  },
  loginText: {
    color: "#D5715B",
    fontFamily: "BeVietnam-Medium",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 24,
    height: 50,
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 32,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    fontFamily: "BeVietnam-Regular",
  },
  image:{
    marginRight:10
  },
  button: {
    backgroundColor: "#D5715B",
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "BeVietnam-Regular",
    fontSize: 18,
  },
});

export default ResetPasswordScreen;
