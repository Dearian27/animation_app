import { Text, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
export interface LottieContainerProps {
  name: string,
  source: string,
  author: string,
  path: string,
}
export default function LottieContainer(props: LottieContainerProps): JSX.Element {
  return (
    <View style={{ padding: 10, borderRadius: 5, elevation: 20, shadowColor: '#52006A' }}>
      <LottieView
        source={props.path}
        autoPlay
        loop={true}
        resizeMode='cover'
      />
      <View style={styles.description}>
        <Text>{props.name}</Text>
        <Text>{props.author}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  }
});