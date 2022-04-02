import React, {memo} from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { cheeseburger, people } from './imports'
import * as HiIcons from 'react-icons/hi'
import Rod from './Rod'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={`padding ${styles.container}`}>
        <div className={`tracking-in-expand-fwd-top ${styles.headerText}`}>
            <h1>it&apos;s not just Food, It&apos;s an Experience.</h1>
            <div className={` ${styles.buttonGroup}`}>
                <button><Link href='/Cart'>View Menu</Link></button>
                <Link href='/order/menu' passHref><button>Place an order</button></Link>
            </div>
            <div className={styles.review}>
                <p>Reviews <HiIcons.HiStar color='gold' fontSize={40} />  </p>
                <div className={styles.reviewImgContainer}><Image src={people} alt='reviews' /></div>
            </div>
        </div>
        <div className={styles.headerImageContainer}>
            <Rod top='-20px' color='green'></Rod>
            <Rod top='-20px' transform='rotate(-60deg)' color='red'></Rod>
            <div className={`bounce-top ${styles.tips}`}>
                <span><HiIcons.HiOutlineBadgeCheck /></span>
                <span>5%</span>
                <br />
                <span><b>Discount</b> for 2 orders</span>
            </div>
            <Image  className='kenburns-top' src={cheeseburger} alt='food' />
            <Rod bottom='-20px' left='0' color='yellow' />
            <Rod bottom='-20px' left='0' color='purple' transform='rotate(-60deg)' />
        </div>
    </div>
  )
}

export default memo(Header)