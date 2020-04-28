import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { photos, searchPhotos } from '../stores/photo.store';
import { Image } from '../components/image.component';
import { observer } from 'mobx-react';
import { deviceWidth } from '../theme/space';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Home = observer(() => {
  useEffect(() => {
    searchPhotos();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {photos.default.map((photo) => (
        <Image
          key={photo.id}
          uri={photo.largeImageURL}
          style={{
            width: '100%',
            height: (deviceWidth / photo.imageWidth) * photo.imageHeight,
          }}
        />
      ))}
    </ScrollView>
  );
});
