import React from 'react'
import Button from './index'

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Secondary = () => <Button>Button</Button>
