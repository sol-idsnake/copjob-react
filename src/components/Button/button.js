import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: '36px',
    position: '',
    right: '',
    top: '',
  },
});

function ContainedButtons(props) {
  const { classes, color, text } = props;
  return (
    <Button variant="contained" color={color} className={classes.button}>
      {text}
    </Button>
  );
}

export default withStyles(styles)(ContainedButtons);
