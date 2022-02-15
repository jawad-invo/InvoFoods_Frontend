import SideBar from "../../Pages/SideBar";
import "../../App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import SubscribersTable from "../../components/Admin_Components/Table/Subscribers";
import '../../App.css';

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    Axios.post("http://127.0.0.1:8080/api/subscriber/get", {})
      .then((response) => {
        setSubscribers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="adminContainer">
          <h2 className="adminMenuHeader">Menu Subscribers</h2>
          <div className="subscribersTableContainer">
            <SubscribersTable rows={subscribers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribers;
