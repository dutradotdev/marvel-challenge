import * as React from 'react';
import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Text as RNText } from 'react-native';
import { colors } from '@marvel/styles';

import { sizes, weights } from './styles';

type TextProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  weight?: 'bold' | 'normal';
  children?: ReactNode;
  customStyle?: StyleProp<TextStyle>;
};

const Text: React.FC<TextProps> = ({ size, color, weight, customStyle, children }: TextProps) => {
  const style = {
    ...sizes[size || 'medium'],
    ...weights[weight || 'normal'],
    ...(customStyle as Record<string, unknown>),
    color,
  };

  return <RNText style={style}>{children}</RNText>;
};

Text.defaultProps = {
  size: 'medium',
  color: colors.gray.primary,
  weight: 'normal',
  children: '',
  customStyle: {},
};

export default Text;
