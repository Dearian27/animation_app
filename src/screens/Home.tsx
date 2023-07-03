import { Text, View, SafeAreaView } from "react-native";
import LottieContainer, { LottieContainerProps } from "../components/LottieContainer";

const animations: LottieContainerProps[] = [
  {
    name: 'Loader 06',
    source: 'https://assets3.lottiefiles.com/packages/lf20_jfXcHs2ED8.json',
    path: require('../assets/loader06.json'),
    author: 'Musa Adanur',
  },
  {
    name: '3D brick',
    source: 'https://assets9.lottiefiles.com/packages/lf20_i93soSeGxe.json',
    path: require('../assets/3dBrick.json'),
    author: 'Jakob Winterholler',
  },
  {
    name: 'Planet earth and rocket',
    source: 'https://assets9.lottiefiles.com/packages/lf20_Yz2AzPLPXW.json',
    path: require('../assets/planet.json'),
    author: 'Abdul Latif',
  },
  {
    name: 'CubicMaths',
    source: 'https://assets7.lottiefiles.com/packages/lf20_pJvtiSVyYH.json',
    path: require('../assets/cubiMaths.json'),
    author: 'Pietro Gallardo',
  }
]
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, height: '100%' }}>
      <View style={{ height: '100%', flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, margin: 10 }}>
          HOME SCREEN
        </Text>
        {animations.map(animation => {
          return <LottieContainer key={animation.source} {...animation} />
        })}
      </View>
    </SafeAreaView>
  )
}

export default Home;