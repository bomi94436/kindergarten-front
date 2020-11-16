import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { GoSearch } from "react-icons/go";
import { HiHome } from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
  },
}));

const DrawerIcon = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <HiHome />
            </ListItemIcon>
            <ListItemText primary="홈" />
          </ListItem>
        </Link>

        <Link to="/search" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <GoSearch />
            </ListItemIcon>
            <ListItemText primary="유치원 검색" />
          </ListItem>
        </Link>
      </List>

      {/* <Divider /> */}
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>
  );
};

export default DrawerIcon;
