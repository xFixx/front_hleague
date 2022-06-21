import React from 'react';
import cn from 'classnames';

import imgLogo from 'img/logo.svg';

import cls from './layout-public.module.scss';

export const LayoutPublic = ({ children }) => {
  return (
    <div className={cls.b__page}>
      <header className={cls.b__header}>
        <img className={cls.b__logo} src={imgLogo} alt="" />
      </header>
      <main className={cls.b__main}>
        {children}
      </main>
    </div>
  )
}