import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import '../App.css'



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class Header extends React.Component {
  state = {
    auth: false,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              My Health App
            </Typography>
            <Link to='/'><Icon className="Nav-icon" color="inherit" style={{ fontSize: 30 }}>dashboard</Icon></Link>
            <Link to='/list'><Icon className="Nav-icon" color="inherit" style={{ fontSize: 30 }}>view_list</Icon></Link>
            <Link to='/new'><Icon className="Nav-icon" color="inherit" style={{ fontSize: 30 }}>add_circle</Icon></Link>
            <Icon className="Nav-icon" color="inherit" style={{ fontSize: 30 }}>
            power_settings_new
            </Icon>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);