import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BusinessHoursScreen = ({ route }) => {
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

  const [selectedWeekday, setSelectedWeekday] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);
  const [businessHours, setBusinessHours] = useState({
    M: "",
    T: "",
    W: "",
    TH: "",
    F: "",
    S: "",
    Su: "",
  });

  const handleInputChange = (day, timeSlot) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: timeSlot,
    }));
  };

  const handleWeekdaySelect = (day) => {
    setSelectedWeekday(day);
  };

  const handleTimeZoneSelect = (timeSlot) => {
    if (selectedWeekday) {
      handleInputChange(selectedWeekday, timeSlot);
    }
    setSelectedTimeZone(timeSlot);
  };

  const handleSignup = async () => {
    const payload = {
      full_name: fullName,
      email: email,
      phone: phone,
      password: password,
      role: "farmer",
      business_name: businessName,
      informal_name: informalName,
      address: streetAddress,
      city: city,
      state: state,
      zip_code: zipCode,
      business_hours: businessHours,
      device_token: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
      type: "email",
      social_id: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
    };

    console.log("Payload being sent:", JSON.stringify(payload, null, 2));

    try {
      const response = await fetch(
        "https://sowlab.com/assignment/#/Login%2FRegister/post_user_register",
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
      alert("Registration successful!");
      navigation.navigate("Done");
    } else {

      alert(data.message || "Registration failed");
    }
  } catch (error) {
    
    console.error("Error during registration:", error);
    alert("Something went wrong. Please try again later.");
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title1}>FarmerEats</Text>
      <Text style={styles.heading1}> Signup 4 of 4</Text>
      <Text style={styles.title}>Business Hours</Text>
      <Text style={styles.subText}>
        Choose the hours your farm is open for pickups. This will allow
        customers to order deliveries.
      </Text>

      <View style={styles.weekdaysContainer}>
        {Object.keys(businessHours).map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.weekdayBox,
              selectedWeekday === day && styles.selectedWeekday,
            ]}
            onPress={() => handleWeekdaySelect(day)}
          >
            <Text
              style={[
                styles.weekdayText,
                selectedWeekday === day && styles.selectedWeekdayText,
              ]}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.hoursContainer}>
        <View>
          <TouchableOpacity
            style={[
              styles.hours,
              selectedTimeZone === "8:00 AM - 10:00 AM" && styles.selectedHours,
            ]}
            onPress={() => handleTimeZoneSelect("8:00 AM - 10:00 AM")}
          >
            <Text>8:00 AM - 10:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.hours,
              selectedTimeZone === "10:00 PM - 1:00 PM" && styles.selectedHours,
            ]}
            onPress={() => handleTimeZoneSelect("10:00 PM - 1:00 PM")}
          >
            <Text>10:00 PM - 1:00 PM</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.hours,
              selectedTimeZone === "1:00 PM - 4:00 PM" && styles.selectedHours,
            ]}
            onPress={() => handleTimeZoneSelect("1:00 PM - 4:00 PM")}
          >
            <Text>1:00 PM - 4:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.hours,
              selectedTimeZone === "4:00 PM - 7:00 PM" && styles.selectedHours,
            ]}
            onPress={() => handleTimeZoneSelect("4:00 PM - 7:00 PM")}
          >
            <Text>4:00 PM - 7:00 PM</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign up</Text>
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
    marginBottom: 40,
  },
  weekdaysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  weekdayBox: {
    backgroundColor: "#eee",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  selectedWeekday: {
    backgroundColor: "#D5715B",
  },
  selectedWeekdayText: {
    color: "#fff",
  },
  weekdayText: {
    fontSize: 14,
    fontFamily: "BeVietnam-Regular",
  },

  hoursContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 200,
  },

  hours: {
    fontSize: 14,
    fontFamily: "BeVietnam-Regular",
    backgroundColor: "#eee",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    textAlign: "center",
    color: "#000",
  },
  selectedHours: {
    backgroundColor: "#fff7cc",
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

export default BusinessHoursScreen;
