import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { photos, searchPhotos } from '../stores/photo.store';
import { Image } from '../components/image.component';
import { observer } from 'mobx-react';
import { deviceWidth } from '../theme/space';
import { IPhoto } from '../types/photos.types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Home = observer(() => {
  useEffect(() => {
    searchPhotos();
  }, []);

  const renderPhoto = ({ item }: { item: IPhoto }) => (
    <Image
      key={item.id}
      uri={item.largeImageURL}
      style={{
        width: '100%',
        height: (deviceWidth / item.imageWidth) * item.imageHeight,
      }}
    />
  );

  return (
    <FlatList
      keyExtractor={(photo) => photo.id.toString()}
      data={photos.default}
      style={styles.container}
      renderItem={renderPhoto}
    />
  );
});
