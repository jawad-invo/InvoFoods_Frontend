import React from "react";
import Table from "../components/Table/table";
import "../App.css";
import Navbar from "../components/Navbar";

import Axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const user_id = localStorage.getItem("user_id");

  const [reload, setReload] = useState(false);
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
  }, [reload]);

  const rows = [];
  var i = 0;
  meals.map((meal) => {
    const date = meal.date.substr(0, 10);
    const data = {
      id: meal.id,
      name: "Meal " + ++i,
      date: date,
      status: meal.status,
    };
    rows.push(data);
  });

  const updateMeal = (row) => {
    console.log(row.id);
    Axios.post("http://127.0.0.1:8080/api/meal/update", {
      id: row.id,
      status: "Cancelled",
    })
      .then((response) => {
        console.log(response.data);
        setReload(!reload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="mealsContainer">
        <Table rows={rows} updateMeal={updateMeal}></Table>
      </div>
    </>
  );
};

export default Meals;
