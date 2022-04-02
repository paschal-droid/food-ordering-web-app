import React, { useState } from 'react'
import Image from 'next/image'
import { cheeseburger, size } from '../../components/imports'

import styles from '../../styles/Product.module.css'

const PlaceOrder = () => {
  const [size, setSize]  = useState(0)

  const foodData = {
    name: "Macho Hamburger",
    img: cheeseburger,
    price: [20.99, 34.50, 40.20],
    desc: 'Accompanied with sauce & quality beef to your taste'
  }


  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={foodData.img} objectFit='contain' alt='item' layout='fill' />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{foodData.name}</h1>
          <span className={styles.price}>${foodData.price[size]}</span>
          <span className={styles.desc}>${foodData.desc}</span>
          <h3>Select a size</h3>
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => setSize(0)}>
              <Image src={size} alt='size'  />
              <span>Small</span>
            </div>
            <div className={styles.size} onClick={() => setSize(1)}>
              <Image src={size} alt='size' />
              <span>Medium</span>
            </div>
            <div className={styles.size} onClick={() => setSize(2)}>
              <Image src={size} alt='size' />
              <span>Large</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder