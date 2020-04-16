import React, { Component } from 'react';
import FavoriteGIF from '../FavoriteGIF/FavoriteGIF'
import Box from '@material-ui/core/Box'


class Favorites extends Component {
    state = {  }
    render() { 
        return ( 
            <Box width="75%" margin="auto">
                <FavoriteGIF />
            </Box>
         );
    }
}
 
export default Favorites;