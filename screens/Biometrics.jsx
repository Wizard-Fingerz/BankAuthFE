import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TouchableHighlight } from 'react-native';
import React, { useState, useEffect} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';



const Biometrics = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  // for face detection and fingerprint scan
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefualtAuth = () => {
    console.log('Fall back to password authentication');
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      }
    ]);
  };

  const TwoButtonAlert = () =>
    Alert.alert('Welcome to App', 'Subscribe now', [
      {
        text: 'Back',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK', onPress: () => console.log('Ok Pressed')
      },

    ]);

  const handleBiometricAuth = async () => {
    //check if hardware supports biometric
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // fall back to default authentication method (password) if biometric is not available

    if (!isBiometricAvailable)
      return alertComponent(
        'Please Enter Your Password',
        'Biometric Auth not Supported',
        'Ok',
        () => fallBackToDefualtAuth()
      );

      // check if biometric types available (fingerprint, facial recognition, iris recognition)

      let supportedBiometrics;
      if (isBiometricAvailable)
        supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync()
      
      // check biometric are saved locally in user's device
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics)
        return alertComponent(
          'Biometric record not found',
          'Please Login with Password',
          'Ok',
          () => fallBackToDefaultAuth()
        );
      // authenticate with biometrc
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login With Biometrics',
        cancelLabel: 'cancel',
        disableDeviceFallback: true,
      });

      //log the user in on success

      if (biometricAuth) {TwoButtonAlert()};
        console.log({isBiometricAvailable});
        console.log({supportedBiometrics});
        console.log({savedBiometrics});
        console.log({biometricAuth});
  }
      
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>
          {isBiometricSupported ? 'Yor Device is Compatible with Biometrics'
          : 'Face or Fngerprint scanner is avaialble on this device'}
        </Text>
        <TouchableHighlight
          style={{
            height: 60,
            marginTop: 200,
          }}
        >
          <Button title='Login With Biometrics'
                  color = 'black'
                  onPress = {handleBiometricAuth}
          />
        </TouchableHighlight>
        <StatusBar style='auto'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});


export default Biometrics;