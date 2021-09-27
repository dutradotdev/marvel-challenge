import React from 'react'
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const Button = ({ onPress = () => {}, title, disabled = false, buttonStyle }: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.textContainer, buttonStyle, disabled && styles.disabled]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
