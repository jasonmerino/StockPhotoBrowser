import React, { FC } from 'react';
import { Image as Img, ImageStyle } from 'react-native';

interface IProps {
  uri: string;
  style?: ImageStyle;
}

export const Image: FC<IProps> = ({ uri, style }) => {
  return <Img source={{ uri }} style={style} />;
};
