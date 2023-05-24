import { View, Text } from "react-native";

const Message = ({ message }) => {
    return (
        <View>
            <Text>{message.text}</Text>
        </View>
    );
};

export default Message;