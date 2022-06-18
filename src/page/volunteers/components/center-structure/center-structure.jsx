import React from 'react';
import cn from 'classnames';

import { AvatarFounder } from 'components/avatars/AvatarFounder';
import { FOUNDERS_LIST } from '../../page-volunteer-const'

export const CenterStructure = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">Структура волонтерского центра</h2>
      </div>

      <div className="row">
        {FOUNDERS_LIST.map(founder => (
          <div className='col'>
            <AvatarFounder
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
