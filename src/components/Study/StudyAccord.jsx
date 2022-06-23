import React, { useEffect, useState } from 'react'
import {NotificationManager} from 'react-notifications';
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import cls from './study.module.scss'
import { Link, useHistory } from 'react-router-dom'
import { $api } from '../../services/api'
import { getCourseBackgroundImage } from '../../helpers'
import { EXAMS_ORDER } from '../../constants'
import { Modal } from 'components/Modal'

const getCategories = async () => {
  try {
    const { data } = await $api.get('categories/')
    return data
  } catch (e) {
    console.log(e)
  }
}

const getUserExams = async () => {
  try {
    const {data} = await $api.get('/exams/user-exams/');
    return data;
  } catch (e) {
    console.log(e);
  }
}

const EXAMS_LINKS = {
  1: '/instructor-privileges',
  2: '/assignment-and-standarts',
  3: '/instructors',
  4: '/volunteers',
  5: '/regulations',
  8: '/selection-and-payments',
}

const StudyAccord = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([])
  const [examsPassed, setExamsPassed] = useState([]);
  const [isWaringOpen, setIsWarningOpen] = useState(false);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
    getUserExams().then(res => {
      setExamsPassed(res);
    });
  }, []);

  return (
    <div className={cls.StudyAccord}>
      {categories.map(({ title, exams }) => {
        return (
          <>
            <Modal
              isOpen={isWaringOpen}
              onRequestClose={() => { setIsWarningOpen(false); }}
            >
              <h2 className="header-section">Вы успешно завершили данное тестирование!</h2>
              <Link>
                <button
                  className={cls.btnOk}
                  onClick={() => { setIsWarningOpen(false); }}
                >
                  OK
                </button>
              </Link>
            </Modal>
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
                <p></p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={cls.accordDetail}>
              <div className={cls.bottom}>
                {EXAMS_ORDER.map((examId) =>
                  exams.find(({ id }) => id === examId)
                ).map(exam => {
                  return (
                    <div className={cls.details} key={exam.id}>
                      <div className={cls.detailImg}>
                        <img src={getCourseBackgroundImage(exam.id)} alt="" />
                        <p>{exam.title}</p>
                      </div>
                      <div className={cls.detailInfo}>
                        <div className={cls.days}>
                          <h3>{exam.title}</h3>
                        </div>
                        <div className={cls.detailLine} />
                        <div className={cls.btns}>
                          <Link to={EXAMS_LINKS[exam.id]}>
                            <button className={cls.btn1}>Пройти курс</button>
                          </Link>
                            <button
                              className={cls.btn2}
                              onClick={() => {
                                debugger;

                                const isPassed = examsPassed.find(e => e.exam === exam.id && e.passed);
                                const count = examsPassed.filter(e => e.exam === exam.id).length || 0;

                                if (isPassed) {
                                  setIsWarningOpen(true);
                                } else if (count > 4) {
                                  NotificationManager.error(
                                    'Превышено количество попыток',
                                  );
                                } else {
                                  history.push(`/tests/${exam.id}?tries=${count}`);
                                }
                              }}
                            >
                              Пройти тест
                            </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </>
        )
      })}
    </div>
  )
}

export default StudyAccord
