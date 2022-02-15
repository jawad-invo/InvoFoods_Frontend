import SideBar from "../../Pages/SideBar";
import "../../App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "../../components/Admin_Components/MenuCard/Card";
import AddMenu from "../../components/Admin_Components/AddMenu/addMenu";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [menuList, setMenuList] = useState(false);

  useEffect(() => {
    Axios.post("http://127.0.0.1:8080/api/menu/get", {})
      .then((menus) => {
        console.log("rerendered");
        setMenus(menus.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [menuList]);

  const deleteMenu = (props) => {
    Axios.post("http://127.0.0.1:8080/api/menu/delete", {
      menu_id: props,
    })
      .then((result) => {
        if (result !== null) {
          setMenuList(!menuList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addMenu = (props) => {
    console.log(props);
    Axios.post("http://127.0.0.1:8080/api/menu/create", props)
      .then((result) => {
        if (result !== null) {
          console.log(result);
          setMenuList(!menuList);
        }
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
          <h2 className="adminMenuHeader">Manage the Menus</h2>
          <AddMenu addMenu={addMenu} />

          <div className="menusContainer">
            <Grid container spacing={4} justifyContent="center">
              {menus.map((menu) => {
                return (
                  <Grid item key={menu.id}>
                    <Card
                      id={menu.id}
                      name={menu.name}
                      items={menu.items}
                      img={menu.menu_image}
                      deleteMenu={deleteMenu}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menus;
