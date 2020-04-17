import React, { Component } from 'react';


//button
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';

class FavoriteButton extends Component {
  state = {
    open: false,
    favorite: '',
  };
  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open select dialog</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form >
              <FormControl >
                <InputLabel htmlFor="demo-dialog-native">Favorite</InputLabel>
                <Select
                  native
                  value={this.favorite}
                  onChange={this.handleChange}
                  input={<Input id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Animals</option>
                  <option value={20}>Funny</option>
                  <option value={30}>Other</option>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
          </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect()(FavoriteButton)