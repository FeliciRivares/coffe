import {useNavigation, useRoute} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import { buttonCardAnimation } from '../animation';

export const DetailedScreen = ({props}: any) => {
  //   const item = props.route.params;
  const route = useRoute();
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
    <Animated.View
      sharedTransitionTag="tag"
      sharedTransitionStyle={buttonCardAnimation} 
     style={{zIndex: 14, backgroundColor: 'blue', width: 200, height: 100 }}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/img/beansBackground2.png')}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
