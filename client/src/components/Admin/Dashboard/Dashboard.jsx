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
          <div className={styles.widgets}>
            <Widget type={"users"}/>
            <Widget type={"clients"}/>
            <Widget type={"professionals"}/>
          </div>
        </div>
      </div>
    </>  
  )
}

export default Dashboard