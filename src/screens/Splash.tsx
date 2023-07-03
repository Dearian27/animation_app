import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

type SplashParams = {
  changeState: (arg: boolean) => void;
}
const Splash: React.FC<SplashParams> = ({ changeState }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', margin: 0 }}>
      <LottieView
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        resizeMode='cover'
        onAnimationFinish={() => { changeState(false) }}
      />
    </View>
  )
}

export default Splash;