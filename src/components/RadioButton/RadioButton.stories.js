import React from 'react'
import Component from './RadioButton'

export default {
  title: 'Design System/Atoms',
  component: Component,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    value: 'value',
    onchange: { action: 'clicked' },
  },
}

const Template = (args) => <Component {...args}/>;

export const RadioButton = Template.bind({})
RadioButton.args = {
  text: 'Запрос информации',
}