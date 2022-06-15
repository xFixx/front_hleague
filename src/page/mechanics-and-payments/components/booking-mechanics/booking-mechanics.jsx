import React from 'react';
import cn from 'classnames';

import imgThanksCap from 'assets/thanks-cap.jpg';

import cls from './booking-mechanics.module.scss';

export const BookingMechanics = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <h2 className="header-section">1.	Механика бронирования взвода</h2>
      </div>
      <div className="row">
        <div className="col">
          <h3 className={cn(cls.b__title, 'header-block')}>Физические лица</h3>
          <ul className={cls.b__list}>
            <li>Ждём пост на бронирование взвода на конкретное мероприятие (Vk / Telegram инструкторские группы);</li>
            <li>Сообщаем Насте Шутовой в личное сообщение в Vk о брони взвода/ов (10 чел.), получаем подтверждение – «ОК»;</li>
            <li>Собираем команду из 10 человек и деньги за участие. (Бронь держится 14 дней, при высоких темпах продажи билетов сроки могут уменьшаться и, по сообщению Леси – цена может быть равна цене на сайте);</li>
            <li>Пишите Насте Шутовой (в телеграмм) после выполнения вышеописанных пунктов и получаете ссылку для выкупа взвода по специальной ссылке (на сайте);</li>
            <li>ОБЯЗАТЕЛЬНО вносим все данные участников на сайте;</li>
            <li>ВАЖНО! Если вы не можете собрать взвод, пишите Лесе для снятия брони. Просьба не тянуть до последнего, предупреждать, в случае, если вам требуется еще некоторое время;</li>
            <li>Если вы хотите забрать манишки за свой взвод в день Гонки, вам необходимо заполнить шаблон из группы Vk (раздел документы (https://vk.com/doc-122358283_584448939), а также собрать справки со всех участников). В любом другом формате предоставления документов – манишки вам переданы не будут.</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className={cn(cls.b__title, 'header-block')}>Юридические лица (корпоративные взводы)</h3>
          <ul>
            <li>Ваша компания пишет письмо на почту zk@heroleague.ru и ОБЯЗАТЕЛЬНО указывает ваши данные ФИО, что взвод именно от вас (эта процедура необходима для получения вами процентов со сбора взвода);</li>
            <li>Менеджер работает по вашей заявке, после того, как утвержден окончательный пакет услуг, подводится итоговый чек;</li>
            <li>После мероприятия вы получаете свой процент, как только будут готовы все закрывающие документы.</li>
          </ul>

          <img className={cls.b__img} src={imgThanksCap} alt="" />
        </div>
      </div>
    </section>
  );
};
