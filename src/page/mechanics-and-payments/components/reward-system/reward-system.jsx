import React from 'react';
import cn from 'classnames';

import imgRewardSystem from 'assets/reward-system.jpg';

import cls from './reward-system.module.scss';

export const RewardSystem = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">3.	Система вознаграждения</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <td>Инструкторы 2022 года</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Сдавший 3 норматива*</td>
                <td>2000 руб.</td>
              </tr>
              <tr>
                <td>Сдавший 4 норматива*</td>
                <td>3000 руб.</td>
              </tr>
              <tr>
                <td>*Судейство и работа со взводом в день гонки (один круг согласно количеству закрытых нормативов + судейство по 1000руб.)</td>
                <td></td>
              </tr>
              <tr>
                <td>Работа в фанзоне или иная помощь в день гонки</td>
                <td></td>
              </tr>
              <tr>
                <td>Все инструкторы</td>
                <td>2000 руб.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <td>Инструкторы 2021 года и ранее</td><td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Сдавший 2 норматива*</td>
                <td>2000 руб.</td>
              </tr>
              <tr>
                <td>Сдавший 3 норматива*</td>
                <td>3000 руб.</td>
              </tr>
              <tr>
                <td>Сдавший 4 норматива*</td>
                <td>4000 руб.</td>
              </tr>
              <tr>
                <td>*Судейство и работа со взводом в день гонки (один круг согласно количеству закрытых нормативов + сулейство 1000 руб.)</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col">
            <table className={cn(cls.b__table, 'table table-dark table-striped')}>
              <thead>
                <tr>
                  <td rowSpan={2}>Судейство на Чемпионатах ( без работы со взводом)</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Судья - Инструктор (только судейство на мероприятии)</td>
                  <td>2000 руб.</td>
                </tr>
                <tr>
                  <td>Старший участка</td>
                  <td>3000 руб.</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

          <div className="row">
            <div className="col">
              <table className={cn(cls.b__tableFooter, 'table table-dark table-striped')}>
                <tbody>
                  <tr>
                    <td>Премия</td>
                    <td>На усмотрение орг. комитета</td>
                  </tr>
                </tbody>
              </table>


            <h3 className="header-block">Зимняя Гонка Героев является продолжением предыдущего сезона и оплачивается согласно закрытым нормативам прошлого года.</h3>
            <h3 className="header-block">При работе на мероприятии в регионе, оплата осуществляется согласно системе вознаграждения региона</h3>
          </div>
        </div>

        <div className="row">
          <img className={cls.b__img} src={imgRewardSystem} alt="" />
        </div>
      </div>
    </section>
  );
};
