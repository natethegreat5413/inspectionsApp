import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <LinearGradient
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      colors={["#5F26E8", "#8015A4", "#DC3384"]}
      style={styles.registerContainer}
    >
      <Text style={styles.title}>Let's get you signed up!</Text>
      <Text style={styles.subTxt}>Register your account</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(txt) => setEmail(txt)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(txt) => setPassword(txt)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={(txt) => setConfirmPassword(txt)}
        />
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.registerTxt}>Register</Text>
      </TouchableOpacity>
      <Button
        title="Already a member? Log in"
        color="#FFFFFF"
        onPress={() => navigation.navigate("Login")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    paddingTop: 150,
    paddingRight: 32,
    paddingLeft: 32,
  },

  title: {
    fontSize: 24,
    color: "white",
    lineHeight: 22,
    marginBottom: 12,
  },
  subTxt: {
    fontSize: 16,
    color: "white",
  },
  inputWrapper: {
    marginTop: 28,
    marginBottom: 59,
  },
  input: {
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 4,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  forgotPassword: {
    fontSize: 16,
    color: "white",
    textAlign: "right",
    marginTop: 8,
  },
  registerButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
  },
  registerTxt: {
    color: "#8015A4",
  },
});

export default Register;
