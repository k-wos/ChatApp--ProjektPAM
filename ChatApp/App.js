import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import ChatListItem from "./src/components/ChatListItem";

const chat = {
  id: "1",
  user: {
    image: ("https://i.imgur.com/cFUpyrd.png"),
    name: "Kamil",
  },
  lastMessage: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: "04:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>

      <ChatListItem chat={chat}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});