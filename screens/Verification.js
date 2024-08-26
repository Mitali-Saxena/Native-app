import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import DocumentPicker from "react-native-document-picker";

const VerificationScreen = ({ route }) => {
  const {
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
  } = route.params;
  const navigation = useNavigation();
  const [registrationProof, setRegistrationProof] = useState("");

  const handleContinue = () => {
    navigation.navigate("BusinessHours", {
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
      registrationProof,
    });
  };

  const handleAttachProof = async () => {
    // try {
    //   const result = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles], 
    //   });
    //   setRegistrationProof(result[0].uri); 
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     console.log("User canceled the picker");
    //   } else {
    //     throw err;
    //   }
    // }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title1}>FarmerEats</Text>
      <Text style={styles.heading1}> Signup 3 of 4</Text>
      <Text style={styles.title}>Verification</Text>

      <Text style={styles.subText}>
        Attach proof of Department of Agriculture registrations (e.g. Florida
        Fresh, USDA Approved, USDA Organic).
      </Text>

     

      <TouchableOpacity style={styles.uploadButton} onPress={handleAttachProof}>
        <Text style={styles.uploadButtonText}>
          Attach proof of registration
        </Text>
        <TouchableOpacity
          style={styles.cameraIconContainer}
          onPress={handleAttachProof}
        >
          <Image
            source={require("../assets/images/Camera.png")}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>

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
  heading1: {
    fontSize: 14,
    fontFamily: "BeVietnam-Regular",
    color: "#a0a0a0",
  },
  title: {
    fontFamily: "BeVietnam-Bold",
    fontSize: 32,
    marginBottom: 24,
  },
  subText: {
    fontSize: 14,
    fontFamily: "BeVietnam-Regular",
    color: "#a0a0a0",
    textAlign: "center",
    marginBottom: 30,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom:250,
  },
  uploadButtonText: {
    fontSize: 14,
    color: "black",
    flex: 1,
    fontFamily: "BeVietnam-Regular",
  },
  cameraIconContainer: {
    backgroundColor: "#D5715B",
    padding: 13,
    borderRadius: 50, 
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
   
  },
  
  cameraIcon: {
    color: "#fff",
    width: 23.96,
    height: 20.33,
   
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

export default VerificationScreen;
