import React from 'react';
import cn from 'classnames';

import imgBrands from 'assets/brands.jpg';

import cls from './general-information.module.scss';

export const GeneralInformation = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h1 className="header-page">Инструкторы Гонки Героев сезон 2022</h1>
      </div>

      <div className="row">
        <h3 className="header-block">ОБЩАЯ ИНФОРМАЦИЯ</h3>

        <p>Лига Героев - это команда единомышленников, которая организовывает социальные спортивные проекты федерального масштаба, охватывающие наиболее активные и прогрессивные социальные группы российского общества.</p>

        <img className={cls.b__img} src={imgBrands} alt="" />
      </div>
    </section>
  );
}