import Image from 'next/image'
import React, {memo} from 'react'
import styles from '../../styles/Slideshow.module.css'
import * as FaIcons from 'react-icons/fa'

const FoodCard = ({image, title, accompany, price}) => {
  return (
    <div className={`${styles.foodContainer}`}>
        <div className={styles.foodImage}>     
            <Image className='kenburns-top' src={image} alt='food' />
        </div>
        <h4>{title}</h4>
        <p>{accompany}</p>
        <b>{price}</b>
        <div className={styles.purchase}>
         <button type='button' aria-label='Buy Food'> <FaIcons.FaPizzaSlice style={{marginRight: '7px'}} fontSize={20} />
          Buy Food</button>
        </div>
    </div>
  )
}

export default memo(FoodCard)