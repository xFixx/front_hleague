import React from 'react'
import BurgerBtn from './BurgerBtn'
import { Provider } from 'react-redux'
import { store } from '../../Redux/store'
import { Router } from 'react-router-dom'
import { history } from '../../helpers/history'

export default {
  title: 'Design System/Organisms/Menu',
  component: BurgerBtn,
  decorators: [
    (story) => <Provider store={store}>{story()}</Provider>,
    (story) => <Router history={history}>{story()}</Router>,
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const BurgerMenu = () => <BurgerBtn />
