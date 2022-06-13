import React, { useEffect, useState } from 'react'
import logo from '../../img/logo.svg'
import { Link, NavLink, useHistory } from 'react-router-dom'
import account from '../../img/account.png'
import cls from './menu.module.scss'
import home from '../../img/home.svg'
import shop from '../../img/shop.svg'
import ticket from '../../img/ticket.svg'
import timer from '../../img/timer.svg'
import help from '../../img/help.svg'
import exit from '../../img/exit.svg'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../Redux/reducers/userReducer'
import { BACK_PIC_URL } from '../../utils/constants'



const Navs = [
  { id: 1, text: 'Главная', img: home, link: '/' },
  { id: 2, text: 'Личный кабинет', img: shop, link: '/profile' },
  { id: 3, text: 'Мероприятия', img: ticket, link: '/events' },
  { id: 4, text: 'Моё обучение', img: timer, link: '/training' },
  { id: 5, text: 'Помощь', img: help, link: '/help' },
]

export default function Menu() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const [showFullMenu, setShowFullMenu] = useState(false)
  const isMob = useMediaQuery('(max-width:767.9px)')
  const isLaptop = useMediaQuery('(max-width: 1200px)')
  const router = useHistory()
  const exitFunc = () => {
    window.localStorage.removeItem('access')
    window.localStorage.removeItem('refresh')
    router.push('/login')
  }
  useEffect(() => {
    dispatch(getUser())
  }, [])
  return (
    <div className={`${cls.Menu} main-menu`}>
      <motion.div
        transition={{ duration: 1, type: 'spring' }}
        className={cls.logo}
        animate={
          showFullMenu && !isMob
            ? { marginLeft: 110 }
            : isMob
            ? { marginLeft: 0 }
            : { marginLeft: 30 }
        }
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={
              showFullMenu
                ? { width: 92.4, height: 59, marginBottom: 32 }
                : { width: 64, height: 41, marginBottom: 50 }
            }
          />
        </Link>
      </motion.div>
      <motion.div
        onMouseEnter={() => !isLaptop && setShowFullMenu(true)}
        onMouseLeave={() => setShowFullMenu(false)}
        className={`${cls.navbar} ${isMob ? `${cls.navbarMob}` : ''}`}
        animate={showFullMenu ? { width: 255 } : { width: 64 }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        <div className={cls.navbarAccount}>
          <div>
            <img
              src={
                !!user.avatar && window.localStorage.getItem('access')
                  ? `${BACK_PIC_URL}${user.avatar}`
                  : account
              }
              alt="account"
              style={showFullMenu ? { marginLeft: 24 } : { marginLeft: 11 }}
            />
          </div>
          {window.localStorage.getItem('access') ? (
            <div className={cls.navbarText}>
              <p className={cls.inviteText}>
                {showFullMenu ? 'Вы вошли как:' : ''}
              </p>
              <p className={cls.accountName}>
                {user.first_name || (user.last_name && showFullMenu)
                  ? `${user.first_name} ${user.last_name}`
                  : ''}
              </p>
            </div>
          ) : (
            <p className={cls.errorMessage}>
              {showFullMenu ? 'Вы еще не авторизованы' : ''}
            </p>
          )}
        </div>
        <nav className={cls.navLinks}>
          {Navs.map((nav) => (
            <NavLink key={nav.id} to={nav.link} className={cls.navLink}>
              <div className={cls.linkIcon}>
                <img src={nav.img} alt="navImg" />
              </div>
              <p>{showFullMenu ? nav.text : ''}</p>
            </NavLink>
          ))}
        </nav>
        <div onClick={() => exitFunc()} className={cls.exit}>
          <div className={cls.exitNav}>
            <div className={cls.navIcon}>
              <img src={exit} alt="exit" />
            </div>
            <p className={cls.userOff}>
              {showFullMenu
                ? `${user.first_name ? 'Выйти из аккаунта' : ''}`
                : ''}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
