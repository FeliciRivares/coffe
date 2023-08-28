import {useNavigation, useRoute} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const DetailedScreen = ({props}: any) => {
//   const item = props.route.params;
const route = useRoute();
console.log('------',route)
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={require('../assets/img/beansBackground2.png')}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  }
});
