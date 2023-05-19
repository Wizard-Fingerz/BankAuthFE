import React from 'react';
import { View, Text, Button } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Your form has been submitted successfully!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SuccessScreen;
