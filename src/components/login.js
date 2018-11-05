import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import '../css/login.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="login">
        <h2>Login</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classNames(classes.textField, classes.dense)}
            type="email"
            name="email"
            autoComplete="email"
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classNames(classes.textField, classes.dense)}
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
          />
          <Button variant="contained" color="primary" className={classes.button}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(Login);
