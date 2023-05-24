import { View, Text, Image, StyleSheet } from "react-native";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/avatar-1.png')} 
      style={styles.image}
      />
      
      <View style={styles.content}>
		<View style={styles.row}>
	        <Text style={styles.name}>Kamil</Text>
		    <Text style={styles.subTitle}>04:30</Text>
	      </View>

        <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 5,
      height: 70,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10,
    },
    content: {
      flex: 1,
  
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'lightgray',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    name: {
      flex: 1,
      fontWeight: 'bold',
    },
    subTitle: {
      color: 'gray',
    },
  });

export default ChatListItem;