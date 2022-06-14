import React from 'react'
import Component from './Loader'

export default {
  title: 'Design System/Molecules/Loader',
  component: Component,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 1,
        max: 50,
        step: 2,
      },
    },
  },
}

const Template = ({ size }) => {
  return <Component size={`${size}px`} />
}

export const Loader = Template.bind({})
Loader.args = {
  size: 30,
}
