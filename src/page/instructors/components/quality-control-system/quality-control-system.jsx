import React from 'react';
import cn from 'classnames';

import iconEnvelop from 'assets/icon-envelop.svg';
import iconGroup from 'assets/icon-group.svg';
import iconVector from 'assets/icon-vector.svg';

import cls from './quality-control-system.module.scss';

export const QualityControlSystem = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className='row'>
        <h2 className='header-section'>СИСТЕМА КОНТРОЛЯ КАЧЕСТВА РАБОТЫ ИНСТРУКТОРОВ</h2>
      </div>

      <div className='container'>
        <div className={cn(cls.b__lines, 'row')}>
          <div className={cn(cls.b__line, cls.b__lineTop, 'col-12')}></div>
          <div className={cn(cls.b__line, cls.b__lineBottomLeft, 'col-md-4')}></div>
          <div className={cn(cls.b__line, cls.b__lineBottomMiddle, 'col-md-4')}></div>
          <div className={cn(cls.b__line, cls.b__lineBottomRight, 'col-md-4')}></div>
        </div>
      </div>

      <div className={cn(cls.b__cards, 'row')}>
        <div className={cn('')} />
        <div className={cn(cls.b__infoCard, 'col-10 col-sm-8 col-md-4')}>
          <div className='card'>
            <img className='card__icon' src={iconEnvelop} alt='' />
            <p>Получение обратной связи от участников во взводе (отзывы, в том числе, в соцсетях)</p>
            <p>Осуществляется всем орг. составом</p>
          </div>
        </div>
        <div className={cn(cls.b__infoCard, 'col-10 col-sm-8 col-md-4')}>
          <div className='card'>
            <img className='card__icon' src={iconGroup} alt='' />
            <p>Проверка работы инструкторов непосредственно на трассе/Препятствиях</p>
            <p>Осуществляется эксперт-инструктором, старшими участков, командиром инструкторов</p>
          </div>
        </div>
        <div className={cn(cls.b__infoCard, 'col-10 col-sm-8 col-md-4')}>
          <div className='card'>
            <img className='card__icon' src={iconVector} alt='' />
            <p>Проверка обеспечения норм безопасности (отсутствие травм во взводе)</p>
            <p>Осуществляется эксперт-инструктором, старшими участков, командиром инструкторов</p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className={cn(cls.b__warning, 'card')}>
            <p><b>ВАЖНО!</b></p>
            <p><b>Применяется система выговоров и штрафов за нарушение правил работы на трассе.</b></p>
            <p><b>Двойной выговор – исключение из рядов инструкторов.</b></p>
            <p><b>Данные решения руководителей организационного комитета не оспариваются и являются окончательными.</b></p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <table className='table table-dark table-striped'>
            <thead>
              <tr>
                <td>Вид нарушения</td>
                <td>Вид штрафа</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Опоздание на построение без предварительного уведомления Командира, отсутствие внимательности к вводной информации, выкрики и смех в строю</td>
                <td>Выговор</td>
              </tr>
              <tr>
                <td>Опоздание на старт, отсутствие на старте своего взвода</td>
                <td>Выговор</td>
              </tr>
              <tr>
                <td>Отсутствие на Гонке без предварительного уведомления Командира инструкторов не менее, чем за двое суток до начала мероприятия или после публикации финального поста на гонку</td>
                <td>Выговор</td>
              </tr>
              <tr>
                <td>Разделение взвода на трассе, отсутствие контроля, отставшие участники</td>
                <td>Выговор</td>
              </tr>
              <tr>
                <td>Травмы участников по вине Инструктора</td>
                <td>Отстранение от следующего мероприятия/выговор/лишение оплаты</td>
              </tr>
              <tr>
                <td>Обоснованные жалобы от участников в форме обратной связи/на трассе</td>
                <td>Отстранение от следующего мероприятия/выговор/лишение оплаты</td>
              </tr>
              <tr>
                <td>Присутствие на мероприятии/трассе без спортивной формы (отсутствие или видоизменение футболки Инструктора, нахождение на трассе с голым торсом)</td>
                <td>Отстранение от следующего мероприятия и выговор</td>
              </tr>
              <tr>
                <td>Иные виды нарушений: отсутствие активности в основной группе Вконтакте (нет обратной связи по постам, опросам и т.п.), панибратское отношение, оскорбления и нецензурная брань, открытые конфликты среди всех участников проекта и т.д. Убедительная просьба! К выданной экипировке относится бережно, не делать из них майки, топы, головные уборы и прочее.</td>
                <td>Выносятся на рассмотрение Оргкомитета</td>
              </tr>
              <tr>
                <td>Получение замечаний от взвода\орг.состава на работу инструктора из другого региона.</td>
                <td>Отстранение от следующего мероприятия и выговор</td>
              </tr>
              <tr>
                <td>Некорректное ведение своих социальных сетей (явная пропаганда алкоголя, курения и др.)</td>
                <td>Выговор или исключение из рядов инструкторов</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
