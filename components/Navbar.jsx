import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import * as AiIcons from 'react-icons/ai'
import { IconButton, Badge } from '@mui/material'


const Navbar = () => {
  return (
    <div className={`tracking-in-expand-fwd-top padding ${styles.container}`}>
      <div className={styles.logo}>
        <h2>Ku<b>isi</b>ne</h2>
      </div>
      <div className={styles.navMenu}>
        <Link passHref href='/'><li>Home</li></Link>
        <Link passHref href='/orders/list'><li>Menu</li></Link>
        <Link passHref href='#menu'><li>Order Now</li></Link>
        <Link passHref href='#footer'><li>Contact</li></Link>
      </div>
      <div className={styles.cta}>
        <IconButton aria-label='cart'>
          <Badge badgeContent={3} color='primary'>
            <AiIcons.AiOutlineShoppingCart/>
          </Badge>
        </IconButton>
        <Link href='/order/list' passHref><button className='heartbeat'>Pre-Order Now</button></Link>
      </div>
    </div>
  )
}

export default Navbar