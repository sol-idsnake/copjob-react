import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import PhoneNumber from './RegistrationComponents/phoneNumber';
import DepartmentSelector from './RegistrationComponents/departmentSelector';
import TopNav from './topnav';
import '../css/registrationForm.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '300px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
});

class RegistrationForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="registrationForm">
        <TopNav />
        <div className="paper">
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-firstName-input"
              label="First Name"
              className={classNames(classes.textField, classes.dense)}
              type="firstName"
              name="firstName"
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="outlined-lastName-input"
              label="Last Name"
              className={classNames(classes.textField, classes.dense)}
              type="lastName"
              name="lastName"
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classNames(classes.textField, classes.dense)}
              type="email"
              name="email"
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="outlined-phone-input"
              label="Phone Number"
              className={classNames(classes.textField, classes.dense)}
              type="number"
              name="number"
              margin="dense"
              variant="outlined"
            />
            <PhoneNumber margin="normal" variant="outlined" />
            <DepartmentSelector />
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RegistrationForm);
