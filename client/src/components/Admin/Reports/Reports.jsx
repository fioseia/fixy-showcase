import React from 'react'
import SideBar from '../Dashboard/SideBar'
import styles from './Reports.module.css'

function Reports() {
  return (
    <>
        <div className={styles.reports}>
            <SideBar />
            <div className={styles.reportsContainer}>
                <div>Reports</div>
            </div>
        </div>
    </>
  )
}

export default Reports