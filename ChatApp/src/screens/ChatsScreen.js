import ChatListItem from "../components/ChatListItem";

const chat = {
  id: "1",
  user: {
    image:
      "https://i.imgur.com/cFUpyrd.png",
    name: "Kamil",
  },
  lastMessage: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: "04:30",
  },
};

const ChatsScreen = () => {
  return <ChatListItem chat={chat} />;
};

export default ChatsScreen;