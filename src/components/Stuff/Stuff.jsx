import styles from './stuff.module.scss'
import sudya from '../../img/sudya.png'
import inst from '../../img/instruktor.png'
import trener from '../../img/trener.png'
import volunteer from '../../img/volunteer.png'
import mask1 from '../../img/Mask-1.jpg'
import mask2 from '../../img/Mask-2.jpg'
import mask3 from '../../img/Mask-3.jpg'
import mask4 from '../../img/Mask-4.jpg'
import { useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import React from 'react'
import StuffModal from './StuffModal'

function go_to_vacancies () {
  var ua        = navigator.userAgent.toLowerCase(),
      isIE      = ua.indexOf('msie') !== -1,
      version   = parseInt(ua.substr(4, 2), 10),
      url       = "https://career.heroleague.ru/";

  // Internet Explorer 8 and lower
  if (isIE && version < 9) {
      var link = document.createElement('a');
      link.href = url;
      document.body.appendChild(link);
      link.click();
  }

  else { 
      window.location.href = url; 
  }
}


const stuffs = [
  {
    id: 'stuff-1',
    idName: 'judge',
    title: 'СУДЬЯ',
    description: 'Честность, профессионализм, внимательность',
    stuffAva: sudya,
    mask: mask1,
    color: '#FEEC4F',
    skills: [
      'Четко следует регламентам',
      'Оценивает прохождение препятствий\n',
      'Следит за выполением правил и беспристрастно выносит решения',
    ],
  },
  {
    id: 'stuff-2',
    idName: 'instructor',
    title: 'ИНСТРУКТОР',
    description: 'Поддержка, надежность, безопасность',
    stuffAva: inst,
    mask: mask2,
    color: '#80E396',
    skills: [
      'Следит за безопасностью участников',
      'Помогает преодолевать различные препятствия\n',
      'Найдет ключ к любой команде и зарядит каждого на победу',
    ],
  },
  {
    id: 'stuff-3',
    idName: 'trainer',
    title: 'ТРЕНЕР',
    description: 'Эффективность, безопасность, профессионализм',
    stuffAva: trener,
    mask: mask3,
    color: '#359AD2',
    skills: [
      'Находится в отличной форме',
      'Помогает достичь поставленных целей\n',
      'Имеет опыт преподавания в индивидуальных и групповых форматах',
    ],
  },
  {
    id: 'stuff-4',
    idName: 'volunteer',
    title: 'ВОЛОНТЕР',
    description: 'Поддержка, доброжелательность, ответственнность',
    stuffAva: volunteer,
    mask: mask4,
    color: '#FEEC4F',
    skills: [
      'Открыт к общению и всегда готов помочь',
      'Горит желанием развиваться в спортивной индустрии\n',
      'Поддерживает гостей и участников от начала и до конца мероприятия',
    ],
  },
]
// import required modules

export default function Stuff() {
  const isLaptop = useMediaQuery('(max-width: 1200px)')
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [seletedStuff, setSelectedStuff] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange = (stuff) => {
    setSelectedStuff(stuff)
    handleOpen()
  }
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>КТО ВАС ЖДЕТ</h2>

        <div className={styles.stuffsMainWrapper}>
          {isLaptop ? (
            // <div>
            <Swiper
              slidesPerView={isLaptop && !isMobile ? 2 : 1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {stuffs.map(
                ({
                  id,
                  title,
                  description,
                  stuffAva,
                  mask,
                  color,
                  skills,
                  idName,
                }) => (
                  <SwiperSlide key={`Stuffs-${id}`}>
                    <div className={styles.stuffsWrapper}>
                      <div className={styles.maskWrapper}>
                        <div
                          className={styles.mask}
                          style={{ backgroundImage: `url('${mask}')` }}
                        />
                        <img src={stuffAva} alt="" />
                      </div>
                      <div className={styles.contentWrapper}>
                        <p className={styles.stuffSkillTitle}>{title}</p>
                        <p className={styles.stuffSkillDesc}>{description}</p>
                        <ul className={styles.skills}>
                          {skills.map((skill) => (
                            <li
                              className={styles.skill}
                              key={`stuffsSkills-${id}-${skill}`}
                            >
                              <div
                                className={styles.circle}
                                style={{ backgroundColor: color }}
                              />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={go_to_vacancies}
                          className={styles.moreBtn}
                        >
                          Подробнее
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          ) : (
            // </div>
            stuffs.map(
              ({
                id,
                title,
                description,
                stuffAva,
                mask,
                color,
                skills,
                idName,
              }) => (
                <div key={`Stuffs-${id}`} className={styles.stuffsWrapper}>
                  <div className={styles.maskWrapper}>
                    <div
                      className={styles.mask}
                      style={{ backgroundImage: `url('${mask}')` }}
                    />
                    <img src={stuffAva} alt="" />
                  </div>
                  <div className={styles.contentWrapper}>
                    <p className={styles.stuffSkillTitle}>{title}</p>
                    <p className={styles.stuffSkillDesc}>{description}</p>
                    <ul className={styles.skills}>
                      {skills.map((skill) => (
                        <li
                          className={styles.skill}
                          key={`stuffsSkills-${id}-${skill}`}
                        >
                          <div
                            className={styles.circle}
                            style={{ backgroundColor: color }}
                          />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={go_to_vacancies}
                      className={styles.moreBtn}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>

      {seletedStuff === 'judge' && (
        <StuffModal handleClose={handleClose} open={open} role={'judge'} />
      )}
      {seletedStuff === 'instructor' && (
        <StuffModal handleClose={handleClose} open={open} role={'instructor'} />
      )}
      {seletedStuff === 'trainer' && (
        <StuffModal handleClose={handleClose} open={open} role={'trainer'} />
      )}
      {seletedStuff === 'volunteer' && (
        <StuffModal handleClose={handleClose} open={open} role={'volunteer'} />
      )}
    </>
  )
}
