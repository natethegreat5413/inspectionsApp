import { View, Image, Pressable, Text, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AuthIntro = ({ navigation }) => {
  return (
    <LinearGradient
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      colors={["#5F26E8", "#8015A4", "#DC3384"]}
      style={styles.authContainer}
    >
      <Image source={require("./cofiphoto.png")} style={styles.cofiImage} />
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>fellow builder!</Text>
      </View>
      <Text style={styles.subText}>
        Help build your community, and make some money while you're at it.
      </Text>
      <Pressable
        style={styles.joinButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.btnText}>Join now</Text>
      </Pressable>
      <Button
        title="Already have an account? Log in"
        color="#FFFFFF"
        onPress={() => navigation.navigate("Login")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    paddingTop: 150,
    paddingRight: 32,
    paddingLeft: 32,
    alignItems: "center",
  },
  cofiImage: {
    marginBottom: 75,
  },
  titleWrap: {
    width: "100%",
    marginBottom: 16,
  },
  title: {
    textAlign: "left",
    color: "white",
    fontSize: 40,
    fontWeight: "500",
  },
  subText: {
    fontSize: 16,
    color: "white",
    lineHeight: 25.5,
  },
  joinButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "white",
    padding: 13,
    borderRadius: 10,
  },
  btnText: {
    color: "#DC3384",
    fontSize: 16,
  },
});

export default AuthIntro;
