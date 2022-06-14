import cls from './Avatar.module.scss'

export const AvatarVolunteer = ({
  imgUrl,
  title,
}) => (
  <div className={cls.avatarVolunteer}>
    <img className={cls.avatarVolunteer__img} src={imgUrl} alt="" />
    <span className={cls.avatarVolunteer__title}>{title}</span>
  </div>
);
