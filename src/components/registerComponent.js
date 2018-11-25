import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import '../css/joinWrapper.scss';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  margin: {
    margin: 0,
  },
  button: {
    boxShadow: 'unset',
    margin: 0,
    minHeight: 'unset',
    minWidth: 'unset',
    width: '83px',
  },
});

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      firstName: '',
      lastName: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      email, password, firstName, lastName,
    } = this.state;

    const user = {
      email,
      password,
      firstName,
      lastName,
    };

    // return fetch(`${API_BASE_URL}/users`, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then(res => res.json())
    //   .catch(err => console.log(err));
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleChange = prop => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const {
      email, password, showPassword, firstName, lastName,
    } = this.state;

    return (
      <div className="join_wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="field-input-wrapper">
            <TextField
              id="email"
              label="Email"
              value={email}
              type="email"
              name="email"
              className={classNames(classes.textField, classes.margin)}
              onChange={this.handleChange('email')}
              margin="dense"
              variant="outlined"
            />
          </div>
          <div className="field-input-wrapper">
            <TextField
              id="password"
              label="Password"
              value={password}
              type={showPassword ? 'text' : 'password'}
              name="password"
              className={classNames(classes.margin, classes.textField)}
              onChange={this.handleChange('password')}
              variant="outlined"
              margin="dense"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      className={classes.button}
                      onClick={this.handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="field-input-wrapper">
            <TextField
              id="firstName"
              label="First Name"
              value={firstName}
              type="text"
              name="firstName"
              className={classNames(classes.textField, classes.margin)}
              onChange={this.handleChange('firstName')}
              margin="dense"
              variant="outlined"
            />
          </div>
          <div className="field-input-wrapper">
            <TextField
              id="lastName"
              label="Last Name"
              value={lastName}
              type="text"
              className={classNames(classes.textField, classes.margin)}
              onChange={this.handleChange('lastName')}
              name="lastName"
              margin="dense"
              variant="outlined"
            />
          </div>
          <div className="form-control">
            <Button variant="contained" color="primary" className={classes.button} type="submit">
              Submit
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} type="submit">
              Reset
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(RegisterComponent);
