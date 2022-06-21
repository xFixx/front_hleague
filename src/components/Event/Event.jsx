import React, { useEffect, useState } from 'react'
import cls from './event.module.scss'
import axios from 'axios'

let ev_link = "https://heroleague.ru/calendar";
let pic_url = "https://heroleague.ru";

const monthName = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Агуст',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const getEvents = async () => {
  try {
    const { data } = await axios.get('https://heroleague.ru/api/event/list')
    return data
  } catch (e) {
    console.log(e.response)
  }
}
const getEventDate = (unixDate) => {
  const date = new Date(unixDate * 1000)
  return `${date.getDate()} ${monthName[date.getMonth()]}`
}
// --------------------------------------------------
const Event = () => {
  const [readyEvents, setReadyEvents] = useState(null)
  const [events, setEvents] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date().getTime() / 1000)
  const memo = React.useMemo(() => {
    let current = []

    !!events &&
      events.map(({ title, event_city, title_above, external_url, event_type }) => {
        event_city.forEach((item) => {
          if (item.start_time >= currentDate)
            current.push({
              data: item.start_time,
              title,
              description: title_above,
              address: item.address,
              external_url,
              id: item.id,
              logo: pic_url + event_type.logo,
            })
        })
      })
    let readyData = current.sort((a, b) => a.data - b.data).splice(0, 10)
    setReadyEvents(readyData)
  }, [events])

  useEffect(async () => {
    getEvents().then((res) => {
      setEvents(res.values)
        // console.log(res.values)
    })
  }, [])

  
  return (
    <div className={cls.event}>
      <h1 className={cls.h1}>МЕРОПРИЯТИЯ</h1>
      <div className={cls.eventsList}>
        {readyEvents &&
          readyEvents?.map(
            ({
              id,
              data,
              title,
              description,
              address,
              external_url,
              banner,
              logo,
            }) => {
              return (
                <div
                  key={id}
                  className={cls.eventItem}
                  style={{
                    background: `url(${banner?.home_page?.desktop_picture})`,
                    backgroundSize: `cover`,
                  }}
                >
                  <img className={cls.name} alt="name" src={`${logo}`} />
                  <h2 className={cls.date}>{getEventDate(data)}</h2>
                  <p className={cls.desc}>{description}</p>
                  <p className={cls.city}>{address}</p>
                  <a
                    href={`${ev_link}`}
                    target={'_blank'}
                  >
                    <button className={cls.participate}>Принять участие</button>
                  </a>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}

export default Event
