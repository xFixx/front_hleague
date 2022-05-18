import React from 'react'
import Component from './StuffModal'

export default {
  title: 'Design System/Organisms/Modal',
  component: Component,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    role: {
      options: ['judge', 'instructor', 'trainer', 'volunteer'],
      control: { type: 'select' },
    },
    open: true,
    handleClose: { action: 'clicked' },
  },
}

const Template = (args) => <Component {...args}/>;

export const Stuff = Template.bind({})
Stuff.args = {
    role: 'judge',
    open: true,
}