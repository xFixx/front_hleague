import cn from 'classnames';
import cls from './Avatar.module.scss';

export const AvatarFounder = ({
  className,
  img,
  name,
  position,
}) => (
  <div className={cn(cls.avatarFounder, className)}>
    <img className={cls.avatarFounder__img} src={img} alt="" />
    <span className={cls.avatarFounder__name}>{name}</span>
    <span className={cls.avatarFounder__position}>{position}</span>
  </div>
);
