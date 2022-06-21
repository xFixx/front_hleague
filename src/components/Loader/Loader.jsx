import React from 'react'
import style from './Loader.module.scss'

const Loader = ({ size }) => {
  return (
    <div className={style.loader} style={{ width: size, height: size , minWidth: size, minHeight: size }}></div>
  )
}

export default Loader
