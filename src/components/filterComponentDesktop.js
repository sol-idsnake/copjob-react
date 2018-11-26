import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

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

class FilterComponentDesktop extends React.Component {
  render() {
    const { classes, onChange } = this.props;

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
                name="name"
                onChange={onChange}
              />
            </FormControl>
          </div>
        </form>
      </div>
    );
  }
}

// export default FilterListDesk;
export default withStyles(styles)(FilterComponentDesktop);
