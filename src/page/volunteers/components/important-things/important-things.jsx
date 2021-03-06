import React from 'react';
import cn from 'classnames';

import cls from './important-things.module.scss';

export const ImportantThings = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className='row'>
        <h2 className='header-section'>важно</h2>
      </div>

      <div className='row'>
        <div className={cn(cls.b__list, 'col-sm-6')}>
          <h2 className='header-block'>Твои права</h2>
          <ul>
            <li>Взаимодействовать с командой на равных;</li>
            <li>Получить назначение на оговоренную функцию;</li>
            <li>Получать оценку своей деятельности от координатора и руководителя Центра;</li>
            <li>Иметь возможность на приобретение новых знаний и навыков;</li>
            <li>Выражать свое мнение;</li>
            <li>Вносить предложения по улучшению и развитию проекта в целом и волонтерского центра в частности.</li>
          </ul>
        </div>
        <div className='col-sm-6'>
          <h2 className='header-block'>Ты ответственен ЗА:</h2>
          <ul>
            <li>Свой внешний вид;</li>
            <li>Эффективное использование времени и ресурсов;</li>
            <li>Соблюдение режима работы (если что-то изменилось – предупреди);</li>
            <li>Соблюдение техники безопасности;</li>
            <li>Выполнение поставленных тебе задач;</li>
            <li>Информирование команды о всех необычных инцидентах.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};