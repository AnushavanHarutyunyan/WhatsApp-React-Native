import { StyleSheet, FlatList } from "react-native";
import chats from "../assets/chat";
import ChatListItem from "../components/ChatListItem";

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ChatsScreen;
