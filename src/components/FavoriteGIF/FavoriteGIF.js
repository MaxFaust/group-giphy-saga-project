import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './FavoriteGIF.css'



class FavoriteGIF extends Component {
    render() { 
        return ( 
            <Card className="card">
                <CardContent>
                    <iframe src={this.props.url} width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
                </CardContent>
            </Card>
         );
    }
}
 
export default FavoriteGIF;