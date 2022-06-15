import React from 'react';
import cn from 'classnames';

import imgPaymentData from 'assets/payments-data.jpg';

import cls from './payment-data.module.scss';

export const PaymentData = ({ className }) => {
  return (
    <section className={cn(className, 'container')}>
      <div className="row">
        <div className="col">
          <h2 className="header-section">2.	Платёжные данные и документы по оплате</h2>
          <h3 className="header-block">Инструктор перед каждым мероприятием самостоятельно заполняет свои платёжные данные:</h3>
          <ul className={cls.b__list}>
            <li>Накануне мероприятия выкладывается пост с документами к заполнению: на одного человека идёт пакет документов: «СЧЁТ+АКТ» (2 экземпляра). </li>
            <li>В день мероприятия инструктор обязан принести и отдать подписанный пакет документов после построения человеку, указанному в посте. Приносить за коллег можно. В другой день документы не принимаются. Если вы не принесли/забыли/заполнили не верно, ваша оплата будет перенесена на человека, который сделал и сдал все в корректной форме.</li>
            <li>Если, по какой либо причине, вы  не можете быть самозанятым, либо у вас нет ИП, вам необходимо один раз за сезон донести данную информацию и причины до командира инструкторов. Каждый раз это делать не нужно.</li>
            <li>Если есть вопросы, касательно заполнения документов, либо какие-либо другие, необходимо написать на почту юристам: lex@heroleague.com</li>
            <li>Оплата за мероприятие производится в течение месяца;</li>
            <li>Оплата по корпоративным взводам производится после того, как предоставят смету по выплатам. Оплата работы за мероприятие и смета по корпоративным взводам – это разные выплаты.</li>
          </ul>
          <img className={cls.b__img} src={imgPaymentData} alt="" />
        </div>
      </div>
    </section>
  )
}