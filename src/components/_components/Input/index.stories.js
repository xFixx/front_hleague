import React from 'react'
import Input from './index'

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const BaseInput = () => <Input label="Input Label" />
