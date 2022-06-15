import React from 'react';
import cn from 'classnames';

import cls from './standarts.module.scss';

export const Standarts = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">НОРМАТИВЫ В СЕЗОНЕ 2022 ДЛЯ ПОДТВЕРЖДЕНИЯ ГРЕЙДА «ИНСТРУКТОР»</h2>
        <h3 className={cn(cls.b__title, 'header-block')}>В инструкторской группе будет опубликовано видео для правильного выполнения тестов.</h3>
        <h3 className={cn(cls.b__title, 'header-block')}>Нормативы в манеже ЦСКА начинаем принимать с 30.01.2021 г. по 28.04.2021 г., из которых исключением является Тест 1 (ориентировочно – весна, даты сдачи будут объявлены позднее в инструкторской группе).</h3>
      </div>
      <div className='row'>
        <div className="col">
          <h3 className={cn(cls.b__title, 'header-block')}>Подтверждение статуса для действующих Инструкторов 2020 года и ранее:</h3>
          <ul>
            <li>Необходимо закрыть минимум 2 норматива, из которых Тест 1 (10 км) в зачёт и Тест 3</li>
            <li>или сдать 2 норматива (один из которых Тест 3) + 10 км из часа (60 мин)</li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className="col">
          <h3 className={cn(cls.b__title, 'header-block')}>Для стажеров, необходимо:</h3>
          <ul>
            <li>Сдать минимум 3 норматива, из которых Тест 1 (10км) в зачёт и Тест 3</li>
            <li>или сдать 3 норматива + 10км из часа (60 мин)</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="enum">
            <div className="enum__number">Тест 1</div>
            <div className="enum__title header-block">обязательный тест</div>
            <p className="text-faded">
              <b>Бег 10 км</b><br />
              С оплатой:<br />
              <b>М</b> – из 47 мин;<br />
              <b>Ж</b> – из 50 мин;<br />
              <b>Для 40+</b> - из 60 мин.
            </p>
            <p className="text-faded">
              Без оплаты:<br />
              Допуск – 55 минут
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="enum">
            <div className="enum__number">Тест 2</div>
            <div className="enum__title header-block">обязательный тест</div>
            <p className="text-faded">
              <b>ОФП 3 раунда</b><br />
              С оплатой<br />
              <b>М</b> - 21 присед с гирей 16 кг, 15 берпи, 9 подтягиваний. 6 мин.<br />
              <b>Ж</b> - 21 присед с гирей 12 кг, 15 берпи, 5 подтягиваний. 7 мин.<br />
              <b>Для 40+</b> не обязательный
            </p>
            <p className="text-faded">Возможна сдача по видео.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="enum">
            <div className="enum__number">Тест 3</div>
            <div className="enum__title header-block">не обязательный тест</div>
            <p className="text-faded">
              <b>Бег 400 метров</b><br />
              С оплатой<br />
              Парни – 65 сек;<br />
              Девушки – 77 сек.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="enum">
            <div className="enum__number">Тест 4</div>
            <div className="enum__title header-block">не обязательный тест</div>
            <p className="text-faded">
              <b>OCR-полоса 2 круга</b><br />
              С оплатой<br />
              200 метров бег с сэндбегом М-10/Ж-15 кг, 20 выпадов с сэндбэгом на месте 10/15 кг, 1 канат, 1 полоса (кольцо, буква, ключ, канат, колышек, кольцо). 2 круга<br />
              мужчины - 6:30<br />
              девушки - 8:00
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};
