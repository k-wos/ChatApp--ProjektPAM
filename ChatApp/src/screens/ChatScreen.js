import { useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";

const ChatScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bg}
        >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={{ padding: 10 }}
                    inverted
                />

                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
});

export default ChatScreen;