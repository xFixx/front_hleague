import React from 'react';
import cn from 'classnames';

import imgRemember from 'assets/remember.jpg';

import cls from './our-rules.module.scss';

export const OurRules = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">помни</h2>
      </div>

      <div className={cn(cls.b__enumList, 'row')}>
        <div className="col-lg-4">
          <div className="enum">
            <div className={cn('enum__number')}>01</div>
            <h3 className={cn(cls.b__enumTitleHeight, 'enum__title header-block')}>Волонтерская деятельность является добровольной и безвозмездной!</h3>
            <p className='text-faded'>Это как хобби – доставляет удовольствие и немного приятных бонусов</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="enum">
            <div className={cn('enum__number')}>02</div>
            <h3 className={cn(cls.b__enumTitleHeight, 'enum__title header-block')}>Мы любим взаимность! </h3>
            <p className='text-faded'>Относись к другим так, как бы ты хотел чтобы относились к тебе!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="enum">
            <div className={cn('enum__number')}>03</div>
            <h3 className={cn(cls.b__enumTitleHeight, 'enum__title header-block')}>Мы всегда поможем!</h3>
            <p className='text-faded'>Если ты не знаешь, как решить свою задачу - обратись к тим-лидеру или к старшему на участке волонтеру</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="enum">
            <div className={cn('enum__number')}>04</div>
            <h3 className={cn(cls.b__enumTitleHeight, 'enum__title header-block')}>Мы ценим свое и твое время!</h3>
            <p className='text-faded'>Если у тебя поменялись планы и ты не можешь приехать на гонку, сообщи нам хотя бы за 2 дня, чтобы мы могли найти тебе замену.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="enum">
            <div className={cn('enum__number')}>05</div>
            <h3 className={cn(cls.b__enumTitleHeight, 'enum__title header-block')}>Мы хотим развиваться и быть лучше!</h3>
            <p className='text-faded'>Если у тебя есть интересные идеи или объективные замечания по организации, то координатор и руководитель Центра всегда тебя выслушают. На важно твоё мнение!</p>
          </div>
        </div>
      </div>

      <div className="row">
        <img src={imgRemember} alt="" />
      </div>
    </section>
    );
};
