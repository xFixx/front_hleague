import MainLayout from "components/MainLayout/MainLayout";

import {
  Intro,
  BookingMechanics,
  PaymentData,
  RewardSystem,
} from "./components";

import cls from './mechanics-and-payments.module.scss';

export const PageMechanicsAndPayments = () => {
  return (
    <MainLayout>
      <main>
        <Intro className={cls.b__intro} />

        <BookingMechanics className={cls.b__bookingMechanics} />

        <PaymentData className={cls.b__paymentData} />

        <RewardSystem className={cls.b__rewardSystem} />

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
