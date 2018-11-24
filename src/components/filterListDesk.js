import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import '../css/filterListDesk.scss';

const styles = theme => ({
  textField: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
    marginTop: 0,
    marginBottom: '2em',
    width: 200,
  },
});

class FilterListDesk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anySearch: '',
      age: '',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anySearch, age } = this.state;

    return (
      <div className="filterListDesk">
        <form>
          <div className="filterWrapper">
            <FormControl>
              <TextField
                id="standard-search"
                label="Search by name"
                type="search"
                className={classes.textField}
                margin="dense"
                value={anySearch}
                onChange={this.handleChange('anySearch')}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select value={age} onChange={this.handleChange('age')}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={21}>21</MenuItem>
              </Select>
            </FormControl>
          </div>
        </form>
      </div>
    );
  }
}

// export default FilterListDesk;
export default withStyles(styles)(FilterListDesk);
