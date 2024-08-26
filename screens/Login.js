import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSocialLogin = (platform) => {
    Alert.alert("Social Login", `Attempting login with ${platform}`);
  };

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
      role: "farmer",
      device_token: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
      type: "email",
      social_id: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
    };

    try {
      const response = await fetch("https://sowlab.com/assignment/#/Login%2FRegister/post_user_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("raw response:", response);

      const contentType = response.headers.get("Content-Type");

      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log("Parsed response data:", data);

      if (response.ok) {
        Alert.alert("Login Successful!", `Welcome back, ${data.email}`);
        // navigation.navigate("Home"); 
      } else {
        Alert.alert("Login Failed", data.message || "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>
        New here?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
          Create account
        </Text>
      </Text>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/Vector.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.passwordContainer}>
        <Image
          source={require("../assets/images/1.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.passwordInput}
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.link}>Forgot?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or login with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin("Google")}>
          <Image
            source={require("../assets/images/icons.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin("Apple")}>
          <Image
            source={require("../assets/images/Vectors.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin("Facebook")}>
          <Image
            source={require("../assets/images/facebook.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    marginBottom: 24,
    height: 50,
  },
  title: {
    fontFamily: "BeVietnam-Bold",
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "BeVietnam-Regular",
    fontSize: 14,
    marginBottom: 20,
  },
  passwordContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 32,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    fontFamily: "BeVietnam-Regular",
    fontSize: 14,
  },
  input: {
    flex:1,
    fontFamily: "BeVietnam-Regular",
    backgroundColor: "#eee",
    fontSize: 14,
  },
  forgotPassword: {
    fontSize: 14,
  },
  link: {
    color: "#D5715B",
    fontFamily: "BeVietnam-Regular",
  },
  loginButton: {
    backgroundColor: "#D5715B",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "BeVietnam-Regular",
    // fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#888",
    fontFamily: "BeVietnam-Regular",
    fontSize: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialButton: {
    // backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    width: 90,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  image: {
    marginRight: 10,
  },
});
