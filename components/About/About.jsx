import React from 'react'
import Image from 'next/image'
import order from '../../public/img/svgs/order.png'
import guarantee from '../../public/img/svgs/guarantee.png'
import delivery from '../../public/img/svgs/delivery.png'

import styles from '../../styles/About.module.css'

const About = () => {
  return (
    <div className={`padding ${styles.container}`}>
        <div className={styles.title}>
            <p>what we serve</p>
            <h3>Your favourite food delivery patner</h3>
        </div>
        <div className={styles.features}>
            <div className={styles.featureCard}><Image src={order} alt='f-img' /> <p>Easy to Order</p> </div>
            <div className={styles.featureCard}><Image src={delivery} alt='f-img' /> <p>Fastest Delivery</p>  </div>
            <div className={styles.featureCard}><Image src={guarantee} alt='f-img' /> <p>Best Quality</p> </div>
        </div>
    </div>
  )
}

export default About