import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";
import Snackbar from "@mui/material/Snackbar";

import MuiAlert from "@mui/material/Alert";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import AddSub from "../../redux/actions/actions";
import addSub from "../../redux/actions/actions";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const subscriberData = useSelector((state) => state.login.Subscriber);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  const subscribe = () => {
    const user_id = localStorage.getItem("user_id");
    const email = localStorage.getItem("email");
    Axios.post("http://127.0.0.1:8080/api/subscriber/create", {
      user_id: user_id,
      menu_id: props.id,
      package_name: "weekly",
      email: email,
    })
      .then((result) => {
        if (result !== null) {
          console.log(result);
          dispatch(addSub(result.data.subscribers));
          let previousLogin = JSON.parse(localStorage.getItem("user"));
          let newLoginData = {
            ...previousLogin,
            Subscriber: result.data.subscribers,
          };
          localStorage.setItem("user", JSON.stringify(newLoginData));
        }
        // setReload(!reload)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [subId, setSubId] = useState(null);

  React.useEffect(() => {
    if (!subscriberData || subscriberData == null) {
      setSubId(false);
    } else {
      setSubId(subscriberData.menu_id);
    }
  }, [subscriberData]);

  return (
    <>
      {subId != null && (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            titleTypographyProps={{
              fontSize: 18,
              textAlign: "center",
            }}
            subheaderTypographyProps={{
              fontSize: 10,
              textAlign: "center",
            }}
            title={props.name}
            subheader={"Feburary 07, 2022"}
          />
          <CardMedia
            component="img"
            height="194"
            image={props.img}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ThemeProvider theme={theme}>
                {subId != false && props.id == subId ? (
                  <Button variant="contained" color="foodpanda" disabled>
                    Subscribed
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="foodpanda"
                    onClick={function (event) {
                      subscribe();
                      handleClick();
                    }}
                  >
                    Subscribe
                  </Button>
                )}
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Menu Subscribed successfully!
                  </Alert>
                </Snackbar>
              </ThemeProvider>
            </IconButton>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      )}
    </>
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
