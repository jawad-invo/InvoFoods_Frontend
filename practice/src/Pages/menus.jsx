import { Grid } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/MenuCard/Card";
import Navbar from "../components/Navbar";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    Axios.post("http://127.0.0.1:8080/api/menu/get", {})
      .then((menus) => {
        setMenus(menus.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="menusContainer">
        <Grid container spacing={4} justifyContent="center">
          {menus.map((menu) => {
            return (
              <Grid item key={menu.id} >
                <Card id={menu.id}  name={menu.name} items={menu.items} img={menu.menu_image} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Menus;
