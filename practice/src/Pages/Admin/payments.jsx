import React from "react";
import Table from "../../components/Admin_Components/Table/payments";
import "../../App.css";
import SideBar from "../../Pages/SideBar";
import Axios from "axios";
import { useEffect, useState } from "react";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    Axios.post("http://127.0.0.1:8080/api/invoice/get", {})
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  const rows = [];
  payments.map((payment) => {
    const data = {
      id: payment.id,
      user_name: payment.user_id,
      proof: payment.payment_proof,
      status: payment.status,
    };
    rows.push(data);
  });

  const updatePayment = (id, status) => {
    Axios.post("http://127.0.0.1:8080/api/invoice/update", {
      id: id,
      status: status,
    })
      .then((response) => {
        setReload(!reload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="adminContainer">
          <h2 className="adminMenuHeader">Manage Payments</h2>
          <div className="subscribersTableContainer">
            <Table rows={rows} updatePayment={updatePayment}></Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
