import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            First
          </Grid>
          <Grid item xs={4} height={"100%"} bgcolor="primary.main">
            <WrappedComponent {...props} />
          </Grid>
          <Grid item xs={4} height={"100%"}>
            Third
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
