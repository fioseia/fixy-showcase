import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../Dashboard/SideBar'
import styles from './Users.module.css'
import { getAllClients, getAllProfessionals } from '../../../redux/actions'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import PersonIcon from '@mui/icons-material/Person';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'


function Users() {

    const users = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetching data')
            dispatch(getAllClients())
            dispatch(getAllProfessionals())
        }
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    console.log(users)

    const columns = [
        { field: 'name', headerName: 'Name', headerAlign: 'center', width: 200 },
        { field: 'email', headerName: 'Email', headerAlign: 'center', width: 200 },
        { field: 'profession', headerName: 'Profession', headerAlign: 'center', width: 150, renderCell: (params) => <span>{console.log(params)}{params.value === "electricista" ? (<div className={styles.divIcon}><ElectricalServicesIcon/><p className={styles.divIcon}>Electricista</p></div>) : params.value === "gasista" ? (<div className={styles.divIcon}><PropaneTankIcon/><p className={styles.divIcon}>Gasista</p></div>) : params.value === "plomero" ? (<div className={styles.divIcon}><PlumbingIcon/><p className={styles.divIcon}>Plomero</p></div>) : (<div className={styles.divIcon}><PersonIcon/><p className={styles.divIcon}>Cliente</p></div>) }</span> },
        { field: 'address', headerName: 'Address', headerAlign: 'center', width: 100 },
        { field: 'city', headerName: 'City', headerAlign: 'center', width: 100 },
        { field: 'province', headerName: 'Province', headerAlign: 'center', width: 100 },
        { field: 'status', headerName: 'Status', headerAlign: 'center', width: 100, renderCell: (params) => <span className={params.value === true ?  styles.active : styles.inactive }>{params.value === true ? (<p>active</p>) : (<p>inactive</p>) }</span> },
        { field: 'id', headerName: 'ID', width: 250, headerAlign: 'center', renderCell: (params) => <Link to={`/admin/users/${params.id}`}>{params.id}</Link> },
    ]

    const rows = users.map(user => {
        return {
            id: user.googleId,
            name: user.name,
            email: user.email,
            profession: user.profession,
            address: user.address,
            city: user.city,
            province: user.province,
            status: user.active,
        }
    })

  return (
    <>
        <div className={styles.users}>
            <SideBar />
            <div className={styles.usersContainer}>
                <DataGrid
                    rows={rows.length > 0 ? rows : []}
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[15]}
                    disableSelectionOnClick
                    getRowId={(row) => row.id}
                />
            </div>
        </div>
    </>
  )
}

export default Users