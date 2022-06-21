import React from 'react';
import cn from 'classnames';

import iconCross from 'assets/icon-cross.svg';
import iconLike from 'assets/like.svg';

import cls from './main-documents.module.scss';

export const MainDocuments = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className='row'>
        <h2 className='header-section'>ГЛАВНЫЕ ДОКУМЕНТЫ ИНСТРУКТОРА/СУДЬИ</h2>
      </div>

      <div className={cn(cls.b__cards, 'row')}>
        <div className='col-md-3'>
          <div className={cn(cls.b__card, 'card')}>Система Мотивации 2022</div>
        </div>
        <div className={cn(cls.b__linesCenter, 'col-md-6')}>
          <div className={cls.b__line} />
          <div className={cls.b__cardIcon}>
            <img className={cls.b__iconLike} src={iconLike} alt='' />
          </div>
          <div className={cls.b__line} />
        </div>
        <div className={cn('col-md-3')}>
          <div className={cn(cls.b__card, 'card')}>Памятка Инструктора</div>
        </div>
        <div className={cn('col-md-3')}>
          <div className={cn(cls.b__card, 'card')}>Памятка Инструктора</div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img className='card__icon' src={iconCross} alt='' />
            <p>Все травмы необходимо регистрировать у медиков только в день гонки, чтобы участники в случае необходимости получили выплаты. Если травма зарегистрирована на следующий день или позднее, то это не является страховым случаем !</p>
          </div>
        </div>
      </div>
    </section>
  );
};
