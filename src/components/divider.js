import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Link } from 'react-router-dom';
import ContainedButtons from './Button/button';

import '../css/divider.scss';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    color: 'white',
  },
});

class Divider extends React.Component {
  state = {
    position: '',
    state: '',
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { position, state } = this.state;

    return (
      <section className="divider">
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={position}
            onChange={this.handleChange('position')}
            name="position"
            className={classes.selectEmpty}
          >
            <option value="">Position</option>
            <option value="Officer">Officer</option>
            <option value="Deputy">Deputy</option>
            <option value="Trooper">Trooper</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={state}
            onChange={this.handleChange('state')}
            name="state"
            className={classes.selectEmpty}
          >
            <option value="">State</option>
            <option value="Florida">Florida</option>
          </NativeSelect>
        </FormControl>

        <Link to="/join">
          <ContainedButtons color="secondary" text="Post a job" />
        </Link>
      </section>
    );
  }
}

export default withStyles(styles)(Divider);
