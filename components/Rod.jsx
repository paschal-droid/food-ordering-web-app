import React from 'react'
import styles from '../styles/Header.module.css'


const Rod = ({color, top, bottom , right, left, transform}) => {

  return (
    <div className={styles.rod} style={{backgroundColor: color, top, bottom, right, left, transform}}></div>
  )
}

export default Rod

