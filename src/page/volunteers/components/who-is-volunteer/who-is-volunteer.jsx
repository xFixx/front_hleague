import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import imgPrevTeam from 'assets/prev-team.jpg';

import cls from './who-is-volunteer.module.scss';

export const WhoIsVolunteer = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <div className="col-sm-6">
          <h3 className='header-block'>кто такой волонтер?</h3>
          <p>Волонтер -  это движущая сила любого мероприятия,<br /> часть одной большой команды.</p>
          <Link className={cn(cls.b__link, 'button')} to='#'>Стать волонтером</Link>
        </div>

        <div className="col-sm-6">
          <h3 className="header-block">зачем становится волонтером?</h3>
          <p>Стань волонтёром Лиги Героев и приобрети бесценный опыт, новых друзей и единомышленников!</p>
        </div>
      </div>

      <div className="row">
        <div className="w-100">
          <img className={cls.b__img} src={imgPrevTeam} alt="" />
        </div>
      </div>
    </section>
  );
};
