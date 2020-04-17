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
import axios from 'axios'

class FavoriteButton extends Component {
  state = {
    open: false,
    favorite: '',
  };

  handleChange = event => {
    this.setState({ favorite: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleConfirm = () => {
    this.setState({ open: false });
    axios.post(`/api/favorite`, {
      name: this.props.name,
      categories: this.state.favorite,
      embedded_url: this.props.url
    })
    .then( (response) => {
      console.log(response)
      
    }).catch( (error) => {
      alert('Bad things happened...')
      console.log('Error in post /api/favorite', error)
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Favorite This</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form >
              <FormControl >
                <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
                <Select
                  native
                  value={this.state.favorite}
                  onChange={this.handleChange}
                  input={<Input id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Funny</option>
                  <option value={2}>Cohort</option>
                  <option value={3}>Cartoon</option>
                  <option value={4}>NSFW</option>
                  <option value={5}>Meme</option>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
          </Button>
            <Button onClick={this.handleConfirm} color="primary">
              Favorite
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect()(FavoriteButton)