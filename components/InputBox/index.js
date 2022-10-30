import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");
  const onSend = () => {
    console.warn("send", newMessage);
    setNewMessage("");
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput
        style={styles.textInput}
        placeholder="type your message"
        onChangeText={setNewMessage}
        value={newMessage}
      />
      <MaterialIcons
        style={styles.send}
        name="send"
        size={16}
        color="white"
        onPress={onSend}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    borderRadius: 15,
    padding: 7,
    overflow: "hidden",
  },
});

export default InputBox;
