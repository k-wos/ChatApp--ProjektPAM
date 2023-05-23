import {
  StatusBar
} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {
  return ( <
    View style = {
      styles.container
    } >
    <
    Text > Co to za zagadka dwie kulki i armatka < /Text> <
    StatusBar style = "auto" / >
    <
    /View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});