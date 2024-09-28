import React, { useState } from 'react';
import { LuAlignJustify } from "react-icons/lu";
import { CiSearch, CiBellOn  } from "react-icons/ci";
import { SlBubble } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import styles from '../styles/NavBar.module.css';

const langs = [
  { key: 'en', value: 'EN'},
  { key: 'hk', value: 'HK'},
  { key: 'th', value: 'TH'},
]

export default function NavBar({ setIsSidebar, isSidebar }) {
  const [ isSearch, setIsSearch ] = useState(false);

  return (
    <section className={styles.wrapper}>
      {
        isSearch ? (
          <div className={styles['search-container']}>
            <div className={`${styles['search-box']} ${ isSidebar ? 'ml-0 sm:ml-[250px]' : 'ml-0 sm:ml-[70px]' }`}>
              <input 
                type="text"
                placeholder='Search'
                className={styles['search-input']}
              />
              <RiSearchLine 
                className={styles['search-btn']} 
                onClick={() => alert('Searching')}
              />
              <MdClose 
                className={styles['search-close']} 
                onClick={() => setIsSearch((prev) => !prev)}
              />
            </div>
          </div>
        ) : (
          <>
            <div className={styles['left-side']}>
              <LuAlignJustify 
                  className={`${styles['align-icon']} ${ isSidebar ? 'ml-0 sm:ml-[250px]' : 'ml-0 sm:ml-[70px]' }`}
                  onClick={() => setIsSidebar(!isSidebar)}
              />
              <p>Home</p>
              <p>Contact</p>
            </div>
            <div className={styles['right-side']}>
              <CiSearch 
                  className={styles['search-icon']}
                  onClick={() => setIsSearch(true)}
              />
              <SlBubble 
                  className={styles['message-icon']} 
              />
              <CiBellOn  
                  className={styles['bell-icon']} 
              />
              <div className='static'>
                <select className={styles.langs}>
                  {
                    langs.map((item, key) => {
                      return (
                        <option 
                          value={item.key} 
                          key={key}
                        >{item.value}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
          </>
        )
      }
    </section>
  )
}
