import { Link } from 'react-router-dom';
import cn from 'classnames';

import MainLayout from "../../components/MainLayout/MainLayout";
import { AvatarVolunteer } from '../../components/avatars';
import { AvatarFounder } from '../../components/avatars/AvatarFounder';
import { FOUNDERS_LIST, VOLUNTEERS_HIEARCHY } from './page-volunteer-const'

import imgPrevTeam from 'assets/prev-team.jpg';
import imgAims from 'assets/aims.png';
import imgRemember from 'assets/remember.jpg';
import imgFinalists from 'assets/finalists.jpg';

import cls from './page-volunteer.module.scss';

export const PageVolunteers = () => {
  return (
    <MainLayout>
      <main>
        <section className="container">
          <div className="row">
            <h1 className='header-page'>Кто такой волонтер?</h1>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <h3 className='header-block'>кто такой волонтер?</h3>
              <p>Волонтер -  это движущая сила любого мероприятия, часть одной большой команды.</p>
              <Link className='button'>Стать волонтером</Link>
            </div>

            <div className="col-sm-6">
              <h3 className="header-block">зачем становится волонтером?</h3>
              <p>Стань волонтёром Лиги Героев и приобрети бесценный опыт, новых друзей и единомышленников!</p>
            </div>
          </div>

          <div className="row">
            <div className="w-100">
              <img src={imgPrevTeam} alt="" />
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">
              Цели Волонтерского Центра лига  Героев:
            </h2>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li>Цели Волонтерского Центра лига  Героев:</li>
                <li>Проведение предварительной подготовки и обучения волонтеров перед мероприятиями</li>
                <li>Постоянное улучшение качества работы волонтеров на мероприятиях</li>
                <li>Ознакомление волонтеров с миссиями и целями проектов Лиги Героев</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Повышение уровня лояльности и преданности волонтеров к проектам Лиги Героев</li>
                <li>Обеспечение доступных условий для личностного роста волонтеров Центра</li>
                <li>Повышение внутренней мотивации и желания развиваться в активной команде</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="w-100">
              <img src={imgAims} alt="" />
            </div>
          </div>
        </section>

        <section className="container">
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

        <section className="container">
          <div className="row">
            <h2 className="header-section">помни</h2>
          </div>

          <div className="row">
            <img src={imgRemember} alt="" />
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">важно</h2>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li>Взаимодействовать с командой на равных;</li>
                <li>Получить назначение на оговоренную функцию;</li>
                <li>Получать оценку своей деятельности от координатора и руководителя Центра;</li>
                <li>Иметь возможность на приобретение новых знаний и навыков;</li>
                <li>Выражать свое мнение;</li>
                <li>Вносить предложения по улучшению и развитию проекта в целом и волонтерского центра в частности.</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Свой внешний вид;</li>
                <li>Эффективное использование времени и ресурсов;</li>
                <li>Соблюдение режима работы (если что-то изменилось – предупреди);</li>
                <li>Соблюдение техники безопасности;</li>
                <li>Выполнение поставленных тебе задач;</li>
                <li>Информирование команды о всех необычных инцидентах.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">Система лояльности</h2>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h3 className="header-block">бонусы</h3>

              <ul>
                <li>Первое качественное волонтерство – футболка, браслет и благодарность от команды Лиги Героев</li>
                <li>После 2 волонтерств на мероприятиях Лиги Героев с положительной оценкой, при условии продолжения волонтерской деятельности на мероприятиях до конца сезона – бесплатное посещение тренировок «Подготовка к Гонке Героев» с HeroLeagueTraining (1-2 раза в неделю)</li>
                <li>Качественное волонтерство на 3 мероприятиях «Гонка Героев» – волонтерский забег на Гонке Героев (18+)</li>
                <li>4 волонтерства и более (минимум отволонтерить 1 год) + положительная оценка координатора + проявление активности в сезоне– возможность стать судьей на препятствиях  или попробовать себя в роли старшего волонтера на функции</li>
                <li>Сувениры от Лиги Героев в конце сезона для особо отличившихся.</li>
                <li>Отличительная активность на мероприятиях в течение нескольких сезонах – жетон Почетного волонтера</li>
                <li>За 5 и более волонтерств в сезоне – значок «Волонтер Гонки Героев», в следующем сезоне, кто уже получил данный значок и отволонтерил также 5 и более мероприятий – значок «Волонтер Лиги Героев»</li>
                <li>Волонтерство в 3х разных городах – билет на гонку в категории масстарт в любом городе</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h3 className="header-block">АНТИБОНУСЫ</h3>

              <ul>
                <li>Неявка на мероприятие без оповещения –удаление из рядов волонтеров.</li>
                <li>Самовольное покидание мероприятия до завершающего брифинга без оповещения – исключение из волонтерского центра.</li>
                <li>Недобросовестное обращение с материальными ценностями Лиги Героев – изменение условий поощрения.</li>
                <li>Пассивный подход к выполнению поставленной задачи – смена задачи на менее значимую.</li>
                <li>Отказ от волонтерства меньше, чем за сутки – пропуск в статистике</li>
                <li>Отличительная активность на мероприятиях в течение нескольких сезонах – жетон Почетного волонтера</li>
                <li>Несогласованное с координатором участие в забеге в день волонтерства и без билета – исключение из волонтерского центра. </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">развитие волонтера в нашей команде</h2>
          </div>

          <div className="row">
            {VOLUNTEERS_HIEARCHY.map(position => (
              <div className="col-sm-2">
                <AvatarVolunteer
                  title={position.name}
                  imgUrl={position.img}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className="header-section">Функции волонтеров</h2>
          </div>
          <div className="row">
              <div className="col-lg-4">
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
              <div className="col-lg-4">
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
              <div className="col-lg-4">
                <div className="enum">
                  <div className="enum__number">03</div>
                  <h3 className="enum__title header-block">Полевая кухня</h3>
                  <ul>
                    <li>Контроль входа и выхода в зону кухни</li>
                    <li>Помощь в раздаче пищи</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="enum">
                  <div className="enum__number">04</div>
                  <h3 className="enum__title header-block">Старт</h3>
                  <ul>
                    <li>Выдача чипов хронометража</li>
                    <li>Организация стартовых коридоров</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
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
              <div className="col-lg-4">
                <div className="enum">
                  <div className="enum__number">06</div>
                  <h3 className="enum__title header-block">Пит-стопы</h3>
                  <ul>
                    <li>Раздача воды</li>
                    <li>Подбадривание участников</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="enum">
                  <div className="enum__number">07</div>
                  <h3 className="enum__title header-block">Сопровождение трассы</h3>
                  <ul>
                    <li>Контроль техники безопасности  на препятствиях</li>
                    <li>Подбадривание участников</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
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
              <div className="col-lg-4">
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

        <section className="container">
          <div className="row">
            <h2 className="header-section">Структура волонтерского центра</h2>
          </div>

          <div className="row">
            {FOUNDERS_LIST.map(founder => (
              <div className='col'>
                <AvatarFounder
                  img={founder.img}
                  name={founder.name}
                  position={founder.position}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="row">
            <h2 className={cn(cls.pageVolunteers__gratitude,'header-section')}>
              И самое главное – спасибо тебе, дорогой друг, что ты откликнулся на наш призыв присоединиться к нашей команде Волонтерского Центра Лиги Героев!
            </h2>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <p className={cls.pageVolunteers__gratitudeDesc}>
                Мы очень ценим твою помощь и готовы ответить тем же!<br />
                Пусть этот день будет в радость и оставит только хорошие воспоминания!
              </p>
              <p className={cls.pageVolunteers__gratitudeDesc}>Ты уже наш Герой!</p>
            </div>
          </div>

          <div className="row">
            <img src={imgFinalists} alt="" />
          </div>
        </section>
      </main>
    </MainLayout>
  );
};