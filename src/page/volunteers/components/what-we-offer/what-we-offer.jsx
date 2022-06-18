import React from 'react';
import cn from 'classnames';

export const WhatWeOffer = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">Что будет, если  ты придешь к нам?</h2>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <h3 className="header-block">Для тебя</h3>

          <ul>
            <li>Участие в организации популярного спортивного проекта;</li>
            <li>Новые знакомства с интересными людьми;</li>
            <li>Вкусная полевая кухня;</li>
            <li>Эмоции и впечатления, о которых ты будешь рассказывать друзьям;</li>
            <li>Фирменная футболка, браслет и благодарность от организаторов!</li>
            <li>Яркие и эмоциональные фото!</li>
            <li>Спортивная движуха разного уровня сложности</li>
          </ul>
        </div>

        <div className="col-sm-6">
          <h3 className="header-block">Что нужно, чтобы стать волонтером:</h3>

          <ul>
            <li>Возраст от 16 лет;</li>
            <li>Немного общительности;</li>
            <li>Много ответственности;</li>
            <li>Желание расти и развиваться в спортивной и успешной команде!</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

