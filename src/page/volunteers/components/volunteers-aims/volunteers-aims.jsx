import React from 'react';
import cn from 'classnames';

import imgAims from 'assets/aims.png';

import cls from './volunteers-aims.module.scss';

export const VolunteerAims = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">
          Цели Волонтерского Центра лига  Героев:
        </h2>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <ul>
            <li>Цели Волонтерского Центра лига  Героев:</li>
            <li>Проведение предварительной подготовки и обучения волонтеров перед мероприятиями</li>
            <li>Постоянное улучшение качества работы волонтеров на мероприятиях</li>
            <li>Ознакомление волонтеров с миссиями и целями проектов Лиги Героев</li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-6">
          <ul>
            <li>Повышение уровня лояльности и преданности волонтеров к проектам Лиги Героев</li>
            <li>Обеспечение доступных условий для личностного роста волонтеров Центра</li>
            <li>Повышение внутренней мотивации и желания развиваться в активной команде</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="w-100">
          <img className={cls.b__img} src={imgAims} alt="" />
        </div>
      </div>
    </section>
  );
};
