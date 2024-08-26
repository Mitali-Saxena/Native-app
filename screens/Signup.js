import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleContinue = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    navigation.navigate('FarmInfo', {
        fullName,
        email,
        phone,
        password
      });
    };

  
    const handleSocialLogin = (platform) => {
      Alert.alert("Social Login", `Attempting login with ${platform}`);
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FarmerEats</Text>
      <Text style= {styles.heading1}> Signup 1 of 4</Text>
      <Text style= {styles.heading}> Welcome!</Text>

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

      <View style={styles.orSignupContainer}>
        <Text style={styles.orSignupText}>or signup with</Text>
      </View>

      <View style={styles.inputContainer}>
        <View  style={styles.inputWithIconContainer}>
        <Image
          source={require("../assets/images/name.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholderTextColor="#a0a0a0"
        />
        </View>
        
        <View  style={styles.inputWithIconContainer}>
        <Image
          source={require("../assets/images/Vector.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#a0a0a0"
        />
        </View>
       
        <View  style={styles.inputWithIconContainer}>
        <Image
          source={require("../assets/images/Phone.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="#a0a0a0"
          keyboardType="phone-pad"
        />
        </View>

        <View  style={styles.inputWithIconContainer}>
        <Image
          source={require("../assets/images/1.png")}
          style={styles.image}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#a0a0a0"
          secureTextEntry
        />
        </View>

        <View  style={styles.inputWithIconContainer}>
        <Image
          source={require("../assets/images/1.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#a0a0a0"
          secureTextEntry
        />
        </View>
      </View>

      <View style={styles.buttonRow}>
      <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.underline} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontFamily: 'BeVietnam-Regular',
    color: "#000",
    textAlign: "flex-start",
    marginTop:30,
    marginBottom: 32,
  },
  heading:{
    fontFamily:'BeVietnam-Bold',
    fontSize: 32,
    marginBottom:40,
  },
  heading1: {
    fontSize: 14,
    fontFamily: 'BeVietnam-Regular',
    color: "#a0a0a0",
  },
  orSignupContainer: {
    alignItems: "center", 
    marginBottom: 32, 
  },
  orSignupText: {
    fontSize: 10,
    fontFamily:'BeVietnam-Regular',
    color: "#a0a0a0",
  },
  inputContainer: {
    marginBottom: 50,
  },
  inputWithIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
  },
  image: {
   
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    fontFamily:'BeVietnam-Regular',
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
  },
  loginContainer: {
    alignItems: "flex-start",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  underline: {
    height: 2,
    backgroundColor: "black",
    width: 50,
    marginTop: 2,
  },
  button: {
    backgroundColor: "#D5715B",
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
    width:226
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily:'BeVietnam-Regular',
  },
  loginText: {
    fontFamily: "BeVietnam-Regular",
    textAlign: "center",
    fontSize: 14,
   
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 32,
  },
  socialButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    width: 90,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
});

export default SignupScreen;
