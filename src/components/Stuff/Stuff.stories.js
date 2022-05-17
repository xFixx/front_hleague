import React from 'react'
import Component from './Stuff'

export default {
  title: 'Design System/Templates',
  component: Component,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Stuff = () => <Component />