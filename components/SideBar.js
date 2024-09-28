import React, { useEffect, useRef } from 'react';
import styles from '../styles/SideBar.module.css';

export default function SideBar({ setIsSiebar, isSiebar, width }) {
  const sideBarRef = useRef(null);

  useEffect(() => {
    if (width > 640) return;

    // Function to handle click outside the div
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        console.log("Clicked outside of the div!");
        // Add your custom logic here
        setIsSiebar(!isSiebar);
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
      className={`${styles.wrapper} ${ isSiebar ? 'w-[250px]' : 'w-0 sm:w-[70px]' }`}
      ref={sideBarRef}
    >
      <h1>SideBar</h1>
    </section>
  )
}
