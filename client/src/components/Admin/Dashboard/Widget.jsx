import React, { useEffect } from 'react'
import styles from './Widget.module.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClients, getAllProfessionals } from '../../../redux/actions';

function Widget({type}) {

    const users = useSelector(state => state.users);
    const clients = useSelector(state => state.clients);
    const professionals = useSelector(state => state.professionals);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllClients())
        dispatch(getAllProfessionals())
    } , [])

    let data;

    switch (type) {
        case 'users':
            data = {
                title: 'USERS',
                value: users.length,
                link: 'See all users',
                icon: (<PersonIcon className={styles.icon} />)
            }
            break;
        case 'clients':
            data = {
                title: 'CLIENTS',
                value: clients.length,
                link: 'See all clients',
                icon: (<PersonIcon className={styles.icon} />)
            }
            break;
        case 'professionals':
            data = {
                title: 'PROFESSIONALS',
                value: professionals.length,
                link: 'See all professionals',
                icon: (<PersonIcon className={styles.icon} />)
            }
            break;
        default:
        break;
    }
  return (
    <>
        <div className={styles.widget}>
            <div className={styles.left}>
                <span className={styles.title}>{data.title}</span>
                <span className={styles.counter}>{data.value}</span>
                <span className={styles.link}>{data.link}</span>
            </div>
            <div className={styles.right}>
                <div className={styles.percentage && styles.percentagePositive}>
                    <KeyboardArrowUpIcon/>
                    20%
                </div>
                {data.icon}
            </div>
        </div>
    </>
  )
}

export default Widget