import React from 'react'
import styles from './SideBar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReportIcon from '@mui/icons-material/Report';
import LogoutIcon from '@mui/icons-material/Logout';
import LogoFixy from '../../../assets/FIXy.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';


function SideBar() {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.top}>
        <Link to="/dashboard">
          <img className={styles.logo} src={LogoFixy} alt="logo" />
        </Link>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <Link to="/admin/dashboard">
            <li>
                <DashboardIcon className={styles.icon} />
                <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/users">
            <li>
                <PeopleAltIcon className={styles.icon} />
                <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/reports">
            <li>
                <ReportIcon className={styles.icon} />
                <span>Reports</span>
            </li>
          </Link>
          <Link onClick={handleLogout} to="/admin/login">
            <li>
                <LogoutIcon className={styles.icon} />
                <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default SideBar