import React from 'react';
import { LuAlignJustify } from "react-icons/lu";
import { CiSearch, CiBellOn  } from "react-icons/ci";
import { SlBubble } from "react-icons/sl";
import styles from '../styles/NavBar.module.css';

export default function NavBar({ setIsSiebar, isSiebar }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles['left-side']}>
        <LuAlignJustify 
            className={`${styles['align-icon']} ${ isSiebar ? 'ml-0 sm:ml-[250px]' : 'ml-0 sm:ml-[70px]' }`}
            onClick={() => setIsSiebar(!isSiebar)}
        />
        <p>Home</p>
        <p>Contact</p>
      </div>
      <div className={styles['left-side']}>
        <CiSearch 
            className={styles['search-icon']}
            onClick={() => console.log('search clicked')}
        />
        <SlBubble 
            className={styles['message-icon']} 
        />
        <CiBellOn  
            className={styles['bell-icon']} 
        />
      </div>
    </section>
  )
}
