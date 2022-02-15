import Axios from "axios";
import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../login.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //snacbar
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const auth = () => {
    Axios.post("http://127.0.0.1:8080/api/user/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user_id", response.data.user.id);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          dispatch(saveData(response.data));
          handleClick();
          navigate("menus");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveData = (data) => {
    return {
      type: "SAVELOGINDATA",
      payload: data,
    };
  };

  return (
    <>
      <div className="gif_container">
        <img src="https://media4.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif?cid=790b76118ca16811c8d6638ef342eed5332415a8eec4b3de&rid=giphy.gif&ct=g" alt="gif"></img>
      </div>
      <form method="post" action="index.html">
        <div className="box">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUserName(e.target.value)}
            className="email"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="email"
          />

          <ThemeProvider theme={theme}>
            <div className="btn_container">
              <Button
                className="btn"
                variant="contained"
                color="foodpanda"
                onClick={auth}
              >
                Login
              </Button>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Login successfull!
              </Alert>
            </Snackbar>
          </ThemeProvider>
        </div>
      </form>
    </>
  );
}

export default Login;

const theme = createTheme({
  palette: {
    foodpanda: {
      main: "#D70F64",
      contrastText: "#fff",
    },
  },
});
