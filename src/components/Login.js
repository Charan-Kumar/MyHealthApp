import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    width: '100%',
    borderRadius: 0,
    height: 400
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  root: {
    flexGrow: 1,
  }
});

class Login extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 'calc(100vh - 62px)'}}>
        <Card className={classes.card}>
          <CardHeader title="Login"/>
          <CardContent>
            <Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="required"
                  label="Email"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="required"
                  label="Password"
                  defaultValue=""
                  type="password"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
            
            </Grid>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            
              <Button variant="contained" color="primary" className={classes.button}>
                Login
              </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);