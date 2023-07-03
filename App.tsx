import React, { useRef, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import LottieView from 'lottie-react-native';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return isLoading ?
    <Splash changeState={setIsLoading} />
    : <Home />
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
});

export default App;
