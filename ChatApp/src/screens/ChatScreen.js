import { Text, ImageBackground, StyleSheet, FlatList } from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";

const ChatScreen = () => {
    return (
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Message message={item} />}
                style={{ padding: 10 }}
                inverted
            />

            <InputBox />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
});

export default ChatScreen;