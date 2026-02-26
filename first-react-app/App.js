
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Names from './screens/Names';

const Stack =  createStackNavigator(
  {}
);

  
export default function App() {
  return (
    <Names/>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color: 'blue',
    fontSize: 40,
  }
});