import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class CenterView extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>{this.props.children}</Grid>
          <Grid item xs={4}></Grid>
        </Grid>
    )
  }
}


CenterView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenterView);