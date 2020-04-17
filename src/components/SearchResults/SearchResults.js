import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';

import Cardi_B from '../Cardi_B/Cardi_B';

const mapStateToProps = reduxState => ({
    gifList: reduxState.gifReducer,
});


class SearchResults extends Component {
    render() {
        return (
            <Box width="90%" margin="auto" align="center">
                {this.props.gifList.map(item => <Cardi_B name={item.title} embed_url={item.embed_url}/>)}
            </Box>
        );
    }
}

export default connect(mapStateToProps)(SearchResults);