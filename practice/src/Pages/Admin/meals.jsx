import SideBar from "../../Pages/SideBar";
import "../../App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import MealsTable from "../../components/Admin_Components/Table/Meals";
import "../../App.css";
import { CSVLink, CSVDownload } from "react-csv";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Subscribers = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    Axios.post("http://127.0.0.1:8080/api/meal/get", {})
      .then((response) => {
        setMeals(response.data);
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
          <h2 className="adminMenuHeader">
            Meals to Deliver
            <ThemeProvider theme={theme}>
              <CSVLink style={{color:"red", paddingLeft:"50px"}} data={meals}>
                <Button color="foodpanda" variant="outlined">
                  Export to CSV
                </Button>
              </CSVLink>
            </ThemeProvider>
          </h2>
          <div className="subscribersTableContainer">
            <MealsTable rows={meals} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribers;

const theme = createTheme({
  palette: {
    foodpanda: {
      main: "#D70F64",
      contrastText: "#fff",
    },
  },
});
