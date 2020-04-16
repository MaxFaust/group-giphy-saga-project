import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box'
import './Cardi_B.css'



class Cardi_B extends Component {
    state = {  }
    render() { 
        return ( 
            <Box display="inline-block" width="350px" className="card">
                <Card>
                    <iframe width='100%' height='300px' frameBorder="0" src={this.props.embed_url}></iframe>
                </Card>
            </Box>
         );
    }
}
 
export default Cardi_B;