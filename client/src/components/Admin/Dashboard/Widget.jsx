import React from 'react'
import styles from './Widget.module.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';

function Widget() {
  return (
    <>
        <div className={styles.widget}>
            <div className={styles.left}>
                <span className={styles.title}>USERS</span>
                <span className={styles.counter}>3212</span>
                <span className={styles.link}>See all users</span>
            </div>
            <div className={styles.right}>
                <div className={styles.percentage}>
                    <KeyboardArrowUpIcon/>
                    20%
                </div>
                <PersonIcon className={styles.icon}/>
            </div>
        </div>
    </>
  )
}

export default Widget