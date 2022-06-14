import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import cls from './study.module.scss'
import { Link } from 'react-router-dom'
import { $api } from '../../services/api'
import { getCourseBackgroundImage } from '../../helpers'
import { EXAMS_ORDER } from '../../constants'

const getCategories = async () => {
  try {
    const { data } = await $api.get('categories/')
    return data
  } catch (e) {
    console.log(e)
  }
}

const EXAMS_LINKS = {
  1: '/instructor-privileges',
  2: '/assignment-and-standarts',
  3: '/instructors',
  4: '/volunteers',
  8: '/selection-and-payments',
}

const StudyAccord = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((res) => {
      debugger;
      setCategories(res);
    });
  }, [])

  return (
    <div className={cls.StudyAccord}>
      {categories.map(({ title, exams }) => {
        return (
          <Accordion className={cls.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={cls.icon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={cls.accordSum}
            >
              <Typography className={cls.top} component={'div'}>
                <h2>{title}</h2>
                <div className={cls.line} />
                <p>Курсы + тесты</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={cls.accordDetail}>
              <div className={cls.bottom}>
                {EXAMS_ORDER.map((examId) =>
                  exams.find(({ id }) => id === examId)
                ).map(({ id, title }) => {
                  return (
                    <div className={cls.details} key={id}>
                      <div className={cls.detailImg}>
                        <img src={getCourseBackgroundImage(id)} alt="" />
                        <p>{title}</p>
                      </div>
                      <div className={cls.detailInfo}>
                        <div className={cls.days}>
                          <h3>{title}</h3>
                        </div>
                        <div className={cls.detailLine} />
                        <div className={cls.btns}>
                          <Link to={EXAMS_LINKS[id]}>
                            <button className={cls.btn1}>Пройти курс</button>
                          </Link>
                          <Link to={`/tests/${id}`}>
                            <button className={cls.btn2}>Пройти тест</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default StudyAccord
