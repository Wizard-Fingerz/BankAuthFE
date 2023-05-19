import React, { useEffect, useState } from "react";
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
    Platform
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import axios from "axios";


const SignUp = ({ navigation }) => {
    // const [domain, setDomain] = useState('http://localhost')
    const [full_name, setFullName] = useState('');
    const [account_number, setAccountNumber] = useState('');
    const [card_details, setCardDetail] = useState('');
    const [last_six_digits, setLastSixDigits] = useState('');
    const [password, setPassword] = useState('');

    const handleAccountNumberChange = (text) => {
        setAccountNumber(text);
    };
    const handleFullNameChange = (text) => {
        setFullName(text);
    };

    const handleCardDetailsChange = (numeric) => {
        setCardDetail(numeric);
    };
    const handleLastSixDigits = (numeric) => {
        setLastSixDigits(numeric);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        fetch('http://localhost:8000/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: full_name,
            account_number: account_number,
            card_details: card_details,
            last_six_digits: last_six_digits,
            password: password,
        
          }),
        })
        .then(response => {
          if (response.ok) {
            console.log('Registration successful!');
          } else {
            console.log('Registration failed.');
          }
        })
        .catch(error => {
          console.error(error);
        });
      };


    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8000/register/', {
    //             full_name: full_name,
    //             account_number: account_number,
    //             card_details: card_details,
    //             last_six_digits: last_six_digits,
    //             password: password,
    //             // email: email,
    //         });

    //         if (response.status === 200) {
    //             navigation.navigate('SuccessScreen');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleSubmit = () => {
    //     const data = {
    //         full_name: full_name,
    //         account_number: account_number,
    //         card_details: card_details,
    //         last_six_digits: last_six_digits,
    //         password: password,
    //     };

    //     fetch('http://localhost:8000/register/', {
    //         credentials: 'include',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    // useEffect(() => {
    //     navigation.navigate('SuccessScreen');

    // }, [])
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
                    onPress={() => console.log("Sign Up")}
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


                    <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign Up</Text>


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

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2,
                    marginHorizontal: SIZES.padding * 2,
                }}
            >
                <Text style={{ color: COLORS.black, ...FONTS.h3, fontWeight: 'bold' }}>Register your bank details</Text>
                {/* Full Name */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Full Name</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        value={full_name}
                        onChangeText={handleFullNameChange}
                        placeholder="Enter Full Name"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                    />
                </View>

                {/* Account Number */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Account Number</Text>

                    <View style={{ flexDirection: 'row' }}>
                        {/* Account Number */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            value={account_number}
                            onChangeText={handleAccountNumberChange}
                            placeholder="Enter Account Number"
                            placeholderTextColor={COLORS.black}
                            selectionColor={COLORS.black}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                {/* Card CCV */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Card Details</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        value={card_details}
                        onChangeText={handleCardDetailsChange}
                        placeholder="Enter Card Number"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                        secureTextEntry={!showPassword}
                        keyboardType="numeric"
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

                {/* Last 6 digit */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Card Last Six Digits</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        value={last_six_digits}
                        onChangeText={handleLastSixDigits}
                        placeholder="Enter Card Last Six Digit"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                        secureTextEntry={!showPassword}
                        keyboardType="numeric"
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
                        value={password}
                        onChangeText={handlePasswordChange}
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
        return (
            <View style={{ margin: SIZES.padding * 2 }}>
                <TouchableOpacity
                    style={{
                        height: 40,
                        backgroundColor: COLORS.lightblue,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={handleSubmit}
                // onPress={() => navigation.navigate("SecurityQuestion")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
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
                {renderHeader()}
                <ScrollView>
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
            {/* {renderAreaCodesModal()} */}
        </KeyboardAvoidingView>
    )
}

export default SignUp;