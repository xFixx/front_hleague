import React from 'react';
import cn from 'classnames';

import { AvatarFounder } from 'components/avatars/AvatarFounder';
import { FOUNDERS_LIST } from '../../page-volunteer-const';

import cls from './center-structure.module.scss';

export const CenterStructure = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">Структура волонтерского центра</h2>
      </div>

      <div className="row">
        {FOUNDERS_LIST.map(founder => (
          <div className='col-sm-4 col-lg'>
            <AvatarFounder
              className={cls.b__avatar}
              img={founder.img}
              name={founder.name}
              position={founder.position}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
