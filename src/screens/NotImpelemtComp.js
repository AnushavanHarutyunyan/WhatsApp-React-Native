import { Auth } from "aws-amplify";
import { View, Text, StyleSheet, Button } from "react-native";

const NotImplement = () => {
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={() => Auth.signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotImplement;