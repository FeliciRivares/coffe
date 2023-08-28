import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {categories} from '../constants';

import {themeColors} from '../theme';

interface IProps {
  activeCategory: number | null;
  setActiveCategory: (value: number) => void;
}

export const Categories = ({activeCategory, setActiveCategory}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        style={{overflow: 'visible', flexDirection: 'column'}}
        renderItem={({item}) => {
          const isActive = item.id === activeCategory;
          const activeTextClass: string = isActive ? '#ffff' : '#374151';
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(item.id)}
              style={[
                {
                  backgroundColor: isActive
                    ? themeColors.bgLight
                    : 'rgba(0,0,0,0.07)',
                },
                styles.button,
              ]}>
              <Text style={{fontWeight: '600', color: activeTextClass}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    marginTop: 15,
    height: 40
  },
  button: {
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    padding: 10,
    paddingHorizontal: 15,
    marginRight: 2,
    borderRadius: 50,
  },
});
