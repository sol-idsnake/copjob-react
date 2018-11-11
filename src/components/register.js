import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../css/register.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
});

class Register extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="register">
        <h2>Register</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <p>When joining CopJob, you must be part of hiring staff for your department, or have hiring privileges.</p>
          <p>You can only register with an email address issued by your department.</p>
          <Button variant="contained" color="primary" className={classes.button}>
            <Link to="/register">Register</Link>
          </Button>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(Register);
