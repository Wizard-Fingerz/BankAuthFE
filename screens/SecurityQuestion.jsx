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
import {LinearGradient} from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

import React from 'react'

const SecurityQuestion = ({navigation}) => {

    function renderHeader() {
        return (
            <View style={{flexDirection : 'row', alignItem: "center", backgroundColor: COLORS.lightblue, paddingBottom: 10, }}>
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
    
                
                <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Security Questions</Text>
                
              
            </TouchableOpacity>
            <Image
                    source={images.wallieLogo}
                    resizeMode="contain"
                    style={{
                        marginTop: SIZES.padding * 6,
                        paddingHorizontal: SIZES.padding * 12,
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
            <ScrollView
                style={{
                    marginTop: SIZES.padding * 2,
                    marginHorizontal: SIZES.padding * 2,
                }}
            >
              <Text style={{ color: COLORS.black, ...FONTS.h3, fontWeight: 'bold' }}>Enter your security questions</Text>
                {/* Security Question1 */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Security Question 1</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 30,
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        placeholder="E.g. What is your place of birth?"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                    />
                </View>
      
                {/* Answer */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Answer 1</Text>
      
                    <View style={{ flexDirection: 'row' }}>
                        {/* Answer */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 30,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            placeholder="E.g. Ibadan"
                            placeholderTextColor={COLORS.black}
                            selectionColor={COLORS.black}
                        />
                    </View>
                </View>
                {/* Security Question1 */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Security Question 2</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 30,
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        placeholder="E.g. What is your place of birth?"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                    />
                </View>
      
                {/* Answer */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Answer 2</Text>
      
                    <View style={{ flexDirection: 'row' }}>
                        {/* Answer */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 30,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            placeholder="E.g. Ibadan"
                            placeholderTextColor={COLORS.black}
                            selectionColor={COLORS.black}
                        />
                    </View>
                </View>
                {/* Security Question1 */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Security Question 2</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 30,
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        placeholder="E.g. What is your place of birth?"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                    />
                </View>
      
                {/* Answer */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Answer 3</Text>
      
                    <View style={{ flexDirection: 'row' }}>
                        {/* Answer */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 30,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            placeholder="E.g. Ibadan"
                            placeholderTextColor={COLORS.black}
                            selectionColor={COLORS.black}
                        />
                    </View>
                </View>
                {/* Security Question1 */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Security Question 4</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: 1,
                            height: 30,
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        placeholder="E.g. What is your place of birth?"
                        placeholderTextColor={COLORS.black}
                        selectionColor={COLORS.black}
                    />
                </View>
      
                {/* Answer */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3, fontWeight: 'bold' }}>Answer1</Text>
      
                    <View style={{ flexDirection: 'row' }}>
                        {/* Answer */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 30,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            placeholder="E.g. Ibadan"
                            placeholderTextColor={COLORS.black}
                            selectionColor={COLORS.black}
                        />
                    </View>
                </View>
      
                
            </ScrollView>
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
                    onPress={() => navigation.navigate("SignIn")}
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
        </KeyboardAvoidingView>

  )
}

export default SecurityQuestion;