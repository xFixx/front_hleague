import React from 'react'
import cls from './Welcome.module.scss'
import Title from '../_components/Title'
import SecondaryButton from '../_components/SecondaryButton'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div className={cls.WelcomeBlock}>
      <Title>Новый герой</Title>
      <Title>Зарегистрирован!</Title>
      <div className={cls.SubText}>
        <p>Ваш email подтвержден</p>
        {/* <p>
          Проверь <a href={DOMAIN}>свою почту</a>, на нее мы выслали твой пароль
          от личного кабинета.
        </p> */}
      </div>
      <Link to={'/login'}>
        <SecondaryButton>Войдите в личный кабинет</SecondaryButton>
      </Link>
      {/* <p className={cls.MailCheck}>
        Перед входом проверьте <a href={DOMAIN}> почту!</a>
      </p> */}
    </div>
  )
}

export default WelcomePage
