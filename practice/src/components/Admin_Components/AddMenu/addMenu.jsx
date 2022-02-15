import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../../../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    name: "",
    items: [],
    menu_image: "",
  });

  const handleChange = (event) => {
    console.log(event.target.id);
    if (event.target.id === "menu_name") {
      setState({
        name: event.target.value,
        items: state.items,
        menu_image: state.menu_image,
      });
    } else if (event.target.id === "menu_items") {
      setState({
        name: state.name,
        items: event.target.value,
        menu_image: state.menu_image,
      });
    } else if (event.target.id === "menu_image")
      setState({
        name: state.name,
        items: state.items,
        menu_image: event.target.value,
      });
  };

  return (
    <div>
      <div className="addNewMenu">
        <ThemeProvider theme={theme}>
          <Button color="foodpanda" variant="outlined" onClick={handleClickOpen}>
            ADD NEW MENU
          </Button>
        </ThemeProvider>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new menu please fill the following fields
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="menu_name"
            label="Menu Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="menu_items"
            label="Menu Items (seperated by comma)"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="menu_image"
            label="Menu image URL"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={function (event) {
              props.addMenu(state);
              handleClose();
            }}
          >
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const theme = createTheme({
  palette: {
    foodpanda: {
      main: "#D70F64",
      contrastText: "#fff",
    },
  },
});
