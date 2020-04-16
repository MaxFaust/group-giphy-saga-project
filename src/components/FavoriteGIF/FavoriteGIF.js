import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class FavoriteGIF extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <CardContent>
                    <iframe src="https://giphy.com/embed/9JnRMIFMYAKpaHRXRF" width="100%" height="480" frameBorder="0" allowFullScreen></iframe>
                </CardContent>
            </Card>
         );
    }
}
 
export default FavoriteGIF;