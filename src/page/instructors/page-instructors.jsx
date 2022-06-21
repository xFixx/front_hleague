import cn from 'classnames';

import MainLayout from "components/MainLayout/MainLayout";
import { CareerRoadmap } from './components/career-roadmap';

import {
  GeneralInformation,
  ProjectHistory,
  InstructorTasks,
  QualityControlSystem,
  CodeOfHonor,
  MainDocuments,
} from './components';


import imgSeeYou from 'assets/see-you.jpg';

import cls from './page-instructors.module.scss';

export const PageInstructors = () => {
  return (
    <MainLayout>
      <main>
        <GeneralInformation className={cls.page__intro} />

        <ProjectHistory className={cls.page__projectHistory} />

        <InstructorTasks className={cls.page__instructorTasks} />

        <section className={cn(cls.page__carierRoadMap, 'container')}>
          <div className="row">
            <h2 className="header-section">кандидат-стажёр → ИНСТРУКТОР</h2>
          </div>

          <div className="row">
            <CareerRoadmap />
          </div>
        </section>

        <QualityControlSystem className={cls.page__qualityControlSystem}/>

        <MainDocuments className={cls.page__mainDocuments} />

        <section className={cn(cls.page__formsOfInteraction, 'container')}>
          <div className="row">
            <div className="col">
              <h2 className="header-section">Формы взаимодействия</h2>
              <ul>
                <li>Основная информация публикуется в инструкторскй группе Вконтакте «Инструкторы Гонки Героев», vk.com/herorace_profi;</li>
                <li>Из основной группы вся информация дублируется в чат Телеграмм, https://t.me/joinchat/S70sDXJ0RIEzFu1B (всем необходимо установить);</li>
                <li>Есть новость или предложение? Хотите рассказать всем инструкторам? Тогда можно сделать пост в виде публикация в нашей группе Вконтакте, для этого необходимо согласовать размещение с командиром инструкторов, только после этого подготовим пост и добавим в группу. Самостоятельно размещенные посты в группе будут удалены. За спам-рассылки в чате Телеграмм инструкторы получают «Выговор»;</li>
                <li>Комментируйте публикации, участвуйте в опросах размещенных в группе Вконтакте и в чате Телеграмм. На основании ваших ответов мы сможем стать ещё лучше, делитесь своими мыслями, критикуйте, предлагайте;</li>
                <li>Если что-то срочное или личное – звоните Командиру Инструкторов, всегда поможем и подскажем!</li>
              </ul>
            </div>
          </div>
        </section>

        <CodeOfHonor className={cls.page__codeOfHonor} />

        <section className={cn('container')}>
          <div className="row">
            <h2 className="header-section">ДО ВСТРЕЧИ НА МЕРОПРИЯТИЯХ, КОМАНДА!</h2>
            <img src={imgSeeYou} alt="" />
          </div>
        </section>
      </main>
    </MainLayout>
  )
}