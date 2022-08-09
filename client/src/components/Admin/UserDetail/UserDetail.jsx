import React, { useEffect } from 'react'
import styles from './UserDetail.module.css'
import SideBar from '../Dashboard/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, disableUser, deleteUser, deleteReview } from '../../../redux/actions'
import { Link, useParams } from 'react-router-dom'


function UserDetail() {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    console.log(user)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getUser(id))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleClick = (id) => {
        dispatch(disableUser(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }

    const handleReviewDelete = (id, idProfessional, idClient) => {
        const review = {
            id: id,
            idProfessional: idProfessional,
            idClient: idClient,
        }
        dispatch(deleteReview(review))
    }

    console.log(user)
    return (
        <> 
            <div className={styles.user}>
                <SideBar />
                { user ? (
                <div className={styles.userContainer}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <h1 className={styles.title}>User Details {user.googleId}</h1>
                            <div className={styles.item}>
                                <img src="https://picsum.photos/200/300" alt="" className={styles.img} />
                                <div className={styles.details}>
                                    <h1 className={styles.itemTitle}>{user.name}</h1>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>Email: </span>
                                        <span className={styles.itemValue}>{user.email}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>Phone: </span>
                                        <span className={styles.itemValue}>{user.phoneNumber}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>Address: </span>
                                        <span className={styles.itemValue}>{user.address}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>City: </span>
                                        <span className={styles.itemValue}>{user.city}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>Province: </span>
                                        <span className={styles.itemValue}>{user.province}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>City: </span>
                                        <span className={styles.itemValue}>{user.city}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>Latitude: </span>
                                        <span className={styles.itemValue}>{user.latitude}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>Longitude: </span>
                                        <span className={styles.itemValue}>{user.longitude}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.itemKey}>Status: </span>
                                        <span className={styles.itemValue}>{user.active ? "active" : "inactive"}</span>
                                    </div>
                                    <button className={styles.button} onClick={() => handleClick(user.googleId)}>{user.active ? "DISABLE USER" : "ENABLE USER"}</button>
                                    <button className={styles.button} onClick={() => handleDelete(user.googleId)}>DELETE USER</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userContainer}>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <h2>Reviews</h2>
                                {user.reviews?.length ? user.reviews.map(review => (
                                    <div className={styles.review}>
                                        <div className={styles.reviewItem}>
                                            <div className={styles.reviewLeft}>
                                                <span className={styles.itemKey}>Rating: </span>
                                                <span className={styles.itemValue}>{review.rating}</span>
                                                <span className={styles.itemKey}>Comment: </span>
                                                <span className={styles.itemValue}>{review.comment}</span>
                                                <span className={styles.itemKey}>Name: </span>
                                                <span className={styles.itemValue}>{review.name}</span>
                                                <span className={styles.itemKey}>Id: </span>
                                                <span className={styles.itemValue}><Link to={`/admin/users/${user.googleId.includes("c") ? review.idProfessional : review.idClient}`}>{user.googleId.includes("c") ? review.idProfessional : review.idClient}</Link></span>
                                            </div>
                                            <button onClick={() => handleReviewDelete(user.googleId.includes("c") ? (review.id, review.idProfessional, user.googleId) : review.id, user.googleId, review.idClient)}>DELETE REVIEW</button>
                                        </div>
                                    </div>
                                )) : (<div><p>Este usuario no tiene reseñas</p></div>)}
                            </div>
                        </div>
                    </div>
                </div>
                ) : (<p>No se encontro el usuario</p>) }
            </div>
        </>
      )
}

export default UserDetail