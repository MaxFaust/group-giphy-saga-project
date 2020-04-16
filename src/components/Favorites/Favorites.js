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
                {this.props.gifList.map(item => <FavoriteGIF url={item.embedded_url} title={item.name}/>)}
                <td className="td-dropdown">
                <div class='dropdown'>
                <button key={this.props.category} className='dropbtn btn btn-success'>
                  Category
                </button>
                <div class='dropdown-content'>
                  <a
                    onClick={() =>
                      this.handleCategory("funny", this.props.category)
                    }>
                    Funny
                  </a>
                  <a
                    onClick={() =>
                      this.handleCategory("cohort", this.props.category)
                    }>
                    Cohort
                  </a>
                  <a
                    onClick={() =>
                      this.handleCategory("cartoon", this.props.category)
                    }>
                    Cartoon
                  </a>
                  <a
                    onClick={() =>
                      this.handleCategory("nsfw", this.props.category)
                    }>
                    nsfw
                  </a>
                  <a
                    onClick={() =>
                      this.handleCategory("meme", this.props.category)
                    }>
                    Meme
                  </a>
                </div>
                </div>
                </td>
            </Box>
         );
    }
}
 
export default connect(mapStateToProps)(Favorites);