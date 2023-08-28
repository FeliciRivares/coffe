import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {themeColors} from '../theme';
import {StatusBar} from 'expo-status-bar';
import { coffeeItems} from '../constants';
import {BellIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {SearchBar} from '../components/search-bar.component';
import {Categories} from '../components/categories.component';
import {CoffeeCardsList} from '../components/coffee-cards-list.component';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  return (
    <View style={styles.wrapper}>
      <StatusBar />
      <Image
        style={[styles.bgImage, {height: height * 0.2}]}
        source={require('../assets/img/beansBackground1.png')}
      />
      <SafeAreaView style={{marginBottom: ios ? -8 : 0}}>
        <View style={[styles.headerContainer, {width: width}]}>
          <Image
            style={styles.avatarImage}
            source={require('../assets/img/avatar.png')}
          />
          <View style={styles.mapIconWrapper}>
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text style={styles.mapText}>New York, NYC</Text>
          </View>
          <BellIcon size="27" color="rgb(133 77 14)" />
        </View>
        <SearchBar />
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </SafeAreaView>

      <View style={styles.cardListWrapper}>
        <CoffeeCardsList coffeeItems={coffeeItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    alignItems: 'center',
    borderRadius: 50,
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  bgImage: {
    width: '100%',
    position: 'absolute',
    top: -5,
    opacity: 0.3,
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  headerContainer: {
    paddingHorizontal: 10,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mapIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 1,
  },
  mapText: {
    color: 'rgb(133 77 14)',
    fontSize: 20,
    fontWeight: '600',
  },
  cardListWrapper: {
    marginTop: 100, 
    overflow: 'visible',
    justifyContent: 'center',
  },
});
