import React from 'react';
import cn from 'classnames';

import cls from './Avatar.module.scss'

export const AvatarVolunteer = ({
  className,
  imgUrl,
  title,
}) => (
  <div className={cn(className, cls.avatarVolunteer)}>
    <img className={cls.avatarVolunteer__img} src={imgUrl} alt="" />
    <span className={cls.avatarVolunteer__title}>{title}</span>
  </div>
);
