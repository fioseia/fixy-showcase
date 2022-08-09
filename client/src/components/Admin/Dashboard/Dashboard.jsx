import React from "react";
import SideBar from "./SideBar";
import styles from "./Dashboard.module.css";
import Widget from "./Widget";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Dashboard({ token }) {
  const admin = useSelector((state) => state.admin);
  console.log(admin);

  return (
    <>
      {token !== "undefined" ? (
        <div className={styles.dashboard}>
          <SideBar />
          <div className={styles.dashboardContainer}>
            <div className={styles.widgets}>
              <Widget type={"users"} />
              <Widget type={"clients"} />
              <Widget type={"professionals"} />
            </div>
            <div className={styles.widgets}>
              <Widget type={"electricista"} />
              <Widget type={"gasista"} />
              <Widget type={"plomero"} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/admin/login" replace={true} />
      )}
    </>
  );
}

export default Dashboard;
