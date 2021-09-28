import React from 'react'
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native'

import { Text } from '@marvel/components'

import styles from './styles'
import { colors } from '@marvel/styles'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  title: string
  onPress?: () => any
  buttonStyle?: StyleProp<ViewStyle>
  disabled?: boolean
}

const Button = ({ onPress = () => {}, title, disabled = false, buttonStyle }: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.textContainer, buttonStyle, disabled && styles.disabled]}>
      <Text weight='bold' size='large' color={colors.black.primary}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
