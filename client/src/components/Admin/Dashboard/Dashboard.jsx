import React from 'react'
import SideBar from './SideBar'
import styles from './Dashboard.module.css'
import Widget from './Widget'

function Dashboard() {
  return (
      <>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.dashboardContainer}>
          <h1>Dashboard</h1>
          <div className={styles.widgets}>
            <Widget />
            <Widget />
            <Widget />
            <Widget />
          </div>
        </div>
      </div>
      </>  
  )
}

export default Dashboard