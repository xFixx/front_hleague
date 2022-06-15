import MainLayout from "components/MainLayout/MainLayout";

import intro from 'assets/intro-mechanics-and-payments.jpg';
import thanksCap from 'assets/thanks-cap.jpg';
import paymentData from 'assets/payments-data.jpg';
import rewardSystem from 'assets/reward-system.jpg';

export const PageMechanicsAndPayments = () => {
  return (
    <MainLayout>
      <main>
        <section className="container">
          <div className="row">
            <h1 className="header-page">механика набора взводов и оплата дли инструкторов</h1>
          </div>

          <div className="row">
            <img src={intro} alt="" />
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">1.	Механика бронирования взвода</h2>
          </div>
          <div className="row">
            <h3 className="header-block">Физические лица</h3>
            <ul>
              <li>Ждём пост на бронирование взвода на конкретное мероприятие (Vk / Telegram инструкторские группы);</li>
              <li>Сообщаем Насте Шутовой в личное сообщение в Vk о брони взвода/ов (10 чел.), получаем подтверждение – «ОК»;</li>
              <li>Собираем команду из 10 человек и деньги за участие. (Бронь держится 14 дней, при высоких темпах продажи билетов сроки могут уменьшаться и, по сообщению Леси – цена может быть равна цене на сайте);</li>
              <li>Пишите Насте Шутовой (в телеграмм) после выполнения вышеописанных пунктов и получаете ссылку для выкупа взвода по специальной ссылке (на сайте);</li>
              <li>ОБЯЗАТЕЛЬНО вносим все данные участников на сайте;</li>
              <li>ВАЖНО! Если вы не можете собрать взвод, пишите Лесе для снятия брони. Просьба не тянуть до последнего, предупреждать, в случае, если вам требуется еще некоторое время;</li>
              <li>Если вы хотите забрать манишки за свой взвод в день Гонки, вам необходимо заполнить шаблон из группы Vk (раздел документы (https://vk.com/doc-122358283_584448939), а также собрать справки со всех участников). В любом другом формате предоставления документов – манишки вам переданы не будут.</li>
            </ul>
          </div>
          <div className="row">
            <h3 className="header-block">Юридические лица (корпоративные взводы)</h3>
            <ul>
              <li>Ваша компания пишет письмо на почту zk@heroleague.ru и ОБЯЗАТЕЛЬНО указывает ваши данные ФИО, что взвод именно от вас (эта процедура необходима для получения вами процентов со сбора взвода);</li>
              <li>Менеджер работает по вашей заявке, после того, как утвержден окончательный пакет услуг, подводится итоговый чек;</li>
              <li>После мероприятия вы получаете свой процент, как только будут готовы все закрывающие документы.</li>
            </ul>

            <img src={thanksCap} alt="" />
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">2.	Платёжные данные и документы по оплате</h2>
            <h3 className="header-block">Инструктор перед каждым мероприятием самостоятельно заполняет свои платёжные данные:</h3>
            <ul>
              <li>Накануне мероприятия выкладывается пост с документами к заполнению: на одного человека идёт пакет документов: «СЧЁТ+АКТ» (2 экземпляра). </li>
              <li>В день мероприятия инструктор обязан принести и отдать подписанный пакет документов после построения человеку, указанному в посте. Приносить за коллег можно. В другой день документы не принимаются. Если вы не принесли/забыли/заполнили не верно, ваша оплата будет перенесена на человека, который сделал и сдал все в корректной форме.</li>
              <li>Если, по какой либо причине, вы  не можете быть самозанятым, либо у вас нет ИП, вам необходимо один раз за сезон донести данную информацию и причины до командира инструкторов. Каждый раз это делать не нужно.</li>
              <li>Если есть вопросы, касательно заполнения документов, либо какие-либо другие, необходимо написать на почту юристам: lex@heroleague.com</li>
              <li>Оплата за мероприятие производится в течение месяца;</li>
              <li>Оплата по корпоративным взводам производится после того, как предоставят смету по выплатам. Оплата работы за мероприятие и смета по корпоративным взводам – это разные выплаты.</li>
            </ul>
            <img src={paymentData} alt="" />
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">3.	Система вознаграждения</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <td>Инструкторы 2022 года</td>
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
                  </tr>
                  <tr>
                    <td>Работа в фанзоне или иная помощь в день гонки</td>
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
                    <td>Инструкторы 2021 года и ранее</td>
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
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <td>Судейство на Чемпионатах ( без работы со взводом)</td>
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

              <table className="table table-dark table-striped">
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

            <div className="row">
              <img src={rewardSystem} alt="" />
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">4.	ГЛАВНЫЕ ДОКУМЕНТЫ ИНСТРУКТОРА/СУДЬИ</h2>
          </div>
          <div className="row">
            <h3 className="header-block">
              Все травмы необходимо регистрировать у медиков только в день гонки, чтобы участники в случае необходимости получили выплаты. Если травма зарегистрирована на следующий день или позднее, то это     не является страховым случаем !
            </h3>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};