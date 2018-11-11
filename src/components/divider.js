import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import NativeSelect from '@material-ui/core/NativeSelect';
import { Link } from 'react-router-dom';
import Button from './Button/button';

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
  constructor(props) {
    super(props);
    this.state = {
      // position: '',
      // state: '',
      // isToggleOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <section className="divider">
        <Link to="/join">
          <Button text="Post a job" />
        </Link>
      </section>
    );
  }
}

export default withStyles(styles)(Divider);
