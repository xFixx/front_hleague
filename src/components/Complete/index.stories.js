import React from 'react'
import Component from './index'

export default {
  title: 'Design System/Templates',
  component: Component,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Complete = () => <Component />