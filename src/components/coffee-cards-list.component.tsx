import React, {FC, useState} from 'react';
import {
  Dimensions,
  Platform,
  View,
  
} from 'react-native';
import {CoffeeCard} from './coffee-card.component';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

interface IProps {
  coffeeItems?: any;
}

export const CoffeeCardsList: FC<IProps> = ({coffeeItems}) => {
  return (
    <View>
      <Carousel
        vertical={false}
        containerCustomStyle={{overflow: 'visible'}}
        data={coffeeItems}
        renderItem={({item}: any) => <CoffeeCard item={item} />}
        firstItem={1}
        loop={true}
        style={{
          width: width,
          height: height * 0.5,
          alignContent: 'center',
          justifyContent: 'center',
        }}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.75}
        sliderWidth={width}
        itemWidth={width * 0.63}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};
