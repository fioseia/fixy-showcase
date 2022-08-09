import React from "react";
import SideBar from "../Dashboard/SideBar";
import styles from "./Reports.module.css";
import { Navigate } from "react-router-dom";

function Reports({ token }) {
  return (
    <>
      {token !== "undefined" ? (
        <div className={styles.reports}>
          <SideBar />
          <div className={styles.reportsContainer}>
            <div>Reports</div>
          </div>
        </div>
      ) : (
        <Navigate to="/admin/login" replace={true} />
      )}
    </>
  );
}

export default Reports;
