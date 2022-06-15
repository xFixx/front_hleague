import React from 'react';
import cn from 'classnames';

import paymentData from 'assets/payments-data.jpg';

import cls from './platoon-distribution.module.scss';

export const PlatoonDistribution = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <div className="col">
          <h2 className="header-section">Распределением по взводам занимается Командир Инструкторов.</h2>
          <h3 className="header-block">Приоритет выставления инструкторов в лист стартов:</h3>
          <ul className={cls.b__list}>
            <li>Инструктор лично собрал и выкупил взвод (в форме записи обязательно необходимо указать номер взвода)</li>
            <li>Количество закрытых нормативов в сезоне. Например, 4 опытный инструктор, 4 новобранец и т.д. (3-3-2-2)</li>
            <li>Успешно пройдённые обучения по офлайн / онлайн Командообразованию, Медицинская помощь, Судейство</li>
            <li>Просьбы инструкторов, отображенные в форме записи на гонку, такие как «меня попросили», «я хочу», «а можно» и т.д. учитываются по возможности !</li>
          </ul>

          <img className={cls.b__img} src={paymentData} alt="" />
        </div>
      </div>
    </section>
  );
};
