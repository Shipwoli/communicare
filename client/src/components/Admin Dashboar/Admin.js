import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import UserTable from "./User";
import AreaTable from "./AreaAdmin";
import ComAdmin from "./communicable";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = React.useState("User Management");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "User Management":
        return <UserTable/>;
      case "Area":
        return <AreaTable/>;
      case "Communicable Disease":
        return <ComAdmin />;
      default:
        return <UserTable />;
    }
  };

  return (
    <div className={classes.root}>
      <Toolbar className={classes.appBar}>
        <Typography variant="h6" noWrap>
          Admin Dashboard
        </Typography>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key="User Management"
              onClick={() => handlePageChange("User Management")}
            >
              <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
              <ListItemText primary="User Management" />
            </ListItem>
            <ListItem
              button
              key="Area"
              onClick={() => handlePageChange("Area")}
            >
              <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
              <ListItemText primary="Area" />
            </ListItem>
            <ListItem
              button
              key="Communicable Disease"
              onClick={() => handlePageChange("Communicable Disease")}
            >
              <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
              <ListItemText primary="Communicable Disease" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {renderPage()}
      </main>
    </div>
  );
};

export default Dashboard;
