import React from 'react'
import Component from './Course'
import { Router } from 'react-router-dom'
import { history } from '../../helpers/history'

export default {
  title: 'Design System/Pages',
  component: Component,
  decorators: [
    (story) => <Router history={history}>{story()}</Router>,
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Course = () => <Component />