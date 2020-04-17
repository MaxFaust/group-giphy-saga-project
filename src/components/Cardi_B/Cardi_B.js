import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../FavoriteButton/FavoriteButton';



class Cardi_B extends Component {

    render() {
        return (
            <Box display="inline-block" width="350px" className="card">
                <Card>
                    <iframe width='100%' height='300px' frameBorder="0" src={this.props.embed_url}>
                    </iframe>
                    <FavoriteButton/>
                </Card>
            </Box>
        );
    }
}

export default Cardi_B;