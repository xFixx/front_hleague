import React, { useState, useEffect } from 'react'
import cls from './test.module.scss'
import { Formik } from 'formik'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import {Modal} from '../Modal';

import first from '../../img/1.jpg'
import * as Yup from 'yup'
import { $api } from '../../services/api'
import { Link, useLocation, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const getQuestions = async (id) => {
  try {
    const { data } = await $api.get(`/exams/exams/${id}/`)
    return data
  } catch (e) {
    console.log(e)
  }
}

const mapAnswers = (data, answers) => ({
  exam: data.id,
  user_answers: data.questions.map(question => {
    if (question.question_type === 'R') {
      return {
        question: question.id,
        answer: answers[question.id],
      };
    } else {
      return {
        question: question.id,
        check_boxes:  answers[question.id].map(answerId => ({
          answer: answerId,
        })),
      }
    }
  })
})

const Tests = () => {
  const location = useLocation();
  const tries = +(new  URLSearchParams(location.search.slice(1))).get('tries') || 0;

  debugger;

  const [initialValues, setInitialValues] = useState(null)
  const [data, setData] = useState(null)
  const { id } = useParams();

  const [isOpenCongratulationsModal, setIsOpenCongratulationsModel] = useState(false);
  const [isOpenFailModal, setIsOpenFailModal] = useState(false);
  const [isOpenTryModal, setIsOpenTryModal] = useState(true);

  const [correct, setCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    getQuestions(id).then((res) => {
      setInitialValues(
        res?.questions?.reduce((state, { id }) => {
          return { ...state, [id]: null }
        }, {})
      )
      setData(res)
    })
  }, [id])

  const validateSchema = data
    ? Yup.object().shape(
        data?.questions?.reduce((state, { id }) => {
          return {
            ...state,
            [id]: Yup.mixed()
              .typeError('обязательно')
              .test('value validate', 'обязательно', (value) => {
                return value?.length >= 1
              }),
          }
        }, {})
      )
    : null

  console.log({ data, initialValues });

  return (
    <div className={cls.Test}>
      <Modal
        isOpen={isOpenTryModal}
        onRequestClose={() => { setIsOpenTryModal(false); }}
      >
        <h2 className='header-section'>На прохождение теста у вас есть 3 попытки.</h2>
        <h3 className='header-block'>Сейчас у вас осталось {3 - tries}</h3>
      </Modal>
      <Modal
        isOpen={isOpenCongratulationsModal}
        onRequestClose={() => setIsOpenCongratulationsModel(false)}
      >
        <h2 className='header-section'>Поздравляем, тест сдан!</h2>
        <h2 className='header-block'>Вы правильно ответили на {correct} из {totalQuestions}.</h2>
          
        <Link to='/training'>
          <button className={cls.btn1}>OK</button>
        </Link>
      </Modal>
      <Modal
        isOpen={isOpenFailModal}
        onRequestClose={() => setIsOpenFailModal(false)}
      >
        <h2 className='header-section'>Тест не сдан.</h2>
        <h2 className='header-block'>Вы правильно ответили на {correct} из {totalQuestions}, что составляет менее 80%.</h2>
      </Modal>
      <p className={cls.direction}>Главная Тест</p>
      <h2 className={cls.pageName}>ТЕСТ</h2>
      <h1 className={cls.pageDesc}>{data?.title}</h1>
      {initialValues && data && (
        <Formik
          onSubmit={async (values) => {
            console.log(values);

            try {
              const response = await $api.post('/exams/user-exams/', mapAnswers(data, values));
              const {passed, statistic} = response.data;

              setCorrect(statistic.correct);
              setTotalQuestions(statistic.total_questions);

              if (passed) setIsOpenCongratulationsModel(true);
              if (!passed) setIsOpenFailModal(true);

            } catch (err) {
              console.log(err);
            }
          }}
          validationSchema={validateSchema}
          initialValues={initialValues}
          style={{ display: 'flex', flexDirection: 'column', gridGap: 100 }}
        >
          {({ values, touched, errors, setFieldValue, handleSubmit }) => {
            const handleChange = (type, questionId, answerId) => {
              // проверка на тип вопроса
              if (type === 'R') {
                // задаем значение radio вопроса, тут просто идет замена старого значения на новый
                setFieldValue(questionId, answerId)
              } else if (type === 'C') {
                // ПРОВЕРКА НА НАЛИЧИЕ ОТВЕТА (null или все таки есть значение)
                if (values[questionId]) {
                  // проверяем на наличие прилетевшего ответа в массиве, типа id ответа уже был в массиве или нет
                  if (values[questionId].some((ansId) => ansId === answerId)) {
                    // тут мы убираем уже бывший ответ, если он был нажат, тоесть если пользователь нажал на включенный чекбокс, чтобы выключить
                    setFieldValue(
                      questionId,
                      values[questionId].filter((ansId) => ansId !== answerId)
                    )
                  } else {
                    // мы тут просто собираем всех и добавляем новый ответ в массив
                    setFieldValue(questionId, [...values[questionId], answerId])
                  }
                } else {
                  setFieldValue(questionId, [answerId])
                }
              }
            }

            return (
              <form onSubmit={handleSubmit}>
                {data?.questions?.map(
                  (
                    { id, question_type, answers, title, attachment_file },
                    index
                  ) => {
                    return (
                      <div
                        style={{ display: 'flex' }}
                        className={cls.testBlock}
                        key={id}
                      >
                        {attachment_file ? (
                          <img
                            src={attachment_file}
                            alt="img"
                            className={cls.Img}
                          />
                        ) 
                        : (
                          <Loader size={'0px'} />
                        )
                        }
                        <div className={cls.testQues}>
                          <div>
                            <h2 className={cls.count}>{++index}</h2>
                            <div className={cls.line} />
                            <p className={cls.question}>
                              {title} 
                              <span className={cls.attention}>
                                {question_type === 'R'
                                  ? ' (выберите 1 вариант ответа)'
                                  : ' (несколько вариантов ответа)'}
                              </span>{' '}
                            </p>{' '}
                            <br />
                          </div>
                          <FormControl
                            onChange={(e) =>
                              handleChange(question_type, id, e.target.value)
                            }
                            className={cls.form}
                          >
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                            >
                              {answers.map(({ id: qId, title }) => (
                                <div>
                                  <FormControlLabel
                                    key={qId}
                                    value={qId}
                                    className={cls.answer}
                                    control={
                                      question_type === 'R' ? (
                                        <Radio className={cls.radio} />
                                      ) : (
                                        <Checkbox className={cls.checkbox} />
                                      )
                                    }
                                    label={title}
                                  />
                                </div>
                              ))}
                            </RadioGroup>
                            {/* {console.log("touched",id,touched[id],"errors",id,errors[id])} */}
                            {touched[id] && errors[id] ? (
                              <p style={{ color: 'red' }}>{errors[id]}</p>
                            ) : (
                              ''
                            )}
                          </FormControl>
                        </div>
                      </div>
                    )
                  }
                )}
                <button type={'submit'} className={cls.btn}>
                  Отправить результаты
                </button>
              </form>
            )
          }}
        </Formik>
      )}
    </div>
  )
}

export default Tests
