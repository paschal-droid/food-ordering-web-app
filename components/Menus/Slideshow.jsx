import React, {memo} from 'react'
import { junks, indian, dessert, breakfast, rooniza, cheesza, cheeseburger, pizza } from '../imports'
import styles from '../../styles/Slideshow.module.css'
import FoodCard from './FoodCard'

const Slideshow = () => {
  return (
   <div className={`padding ${styles.container}`} id='menu'>
     <h1>Our Specials</h1>
     <div className={` ${styles.specials}`}>
        <FoodCard price='$ 29.99' image={rooniza} title='Pepperoni Pizza' accompany='with pepperoni and beef' />
        <FoodCard price='$ 59.99' image={pizza} title='Basel Pizza' accompany='accompanied with sauce & spices'  />
        <FoodCard price='$ 40.45' image={cheesza} title='Cheese Pizza' accompany='with ricotta cheese and hot sauce' />
        <FoodCard price='$ 40.45' image={junks} title='Fries' accompany='deeped in peruvian hot sauce' />
     
        <FoodCard price='$ 199.99' image={dessert} title='Chocolate dessert' accompany='In different flavours' />
        <FoodCard price='$ 276.67' image={indian} title='Paratas' accompany='Straight from india' />
        <FoodCard price='$ 250.45' image={cheeseburger} title='Cheese Burger' accompany='You already know is yummy!!' />
        <FoodCard price='$ 60.99' image={breakfast} title='Brunch' accompany='A meal to start your day' />

     </div>
   </div>
  )
}

export default memo(Slideshow)