import React from 'react'
import styles from './SideBar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReportIcon from '@mui/icons-material/Report';
import LogoutIcon from '@mui/icons-material/Logout';
import LogoFixy from '../../../assets/FIXy.svg'


function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.top}>
        <img className={styles.logo} src={LogoFixy} alt="logo" />
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleAltIcon className={styles.icon} />
            <span>Users</span>
          </li>
          <li>
            <ReportIcon className={styles.icon} />
            <span>Reports</span>
          </li>
          <li>
            <LogoutIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        
      </div>
    </div>
  )
}

export default SideBar