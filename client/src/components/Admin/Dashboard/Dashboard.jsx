import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import styles from './Dashboard.module.css'

function Dashboard() {
  return (
      <>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.dashboardContainer}>container</div>
      </div>
        <NavBar />
      </>  
  )
}

export default Dashboard