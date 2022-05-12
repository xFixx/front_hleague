import React, { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import style from './stuff.module.scss'
import CloseIcon from '@mui/icons-material/Close'
import JudjeImage from '../../img/sudya.png'
import InstructorImage from '../../img/instruktor.png'
import TrainerImage from '../../img/trener.png'
import VolunteerImage from '../../static/img/heroPhotoPng.png'

const judge = {
  id: 1,
  img: JudjeImage,
  mainColor: '#E83838',
  title: 'Судья',
  desc: 'Это гарант объективных результатов\n' + 'спортивного мероприятия.',
  tasks: [
    'Контроль соблюдения и оценка техники прохождения препятствий',
    'Контроль соблюдения регламента соревнований',
    'Ведение судейского протокола',
  ],
  criterion: {
    criterions: [
      'Действующий инструктор, волонтер или тренер',
      'Имеющий положительную оценку работы в рамках вверенных задач',
    ],
    important: 'Подтверждение квалификации перед каждым соревнованием',
  },
  exp: {
    title: 'В качестве судьи ты сможешь:',
    exps: [
      'Критически мыслить в спорных ситуациях',
      'Свободно ориентироваться в правилах проведения и регламентах',
    ],
    subtitle:
      'Ежегодно судьи проходят обучение и повышают квалификацию. Это позволяет поддерживать из сезона в сезон высокий уровень компетенций.',
  },
  study: {
    title: 'Ты должен пройти обучение и сдать контрольные задания:',
    steps: [
      'Ты должен пройти обучение и сдать контрольные задания:',
      'Курс судейства на препятствиях и комплексах',
      'Оказание первой помощи',
      'Регламент чемпионата',
    ],
  },
}

const Instructor = {
  id: 2,
  img: InstructorImage,
  mainColor: '#E83838',
  title: 'Инструктор',
  desc: 'Это лидер группы, который всегда объективно оценит обстановку, найдет нужные слова и поможет участнику поверить в свои силы.',
  tasks: [
    'Контроль безопасности участников на трассе',
    'Поддержание физического и эмоционального состояния участников',
  ],
  criterion: {
    criterions: ['Спортивные парни и девушки от 18 лет', 'Коммуникабельность'],
    important: 'Опыт участника Гонки Героев, сдача физических нормативов.',
  },
  exp: {
    title: 'Мы научим и отработаем все необходимые навыки:',
    exps: [
      'Безопасность на спортивных ивентах',
      'Эмоциональная поддержка участников',
      'Оказание первой помощи',
      'Командообразование и работа в команде',
    ],
    subtitle:
      'Мы ждем активных парней и девушек от 18 лет, которые хотят развиваться в спорте, проводить соревнования международного уровня и получать от этого удовольствие.',
  },
  study: {
    title: 'Ты должен пройти обучение и сдать контрольные задания:',
    steps: [
      'История компании',
      'Структура команды',
      'Оказание первой помощи',
      'Командообразование',
    ],
  },
}

const Trainer = {
  id: 3,
  img: TrainerImage,
  mainColor: '#0163F3',
  title: 'Тренер',
  desc: 'Это наставник, который всегда поддержит, обеспечит знаниями и навыками и поможет сохранить мотивацию.',
  tasks: [
    'Составление тренировочного плана',
    'Проведение тренировок',
    'Контроль безопасности',
    'Индивидуальный подход в группе',
  ],
  criterion: {
    criterions: [
      'Профессиональная квалификация тренера (любой вид спорта)',
      'Опыт участия в проектах Лиги Героев',
      'Желание профессионального роста',
    ],
    important: 'Опыт участника Гонки Героев, сдача физических нормативов.',
  },
  exp: {
    title: 'Ты получишь свободу мысли:',
    exps: [
      'Самостоятельно составлять план тренировок от запросов группы',
      'Возможность тренировать в первоклассных залах и на открытых площадках',
      'Проводить тренировочные кэмпы в разных уголках нашей страны и мира',
    ],
    subtitle:
      'Для тренеров подготовлена программа обучения и постоянные возможности развития и повышения квалификации.',
  },
  study: {
    title: 'Ты должен пройти обучение и сдать контрольные задания:',
    steps: [
      'История компании',
      'Базовые основы проведения тренировок Лиги Героев',
      'Оказание первой помощи',
      'Повышения квалификации',
    ],
  },
}

const Volunteer = {
  id: 4,
  img: VolunteerImage,
  mainColor: '#E83838',
  title: 'Волонтер',
  desc: 'Волонтер обеспечит любой информацией и подарит необъятную дружескую поддержку.',
  tasks: [
    'Помощь в решении стандартных вопросов и поддержка участников на протяжении всего мероприятия',
  ],
  criterion: {
    criterions: [
      'Активные парни и девушки от 16 лет',
      'Доброжелательность',
      'Ответстввенность',
      'Желание профессионального роста',
    ],
    important: 'Опыт участника Гонки Героев, сдача физических нормативов.',
  },
  exp: {
    title: 'В начале пути ты получишь',
    exps: [
      'Опыт, который станет стартом твоей карьеры',
      'Знакомства с единомышленниками и будущими коллегами',
      'Понимание, как устроена организация спортивных мероприятий',
    ],
    subtitle:
      'Многие из наших волонтеров продолжили обучение и выросли в инструкторов, судей и тренеров. У тебя тоже есть шанс, если ты позитивный, общительный и горишь желанием построить карьеру в спорте.',
  },
  study: {
    title: 'Ты должен пройти обучение и сдать контрольные задания:',
    steps: [
      'История компании',
      'Структура команды',
      'Функции волонтера',
      'Работа с конфликтами',
    ],
  },
}

const StuffModal = ({ role, handleClose, open }) => {
  const [activeRole, setActiveRole] = useState(null)
  const [checkBox, setCheckBox] = useState(false)

  const activeRoleMemo = useMemo(() => {
    switch (role) {
      case 'judge':
        setActiveRole(judge)
        break
      case 'instructor':
        setActiveRole(Instructor)
        break
      case 'trainer':
        setActiveRole(Trainer)
        break
      case 'volunteer':
        setActiveRole(Volunteer)
        break
      default:
        setActiveRole({})
        break
    }
  }, [role])
  return (
    <div>
      {!!activeRole && (
        <Modal
          sx={{ overflow: 'auto' }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={style.modalBlock}>
            <Button
              sx={{ background: '#E83838' }}
              onClick={() => handleClose()}
              className={style.closeBtn}
            >
              <CloseIcon />
            </Button>
            <Box className={style.header}>
              <p className={style.vacanсу}>Вакансия</p>
              <Box className={style.content}>
                <h2>{activeRole.title}</h2>
                <p>{activeRole.desc}</p>
              </Box>
            </Box>
            <Box
              sx={{ background: activeRole.mainColor }}
              className={style.tasksBlock}
            >
              <h2>Задачи</h2>
              <Box className={style.steps}>
                {activeRole?.tasks.map((item, index) => (
                  <Box key={index} className={style.step}>
                    <span
                      style={{
                        background: '#fff',
                        color: activeRole.mainColor,
                      }}
                    >
                      {index + 1}
                    </span>
                    <p>{item}</p>
                  </Box>
                ))}
                <img
                  className={`${style.roleImg} ${style.roleImg}${activeRole.id}`}
                  src={activeRole.img}
                  alt="role img"
                />
              </Box>
            </Box>
            <Box className={style.criterion}>
              <h2>Критерии отбора:</h2>
              <Box className={style.steps}>
                {activeRole.criterion.criterions.map((item, index) => (
                  <Box key={index} className={style.step}>
                    <span
                      style={{
                        background: activeRole.mainColor,
                        color: '#fff',
                      }}
                    >
                      {index + 1}
                    </span>
                    <p>{item}</p>
                  </Box>
                ))}
              </Box>
              <Box className={style.important}>
                <h4 style={{ color: activeRole.mainColor }}>
                  Обязательное требование:
                </h4>
                <p>{activeRole.criterion.important}</p>
              </Box>
            </Box>
            <Box className={style.exp}>
              <h2>{activeRole.exp.title}</h2>
              <Box className={style.steps}>
                {activeRole.exp.exps.map((item, index) => (
                  <Box key={index} className={style.step}>
                    <span
                      style={{
                        background: '#fff',
                        color: activeRole.mainColor,
                      }}
                    >
                      {index + 1}
                    </span>
                    <p>{item}</p>
                  </Box>
                ))}
              </Box>
              <h4>{activeRole.exp.subtitle}</h4>
            </Box>
            
          </Box>
        </Modal>
      )}
    </div>
  )
}

export default StuffModal
