import React from 'react';
import { Text } from './text.component';
import {
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { deviceWidth, space1 } from '../theme/space';
import { useNavigation } from '@react-navigation/native';

const categories = [
  'backgrounds',
  'fashion',
  'nature',
  'science',
  'education',
  'feelings',
  'health',
  'people',
  'religion',
  'places',
  'animals',
  'industry',
  'computer',
  'food',
  'sports',
  'transportation',
  'travel',
  'buildings',
  'business',
  'music',
];

const styles = StyleSheet.create({
  category: {
    height: 100,
    width: deviceWidth - space1 * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Explore = () => {
  const navigation = useNavigation();

  const renderCategory = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Results', { keyword: item })}
      >
        <View style={styles.category}>
          <Text>{item}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Text weight="bold">Explore</Text>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(category) => category}
      />
    </View>
  );
};
