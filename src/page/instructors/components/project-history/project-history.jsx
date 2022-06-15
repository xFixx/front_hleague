import React from 'react';
import cn from 'classnames';


import { AvatarFounder } from 'components/avatars';
import { MAIN_INFLUENCERS } from '../../page-instructors';

import imgBrandHistory from 'assets/project-history.jpg';

import cls from './project-history.module.scss';

export const ProjectHistory = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">ИСТОРИЯ ПРОЕКТА</h2>

        <div className={cn(cls.b__list, 'col-sm-6')}>
          <ul>
            <li>Первая «Гонка Героев» длиной в 5 км прошла 14 сентября 2013 года на полигоне Алабино, в ней участвовало всего 300 человек.</li>
            <li>В 2022 году проекту исполнилось 9 лет.</li>
            <li>17 августа - День рождения Инструкторов Гонки Героев, т.к. в этот день первый раз были задействованы гражданские Инструкторы.</li>
          </ul>
        </div>
        <div className={cn(cls.b__list, 'col-sm-6')}>
          <ul>
            <li>Ежегодно в Гонке Героев принимают участие более десяти тысяч участников.</li>
            <li>Гонка Героев была проведена более чем в 20 городах по всей России.</li>
            <li>Гонка Героев вышла на международный уровень – Азербайджан, Баку и Нюрбургринг (Германия) гонка Winterhell (франшиза «Гонки Героев»).</li>
          </ul>
        </div>

        <img className={cls.b__img} src={imgBrandHistory} alt="" />

        <div className="row">
          {MAIN_INFLUENCERS.map(person => (
            <div className="col">
              <AvatarFounder
                name={person.name}
                position={person.position}
                img={person.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
