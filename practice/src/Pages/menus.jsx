import { Grid } from "@mui/material";
import React from "react";
import Card from "../components/MenuCard/Card";

const Menus = () => {
  return (
    <>
      <div className="menusContainer">
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Card img="https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527961210ia0yu.png" />
          </Grid>

          <Grid item>
            <Card img="https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527967480vcek9.png" />
          </Grid>

          <Grid item>
            <Card img="https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527961210ia0yu.png" />
          </Grid>

          <Grid item>
            <Card img="https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527967480vcek9.png" />
          </Grid>

          <Grid item>
            <Card img="https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527961210ia0yu.png" />
          </Grid>

          <Grid item>
            <Card img="https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527967480vcek9.png" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Menus;
