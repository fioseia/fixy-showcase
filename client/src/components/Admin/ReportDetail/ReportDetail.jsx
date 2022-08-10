import React, { useEffect } from 'react'
import styles from './ReportDetail.module.css'
import SideBar from '../Dashboard/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { getReportDetail } from '../../../redux/actions'

function ReportDetail({token}) {
    const dispatch = useDispatch()
    const { idUser, idReview } = useParams()
    const report = useSelector((state) => state.report)
    console.log(report)
    useEffect(() => {
        dispatch(getReportDetail(idUser, idReview))
    } , []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleDelete = (id) => {
        // dispatch(deleteReport(id))
    }
  return (
    <>
      {token !== "undefined" ? (
        <div className={styles.report}>
          <SideBar />
          <div className={styles.reportContainer}>
              <div className={styles.top}>
                <div className={styles.left}>
                  <h1 className={styles.title}>Report Detail</h1>
                  <div className={styles.item}>
                        <span className={styles.itemKey}>idReview: </span>
                        <span className={styles.itemValue}>{report.id}</span>
                        <span className={styles.itemKey}>Rating: </span>
                        <span className={styles.itemValue}>{report.rating}</span>
                        <span className={styles.itemKey}>Comment: </span>
                        <span className={styles.itemValue}>{report.comment}</span>
                        <span className={styles.itemKey}>Name: </span>
                        <span className={styles.itemValue}>{report.name}</span>
                        <button className={styles.button} onClick={() => handleDelete(report.id)}>DETALLE</button>
                      </div>
                  <div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/admin/login" replace={true} />
      )}
    </>
  )
}

export default ReportDetail