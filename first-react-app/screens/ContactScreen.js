import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';


const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        Contact Us
      </Text>
      <Text style={styles.textStyle}>
        Email: contact@example.com
      </Text>
      <Text style={styles.textStyle}>
        Phone: +1 (555) 123-4567
      </Text>
      <Text style={styles.textStyle}>
        Address: 123 Main St, City, State 12345
      </Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
});


export default ContactScreen;
