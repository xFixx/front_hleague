import React from 'react';
import cn from 'classnames';

import imgIntro from 'assets/intro-mechanics-and-payments.jpg';

import cls from './intro.module.scss';

export const Intro = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h1 className="header-page">механика набора взводов и оплата для инструкторов</h1>
      </div>

      <div className="row">
        <img className={cls.b__img} src={imgIntro} alt="" />
      </div>
    </section>
  );
};
