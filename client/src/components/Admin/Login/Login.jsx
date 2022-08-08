import React, {useEffect, useState} from 'react'
import { loginAdmin } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Login.module.css';
import Logo from '../../../assets/FIXy.svg';

function Login() {

  const admin = useSelector(state => state.admin);

  useEffect(() => {
    if (admin.isLoggedIn) {
      window.location.href = '/admin/dashboard';
    }
  } , [admin.isLoggedIn]);

  console.log(admin)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleLogin = () => {
    dispatch(loginAdmin(username, password));
  }


  return (
    <>
      <div className={styles.login}>
        <img src={Logo} alt="logo-fixy" />
        <input className={styles.input} onChange={handleChange} value={username} name="username" type="text" placeholder='Username...' />
        <input className={styles.input} onChange={handleChange} value={password} type="password" name="password" placeholder='Password...' />
        <button className={styles.button} onClick={handleLogin}>LOGIN</button>
      </div>
    </>
  )
}

export default Login