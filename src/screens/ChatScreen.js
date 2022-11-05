import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Bg from "../../assets/BG.png";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";
import Messages from "../components/Messages";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={styles.bg}>
      <ImageBackground source={Bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Messages message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1 },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
