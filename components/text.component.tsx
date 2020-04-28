import React, { FC } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

interface IProps extends TextProps {
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const Text: FC<IProps> = (props) => {
  const style: TextStyle[] = [
    {
      fontWeight: props.weight || 'normal',
    },
    props.style as TextStyle,
  ];

  return <RNText {...props} style={style} />;
};
