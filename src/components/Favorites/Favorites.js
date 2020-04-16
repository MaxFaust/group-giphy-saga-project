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

    enterSearch = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }
    
    render() { 
        return ( 
            <Box width="75%" margin="auto">
                {this.props.gifList.map(item => <FavoriteGIF url={item.embedded_url} title={item.name}/>)}
                <button type="submit" onClick={this.enterSearch}>Search</button>
            </Box>

            
         );
    }
}
 
export default connect(mapStateToProps)(Favorites);