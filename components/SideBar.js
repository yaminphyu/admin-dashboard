/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react';
import styles from '../styles/SideBar.module.css';
import Image from 'next/image';
import { RiSearchLine } from 'react-icons/ri';
import { sideBars } from '@/config';
import useCurrentRoute from '@/hook/useCurrentRoute';


export default function SideBar({ setIsSidebar, isSidebar, width }) {
  const router_name = useCurrentRoute();

  console.log('router_name >>> ', router_name);
  
  const sideBarRef = useRef(null);

  useEffect(() => {
    if (width > 640) return;

    // Function to handle click outside the div
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        console.log("Clicked outside of the div!");
        // Add your custom logic here
        setIsSidebar(!isSidebar);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [width]);

  return (
    <section 
      className={`${styles.wrapper} ${ isSidebar ? 'w-[250px]' : 'w-0 sm:w-[70px]' }`}
      ref={sideBarRef}
    >
      <div
        className={styles.header}
      >
        <Image 
          src={`/logo.png?version=${process.env.APP_VERSION}`}
          width={35}
          height={35}
          alt='logo'
          className={`${isSidebar ? '' : 'mr-3'}`}
        />
        <h1 
          className={styles.title}
          onClick={() => alert('hello world')}
        >Admin Site</h1>
      </div>
      <div
        className={styles.personal}
      >
        <Image 
          src={`/person.png?version=${process.env.APP_VERSION}`}
          width={35}
          height={35}
          alt='person'
          className={`${isSidebar ? '' : 'mr-3'}`}
        />
        <h1 
          className={styles['account-user']}
          onClick={() => alert('hello world')}
        >Alexander Pierce</h1>
      </div>
      {
        isSidebar ? (
          <div
            className={styles.search}
          >
            <input 
              type="text" 
              placeholder='Search' 
              className={styles['search-input']}
            />
            <RiSearchLine 
              className={styles['search-btn']} 
              onClick={() => alert('Searching')}
            />
          </div>
        ) : null
      }
      <ul className={styles.list}>
        {
          sideBars.map((item, key) => {
            return (
              <>
                <li 
                  key={key}
                  className={`
                    ${styles.item}
                    ${item.path === router_name ? styles['item-active'] : ''}  
                  `}
                >
                  <span className={`${styles.icon} ${isSidebar ? '' : 'mr-3'}`}>{item.icon}</span>
                  {item.name}
                </li>
              </>
            )
          })
        }
      </ul>
    </section>
  )
}
