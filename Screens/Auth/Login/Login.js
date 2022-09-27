import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      colors={["#5F26E8", "#8015A4", "#DC3384"]}
      style={styles.loginContainer}
    >
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subTxt}>Sign into your account</Text>
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
        <Button
          title="Forgot Password?"
          onPress={() => navigation.navigate("ForgotPassword")}
          style={styles.forgotPassword}
          color="#FFFFFF"
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("MainScreen")}
      >
        <Text style={styles.loginTxt}>Continue</Text>
      </TouchableOpacity>
      <Button
        title="Don't have an accound? Sign up"
        color="#FFFFFF"
        onPress={() => navigation.navigate("Register")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
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
  loginButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
  },
  loginTxt: {
    color: "#8015A4",
  },
});

export default Login;
