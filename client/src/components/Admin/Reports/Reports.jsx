import React, { useEffect } from "react";
import SideBar from "../Dashboard/SideBar";
import styles from "./Reports.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteReport, getReports } from "../../../redux/actions"; // eslint-disable-line no-unused-vars

function Reports({ token }) {
  const reports = useSelector((state) => state.reports);

  console.log(reports);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReports());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = (id) => {
    dispatch(deleteReport(id));
  };

  return (
    <>
      {token !== "undefined" ? (
        <div className={styles.reports}>
          <SideBar />
          <div className={styles.reportsContainer}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h1 className={styles.title}>Reports</h1>
                <div>
                  {reports.map((report) => (
                    <div className={styles.item}>
                      <button
                        style={{ background: "rgb(255, 99, 71)" }}
                        onClick={() => handleDelete(report.id)}
                      >
                        x
                      </button>
                      <span className={styles.itemKey}>idUser: </span>
                      <span className={styles.itemValue}>{report.idUser}</span>
                      <span className={styles.itemKey}>idReview: </span>
                      <Link
                        to={`/admin/report/${report.idUser}/${report.idReview}`}
                      >
                        <span className={styles.itemValue}>
                          {report.idReview}
                        </span>
                      </Link>

                      <span className={styles.itemKey}>Asunto: </span>
                      <span className={styles.itemValue}>{report.asunto}</span>
                      <span className={styles.itemKey}>Mensaje: </span>
                      <span className={styles.itemValue}>
                        {report.message.comment || report.message}
                      </span>
                      {/* <Link className={styles.button} to={`/admin/report/${report.idUser}/${report.idReview}`}>DETALLE</Link> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/admin/login" replace={true} />
      )}
    </>
  );
}

export default Reports;
