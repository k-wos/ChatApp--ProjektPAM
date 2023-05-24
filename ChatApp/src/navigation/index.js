import { NavigationContainer } from "@react-navigation/native";
import ChatsScreen from "../screens/ChatsScreen";

const Navigator = () => {
    return (
        <NavigationContainer>
            <ChatsScreen />
        </NavigationContainer>
    );
};

export default Navigator;