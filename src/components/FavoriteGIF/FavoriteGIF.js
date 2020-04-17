import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './FavoriteGIF.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';



class FavoriteGIF extends Component {
    state = {
      category: this.props.category
    }
      
    handleChange = (event) => {
      this.setState({
        category: Number(event.target.value)
      })

      axios.put(`/api/favorite/${this.props.id}`, this.state)
      .then( (response) => {
        console.log(response)
        
      }).catch( (error) => {
        alert('Bad things happened...')
        console.log('Error in put /api/favorite', error)
      })
    }

    render() { 
        
        return ( 
            <>
            <Card className="card">
                <CardContent>
                    <h1>{this.props.title}</h1>
                    <iframe src={this.props.url} width="100%" height="450" frameBorder="0" allowFullScreen title={this.props.title}></iframe>
                    <FormControl>
          <InputLabel htmlFor="category-simple">Category</InputLabel>
          <Select
              value={this.state.category}
              onChange={this.handleChange}
              inputProps={{
                name: 'category',
                id: 'category-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Funny</MenuItem>
              <MenuItem value={2}>Cohort</MenuItem>
              <MenuItem value={3}>Cartoon</MenuItem>
              <MenuItem value={4}>NSFW</MenuItem>
              <MenuItem value={5}>Meme</MenuItem>
          </Select>
        </FormControl>  
                </CardContent>
            </Card>
            </>
         );
    }
}
 
export default FavoriteGIF;