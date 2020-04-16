import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './FavoriteGIF.css'



class FavoriteGIF extends Component {
    render() { 
        return ( 
            <Card className="card">
                <CardContent>
                    <h1>{this.props.title}</h1>
                    <iframe src={this.props.url} width="100%" height="450" frameBorder="0" allowFullScreen title={this.props.title}></iframe>
                </CardContent>
            </Card>
         );
    }
}
 
export default FavoriteGIF;