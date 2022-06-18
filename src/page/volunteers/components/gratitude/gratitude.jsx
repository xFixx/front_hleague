import React from 'react';
import cn from 'classnames';

import imgFinalists from 'assets/finalists.jpg';

import cls from './gratitude.module.scss';

export const Gratitude = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className={cn(cls.b__title,'header-section')}>
          И самое главное – спасибо тебе, дорогой друг, что ты откликнулся на наш призыв присоединиться к нашей команде Волонтерского Центра Лиги Героев!
        </h2>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <p className={cls.b__desc}>
            Мы очень ценим твою помощь и готовы ответить тем же!<br />
            Пусть этот день будет в радость и оставит только хорошие воспоминания!
          </p>
          <p className={cls.b__desc}>Ты уже наш Герой!</p>
        </div>
      </div>

      <div className="row">
        <img className={cls.b__img} src={imgFinalists} alt="" />
      </div>
    </section>
  );
};
