import cls from './Avatar.module.scss'

export const AvatarFounder = ({
  img,
  name,
  position,
}) => (
  <div className={cls.avatarFounder}>
    <img className={cls.avatarFounder__img} src={img} alt="" />
    <span className={cls.avatarFounder__name}>{name}</span>
    <span className={cls.avatarFounder__position}>{position}</span>
  </div>
);
