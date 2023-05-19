import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform, SafeAreaView, Button, Alert, TouchableHighlight, StyleSheet
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';



const SignIn = ({ navigation }) => {

  const [showPassword, setShowPassword] = React.useState(false)


  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', alignItem: "center", backgroundColor: COLORS.lightblue, paddingBottom: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: "center",
            marginTop: SIZES.padding * 6,
            paddingHorizontal: SIZES.padding * 2
          }}
          onPress={() => console.log("Sign In")}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white
            }}
          />


          <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign In</Text>


        </TouchableOpacity>
        <Image
          source={images.wallieLogo}
          resizeMode="contain"
          style={{
            marginTop: SIZES.padding * 6,
            paddingHorizontal: SIZES.padding * 20,
            width: 30,
            height: 30,
            tintColor: COLORS.white
          }}
        />
      </View>
    )
  }
  function renderSignInForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 2,
        }}
      >
        <Text style={{ color: COLORS.black, ...FONTS.h3, fontWeight: 'bold' }}>Sign In with your bank details</Text>
        {/* Account Number */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Account Number</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.black,
              ...FONTS.body3
            }}
            placeholder="Enter Account Number"
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
          />
        </View>

        {/* Password */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Password</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.black,
              ...FONTS.body3
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.black
              }}
            />
          </TouchableOpacity>
        </View>


      </View>
    )
  }

  function renderButton() {

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
      Alert.alert('Login Successful', 'Go to Security Questions', [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Yes', onPress: () => console.log('Ok Pressed')
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
          () => fallBackToDefualtAuth()
        );
      // authenticate with biometrc
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Confirm With Biometrics',
        cancelLabel: 'cancel',
        disableDeviceFallback: true,
      });

      //log the user in on success

      if (biometricAuth) { TwoButtonAlert() };
      console.log({ isBiometricAvailable });
      console.log({ supportedBiometrics });
      console.log({ savedBiometrics });
      console.log({ biometricAuth });
    }

    return (
      <View style={{ margin: SIZES.padding * 2 }}>
        <TouchableOpacity
          style={{
            height: 40,
            backgroundColor: COLORS.lightblue,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={handleBiometricAuth}
          // onSubmit={handleBiometricAuth}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.white, COLORS.white]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {renderHeader()}
          {renderSignInForm()}
          {renderButton()}
          {/* <Text style={{ color: COLORS.black, ...FONTS.h3, fontWeight: 'bold', marginHorizontal: SIZES.padding * 2, textAlign: 'center' }}>Or</Text> */}

          {/* {Biometrics()} */}
        </ScrollView>
      </LinearGradient>
      {/* {renderAreaCodesModal()} */}
    </KeyboardAvoidingView>

  )
}

export default SignIn;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});

