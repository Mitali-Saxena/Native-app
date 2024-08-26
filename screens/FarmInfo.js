import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const FarmInfoScreen = ({ route }) => {
  const { fullName, email, phone, password } = route.params;
  const navigation = useNavigation();

  const [businessName, setBusinessName] = useState("");
  const [informalName, setInformalName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleContinue = () => {
    navigation.navigate("Verification", {
      fullName,
      email,
      phone,
      password,
      businessName,
      informalName,
      streetAddress,
      city,
      state,
      zipCode,
    });
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title1}>FarmerEats</Text>
      <Text style={styles.heading1}> Signup 2 of 4</Text>
      <Text style={styles.title}>Farm Info</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWithIconContainer}>
          <Image
            source={require("../assets/images/Business.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="Business Name"
            value={businessName}
            onChangeText={setBusinessName}
            placeholderTextColor="#a0a0a0"
          />
        </View>

        <View style={styles.inputWithIconContainer}>
          <Image
            source={require("../assets/images/Informal.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="Informal Name"
            value={informalName}
            onChangeText={setInformalName}
            placeholderTextColor="#a0a0a0"
          />
        </View>

        <View style={styles.inputWithIconContainer}>
          <Image
            source={require("../assets/images/Home.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            value={streetAddress}
            onChangeText={setStreetAddress}
            placeholderTextColor="#a0a0a0"
          />
        </View>

        <View style={styles.inputWithIconContainer}>
          <Image
            source={require("../assets/images/City.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
            placeholderTextColor="#a0a0a0"
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={[styles.inputWithIconContainer, styles.inputHalfWidth]}>
            <TextInput
              style={styles.input}
              placeholder="State"
              value={state}
              onChangeText={setState}
              placeholderTextColor="#a0a0a0"
            />
            <TouchableOpacity onPress={toggleDropdown}>
              <Icon
                name="arrow-drop-down"
                size={20}
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.inputWithIconContainer, styles.inputHalfWidth]}>
            <TextInput
              style={styles.input} //200 bottom
              placeholder="Enter Zipcode"
              value={zipCode}
              onChangeText={setZipCode}
              placeholderTextColor="#a0a0a0"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
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
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title1: {
    fontSize: 16,
    fontFamily: "BeVietnam-Regular",
    color: "#000",
    textAlign: "flex-start",
    marginTop:30,
    marginBottom: 32,
  },
  title: {
    fontFamily: "BeVietnam-Bold",
    fontSize: 32,
    marginBottom: 40,
  },
  heading1: {
    fontSize: 14,
    fontFamily: "BeVietnam-Regular",
    color: "#a0a0a0",
  },
  inputContainer: {
    marginBottom: 180,
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
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    fontFamily: "BeVietnam-Regular",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputHalfWidth: {
    width: "48%",
  },
  dropdownIcon: {
    marginLeft: "auto",
    color: "black",
  },
  image: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#D5715B",
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
    width: 226,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "BeVietnam-Regular",
  },
});

export default FarmInfoScreen;
