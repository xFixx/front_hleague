import cn from 'classnames';

import cls from './career-roadmap.module.scss';

export const CareerRoadmap = () => {
  return (
    <div className={cls.roadmap}>
      <div className="row">
        <div className={cn(cls.roadmap__start, 'col-sm-6 col-lg-3 col-xl-2')}>
          <div className={cn(cls.roadmap__point)}>
            кандидат-стажер
            <span className={cn(cls.roadmap__arrow, cls.roadmap__arrowDown)}></span>
          </div>
        </div>
        <div className={cn(cls.roadmap__dividerRight, 'col-sm-6 col-lg-9')}/>
        <div className={cn(cls.roadmap__even, "col-sm-6 col-lg-3 col-xl-2")}>
          <div className={cn(cls.roadmap__step)}>
            <span className={cls.roadmap__num}>1</span>
            Сдача нормативов для проверки физподготовки
            <span className={cn(cls.roadmap__arrow, cls.roadmap__arrowUp)}></span>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3  col-xl-2">
          <div className={cn(cls.roadmap__step)}>
            <span className={cls.roadmap__num}>2</span>
            Прохождение тренингов командообразования и первой помощи
            <span className={cn(cls.roadmap__arrow, cls.roadmap__arrowDown)}></span>
          </div>
        </div>
        <div className={cn(cls.roadmap__even, "col-sm-6 col-lg-3  col-xl-2")}>
          <div className={cn(cls.roadmap__step)}>
            <span className={cls.roadmap__num}>3</span>
            Прохождение тестового забега с имитацией Гонки для отработки навыков Инструктора
            <span className={cn(cls.roadmap__arrow, cls.roadmap__arrowUp)}></span>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3  col-xl-2">
          <div className={cn(cls.roadmap__step)}>
            <span className={cls.roadmap__num}>4</span>
            Успешное прохождение стажерского забега - под контролем опытного Инструктора
            <span className={cn(cls.roadmap__arrow, cls.roadmap__arrowDown)}></span>
          </div>
        </div>
        <div className={cn(cls.roadmap__dividerLeft, 'col-sm-6 col-lg-9')}/>
        <div className={cn(cls.roadmap__end, "col-sm-6 col-lg-3 col-xl-2")}>
          <div className={cn(cls.roadmap__point)}>Инструктор</div>
        </div>
      </div>
    </div>
  );
}