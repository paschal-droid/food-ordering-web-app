import React from 'react'
import styles from '../styles/Footer.module.css'
import * as GiIcons from 'react-icons/gi'
import * as RiIcons from 'react-icons/ri'

const Footer = () => {
  return (
    <div className={`padding ${styles.container} `} id='footer' >
        <div className={styles.services}>
          <h3>Our Services</h3>
          <p>Food Delivery <GiIcons.GiDeliveryDrone fontSize={20} style={{marginLeft: '7px'}}  /></p>
          <p>Cook Varieties of Food Items <GiIcons.GiFastNoodles fontSize={20} style={{marginLeft: '7px'}} /></p>
          <p>24/7 customer care Services <RiIcons.RiCustomerService2Line fontSize={20}  style={{marginLeft: '7px'}}  /> </p>
        </div>
        <div className={styles.about}>
          <h3>Our branches</h3>
          <p>24B, Crusader Block Hoffenham Close, Berlin </p>
          <p>1779 glock street post Block C, Shieffield, UK</p>
          <p>17 Empire State, Liberty Block NY</p>
        </div>
        <div className={styles.contact}>
          <h3>Contact us Via <GiIcons.GiRotaryPhone style={{marginLeft: '7px'}}  /></h3>
          <p>kuisineeatery@admin.com</p>
          <p>+1-8000-000</p>
          <p>kuisineetery.io</p>
        </div>
    </div>
  )
}

export default Footer