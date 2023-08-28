import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import React, {FC} from 'react';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {StarIcon} from 'react-native-heroicons/solid';
import {PlusIcon} from 'react-native-heroicons/outline';


const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

interface IProps {
  item?: any;

  index?: number;
}

export const CoffeeCard: FC<IProps> = ({index, item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image resizeMode="contain" source={item.image} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <View style={{marginTop: 5}}>
          <View style={styles.starContent}>
            <StarIcon size="15" color="white" />
            <Text style={styles.text}>{item.stars}</Text>
          </View>
          <View style={styles.volumeContent}>
            <Text style={styles.text}>Volume</Text>
            <Text style={styles.text}>{item.volume}</Text>
          </View>
        </View>

        <View style={styles.priceDetails}>
          <Text style={styles.text}>₴ {item.price}</Text>
          <TouchableOpacity
            onPress={
              () => console.log('Prod')
              //  navigation.navigate('roduct', {...item})
            }
            style={styles.button}>
            <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    backgroundColor: themeColors.bgDark,
    height: height * 0.4,
    width: width * 0.65,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 30,
    shadowOffset: {width: 0, height: 40},
    shadowOpacity: 0.8,
  },
  starContent: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: 55,
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    top: -80,
    height: 250,
    width: 250,
    borderRadius: 50,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: '400',
    color: '#ffffff',
    paddingBottom: 15,
    top: -10
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  button: {
    shadowColor: 'black',
    shadowRadius: 40,
    shadowOffset: {width: -20, height: -10},
    shadowOpacity: 1,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  content: {
    top: -40,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'space-between',
    marginTop: ios ? 5 : 0,
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: themeColors.bgDark,
    shadowRadius: 25,
    shadowOffset: {width: 0, height: 40},
    shadowOpacity: 0.8,
    backgroundColor: ios ? themeColors.bgDark : 'transparent',
  },
  volumeContent: {
    marginBottom: 15,
    flexDirection: 'row',
  },
});
