import React from 'react'
import Component from './HelpAccordion'
import humanIcon from '../../img/contactHuman.svg'

export default {
  title: 'Design System/Organisms/Accordion',
  component: Component,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    setExpanded: { action: 'clicked' },
  },
}

const Template = (args) => <Component {...args}/>;

export const HelpAccordion = Template.bind({})
HelpAccordion.args = {
  title: 'Вопросы к организаторам',
  img: humanIcon,
  icon: humanIcon,
  backgroundColor: 'linear-gradient(266.95deg, #982EEB -20.2%, #359AD2 132.4%), #151515',
  expanded: true,
}