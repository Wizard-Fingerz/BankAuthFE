import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
  const navigation = useNavigation()
  const DotComponent = ({selected}) => {
    return (
      <View className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${selected ? "border border-red-400" : ""} p-2`}>
        <View className={`w-2 h-2 ${selected ? "bg-red-400" : "bg-red-200"} rounded-full`}></View>
      </View>
    )
  }
  return (
    <Onboarding
    onSkip={() => navigation.replace("SignUp")}
    onDone={() => navigation.replace("SignUp")}
    DotComponent={DotComponent}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboardImg1.jpg')} 
        className = "w-72 h-72 object-contain"
      
      />,
      // image: (<Image source={{ 
      //   uri: "https://www.vecteezy.com/free-vector/security"}} 
      //   className = "w-72 h-72 object-contain"
      // />),
      title: 'Safe Banking',
      subtitle: 'Secure your future with our safe banking solutions',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboardImg2.jpg')} 
        className = "w-72 h-72 object-contain"
      
      />,
      title: 'Seemless Transaction',
      subtitle: 'Experience the ease of effortless transactions.',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboardImg3.jpg')} 
        className = "w-72 h-72 object-contain"
      
      />,
      title: 'Reliable Authentication',
      subtitle: 'Your security is our priority - trust in our reliable bank authentication',
    },
    
  ]}
/>
  )
}

export default OnboardScreen;