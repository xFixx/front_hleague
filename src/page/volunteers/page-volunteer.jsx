import React from 'react';
import cn from 'classnames';

import MainLayout from "../../components/MainLayout/MainLayout";
import { AvatarVolunteer } from '../../components/avatars';
import { VOLUNTEERS_HIEARCHY } from './page-volunteer-const'
import {
  WhoIsVolunteer,
  VolunteerAims,
  WhatWeOffer,
  OurRules,
  ImportantThings,
  LoyaltySystem,
  CenterStructure,
  Gratitude,
} from './components';

import cls from './page-volunteer.module.scss';
import { VolunteerFunctions } from './components/volunteers-functions/volunteers-functions';

export const PageVolunteers = () => {
  return (
    <MainLayout>
      <main>
        <div className="container">
          <div className="row">
            <h1 className='header-page'>Кто такой волонтер?</h1>
          </div>
        </div>

        <WhoIsVolunteer className={cls.pageVolunteers__section} />

        <VolunteerAims className={cls.pageVolunteers__section} />

        <WhatWeOffer className={cls.pageVolunteers__section} />

        <OurRules className={cls.pageVolunteers__section} />

        <ImportantThings className={cls.pageVolunteers__section} />

        <LoyaltySystem className={cls.pageVolunteers__section} />

        <section className={cn(cls.pageVolunteers__section, 'container')}>
          <div className="row">
            <h2 className="header-section">развитие волонтера в нашей команде</h2>
          </div>

          <div className="row">
            {VOLUNTEERS_HIEARCHY.map(position => (
              <div className="col-6 col-sm-3 col-lg-2">
                <AvatarVolunteer
                  className={cls.pageVolunteers__avatar}
                  title={position.name}
                  imgUrl={position.img}
                />
              </div>
            ))}
          </div>
        </section>

        <VolunteerFunctions className={cn(cls.pageVolunteers__section, 'container')} />

        <CenterStructure className={cn(cls.pageVolunteers__section, 'container')} />

        <Gratitude />
      </main>
    </MainLayout>
  );
};