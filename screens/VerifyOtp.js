import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const VerifyOTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);

    if (text && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
   try{
    const payload= {
      otp:otp.join(""),
    
   };
   
    const response = await fetch('https://sowlab.com/assignment/#/Verify%20OTP/post_user_verify_otp',
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(payload),
      
      }
    );
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
       
        Alert.alert("Success", "OTP verified successfully!");
   
        navigation.navigate('ResetPassword');
      } else {
      
        Alert.alert("Failed", data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  const handleResendCode = async () => {
    try {
    
      Alert.alert("Success", "OTP has been resent to your registered phone number.");
    } catch (error) {
      Alert.alert("Error", "Failed to resend the OTP. Please try again later.");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FarmerEats</Text>
      <Text style={styles.headerText}>Verify OTP</Text>
      <Text style={styles.subHeaderText}>
        Remember your password?{' '}
        <Text onPress={() => navigation.navigate('Login')} style={styles.loginText}>
          Login
        </Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(input) => (inputs.current[index] = input)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResendCode} style={styles.resendCodeContainer}>
        <Text style={styles.resendCodeText}>Resend Code</Text>
        <View style={styles.underline} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontFamily: "BeVietnam-Regular",
    color: "#000",
    textAlign: "flex-start",
    marginBottom: 50,
  },
  headerText: {
    fontFamily: 'BeVietnam-Bold',
    fontSize: 32,
    color: '#000',
    marginBottom: 24,
  },
  subHeaderText: {
    fontFamily: 'BeVietnam-Regular',
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 72,
  },
  loginText: {
    color: '#D5715B',
    fontFamily: 'BeVietnam-Regular',
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  otpInput: {
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    backgroundColor: "#eee",
  },
  button: {
    backgroundColor: '#D5715B',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'BeVietnam-Regular',
    fontSize: 18,
  },
  resendCodeContainer: {
    alignItems: 'center',
  },
  resendCodeText: {
    color: '#000000',
    fontFamily: 'BeVietnam-Regular',
    fontSize: 14,
  },
  underline: {
    height: 2,
    backgroundColor: '#000000',
    width: '35%',
    marginTop: 2,
  },
});

export default VerifyOTPScreen;
