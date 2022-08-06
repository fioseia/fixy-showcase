import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../Dashboard/SideBar'
import styles from './Users.module.css'
import { getAllClients, getAllProfessionals } from '../../../redux/actions'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useParams } from 'react-router-dom'


function Users() {

    const users = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllClients())
        dispatch(getAllProfessionals())
    }, [])

    console.log(users)

    const columns = [
        { field: 'id', headerName: 'ID', width: 250, headerAlign: 'center', renderCell: (params) => <Link to={`/admin/users/${params.id}`}>{params.id}</Link> },
        { field: 'name', headerName: 'Name', headerAlign: 'center', width: 200 },
        { field: 'email', headerName: 'Email', headerAlign: 'center', width: 200 },
        { field: 'address', headerName: 'Address', headerAlign: 'center', width: 100 },
        { field: 'city', headerName: 'City', headerAlign: 'center', width: 100 },
        { field: 'province', headerName: 'Province', headerAlign: 'center', width: 100 },
        { field: 'status', headerName: 'Status', headerAlign: 'center', width: 100, renderCell: (params) => <span className={params.value === 'active' ?  styles.active : styles.inactive}>{params.value}</span> },
    ]

    const rows = users.map(user => {
        return {
            id: user.googleId,
            name: user.name,
            email: user.email,
            address: user.address,
            city: user.city,
            province: user.province,
            status: "active",
        }
    })

  return (
    <>
        {users.length > 0 ? (
            <div className={styles.users}>
                <SideBar />
                <div className={styles.usersContainer}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={15}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                        getRowId={(row) => row.id}
                    />
                </div>
            </div>
            ) : (
                <div>Loading...</div>
            )
        }
    </>
  )
}

export default Users