import React, { Component } from 'react';
import FavoriteGIF from '../FavoriteGIF/FavoriteGIF'
import Box from '@material-ui/core/Box'
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    gifList: reduxState.gifReducer,
});


class Favorites extends Component {
    getGifs = () => {
        this.props.dispatch({ type: 'FETCH_GIF' })
    }

    componentDidMount() {
        this.getGifs()
    }

    handleCategory = (category) => {
        this.props.dispatch({type: 'UPDATE_CATEGORY', payload:category})
      }
    
    render() { 
        return ( 
            <Box width="75%" margin="auto">
                {this.props.gifList.map(item => <FavoriteGIF id={item.id} url={item.embedded_url} title={item.name} category={item.categories}/>)}
                
            </Box>
         );
    }
}
 
export default connect(mapStateToProps)(Favorites);