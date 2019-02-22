import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../store/actions";

import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  progress: {
    margin: '100px 0 100px 50%',
    transform: 'translateX(-20px)'
  },
};

class Drones extends Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { data, loading, classes } = this.props;
    return (
      <Card>
        <CardHeader title="List of Drones" />
        {loading && <CircularProgress className={classes.progress} color="secondary" />}
        {!loading && <CardContent>
          <List>
            {data.map((item, index) =>
              <ListItem key={index}>
                <Avatar>{index + 1}</Avatar>
                <ListItemText
                  primary={`Latitude: ${item.latitude}, Longitude: ${item.longitude}`}
                  secondary={`Timestamp: ${item.timestamp}, Accuracy: ${item.accuracy}, UOM: ${item.uom}`}
                />
              </ListItem>)}
          </List>
        </CardContent>}
      </Card>
    );
  }
};

const DronesList = withStyles(styles)(Drones);

const mapState = (state, ownProps) => {
  const {
    data,
    loading
  } = state.drone;
  return {
    data,
    loading
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE_DATA
    })
});

export default connect(
  mapState,
  mapDispatch
)(DronesList);
