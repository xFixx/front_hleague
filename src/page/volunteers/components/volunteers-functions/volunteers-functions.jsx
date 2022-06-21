import React from 'react';
import cn from 'classnames';

export const VolunteerFunctions = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">Функции волонтеров</h2>
      </div>
      <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">01</div>
              <h3 className="enum__title header-block">регистрация</h3>
              <ul>
                <li>Встреча и координирование участников</li>
                <li>Регистрация участников</li>
                <li>Проверка билетов и документов участников</li>
                <li>Внесение данных в базу</li>
                <li>Выдача стартовых пакетов</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">02</div>
              <h3 className="enum__title header-block">Камера хранения</h3>
              <ul>
                <li>Прием и выдача личных вещей участников по номеру манишки</li>
                <li>Четкое распределение вещей на стеллажах, для быстрой выдачи участникам</li>
                <li>Обеспечение сохранности полученных вещей</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">03</div>
              <h3 className="enum__title header-block">Полевая кухня</h3>
              <ul>
                <li>Контроль входа и выхода в зону кухни</li>
                <li>Помощь в раздаче пищи</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">04</div>
              <h3 className="enum__title header-block">Старт</h3>
              <ul>
                <li>Выдача чипов хронометража</li>
                <li>Организация стартовых коридоров</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">05</div>
              <h3 className="enum__title header-block">Финиш</h3>
              <ul>
                <li>Встреча финишеров</li>
                <li>Торжественное вручение жетонов</li>
                <li>Ведение протокола финишеров</li>
                <li>Сбор чипов хронометража</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">06</div>
              <h3 className="enum__title header-block">Пит-стопы</h3>
              <ul>
                <li>Раздача воды</li>
                <li>Подбадривание участников</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">07</div>
              <h3 className="enum__title header-block">Сопровождение трассы</h3>
              <ul>
                <li>Контроль техники безопасности  на препятствиях</li>
                <li>Подбадривание участников</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">08</div>
              <h3 className="enum__title header-block">Медицина</h3>
              <ul>
                <li>Фиксирование обращений участников за медицинской помощью</li>
                <li>Подбадривание участников</li>
                <li>При необходимости сопровождение участника до медучреждения</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="enum">
              <div className="enum__number">09</div>
              <h3 className="enum__title header-block">Фан - Зона</h3>
              <ul>
                <li>Помощь ивент-менеджеру</li>
                <li>Содействие партнерам в проведении развлекательных мероприятий</li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
};
