import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {themeColors} from '../theme';

const {height} = Dimensions.get('window');

export const SearchBar = () => {
  return (
    <View style={[{marginTop: height * 0.06}, styles.container]}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.search} />
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgLight,
            borderRadius: 50,
            padding: 7,
          }}>
          <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginRight: 5,
    marginLeft: 5,
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#e6e6e6',
  },
  search: {
    flex: 1,
    fontWeight: '600',
    color: '#374151',
  },
});
