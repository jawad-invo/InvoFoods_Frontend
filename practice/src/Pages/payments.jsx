import React, { useEffect, useState } from "react";
import Table from "../components/Table/invoiceTable";
import TotalTable from "../components/Table/total_invoice_table";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import jsPDF from "jspdf";
import Axios from "axios";

const Payments = () => {
  const [invoice, setInvoice] = useState([]);
  const [meals, setMeals] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    Axios.post("http://127.0.0.1:8080/api/invoice/get", {
      user_id: user_id,
    })
      .then((invoice) => {
        setInvoice(invoice.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Axios.post("http://127.0.0.1:8080/api/meal/get", {
      user_id: user_id,
    })
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const rows = [];
  var i = 0;
  meals.map((meal) => {
    const data = {
      id: meal.id,
      name: "Meal " + ++i,
      date: meal.date,
      status: meal.status,
    };
    rows.push(data);
  });

  const total_invoice = {
    menu: "Some Menu",
    total_meals: invoice.total_meals,
    total_amount: invoice.amount,
    status: invoice.status,
  };

  return (
    <>
      <Navbar />

      <div className="invoiceContainer">
        <Table rows={rows} /> <br />
        <TotalTable row={total_invoice} />
      </div>

      <div className="buttonContainers">
        <h4>Download Invoice as PDF</h4>
        <br />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            component="span"
            color="foodpanda"
            onClick={function (event) {
              downloadPDF(total_invoice);
            }}
          >
            Download
          </Button>

          <br />
          <br />

          <h4 style={{ color: "foodpanda" }}>Upload Payment Proof</h4>
          <br />
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <br />
          <br />

          <Button variant="contained" component="span" color="foodpanda">
            Upload
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
};

const downloadPDF = (total_invoice) => {
  var doc = jsPDF("p", "pt");
  doc.text(60, 40, "This is the menu invoice - Can be paid through Bank or JazzCash");
  doc.text(60, 50, "");
  doc.text(60, 60, "Subscribed Menu: " + total_invoice.menu);
  doc.text(60, 80, "Total Meals: " + total_invoice.total_meals);
  doc.text(60, 100, "Total Amount: " + total_invoice.total_amount);
  doc.text(60, 120, "Payment  Status: " + total_invoice.status);

  doc.save("file.pdf");
};

export default Payments;

const theme = createTheme({
  palette: {
    foodpanda: {
      main: "#D70F64",
      contrastText: "#fff",
    },
  },
});
