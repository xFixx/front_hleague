import React from 'react';
import cn from 'classnames';

import imgIntro from 'assets/page-intro-standarts-and-assignment.jpg';

import cls from './general-information.module.scss';

export const GeneralInformation = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h1 className="header-page">НОРМАТИВЫ ДЛЯ ИНСТРУКТОРОВ И РАСПРЕДЕЛЕНИЕ ПО ВЗВОДАМ</h1>
        <img className={cls.b__img} src={imgIntro} alt="" />
      </div>
      
      <div className="row">
        <div className="col">
          <h3 className={cn(cls.b__header, 'header-block')}>Количество закрытых нормативов – </h3>
          <p className={cls.b__paragraph}>позволяет вам стартовать раньше на гонке. При отборе на другие мероприятия (например, Гонка Героев Сочи или другие проекты Лиги Героев) – в приоритете ваша активность за весь сезон (и предыдущие), также оцениваются и другие ваши личные качества, которые необходимы под конкретные проекты.</p>
          <h3 className={cn(cls.b__header, 'header-block')}>По результатам прохождения тестов формируется таблица рейтинга самых подготовленных инструкторов (ссылка опубликована в инструкторской группе ), которые смогут претендовать на следующее:</h3>
          <ul className={cls.b__paragraph}>
            <li>специальные подарки от «Лиги Героев» и партнеров (топ-3 абсолют – по всей России; топ-3 (М и Ж) в каждом регионе)</li>
          </ul>
          <h3 className={cn(cls.b__header, 'header-block')}>По результатом активности в сезоне (работа на мероприятиях, совместные официальные походы на активности), на усмотрение организаторов происходит дополнительное поощрение (подарки от «Лиги Героев», мерч)</h3>
        </div>
      </div>
    </section>
  );
};
