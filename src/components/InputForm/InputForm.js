import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = reduxState => ({
    reduxState,
});

class NewInputForm extends Component {
    state = {
        newGiphy: {
            giphy: ''
        }
    }

    handleNameChange = event => {
        console.log('Giphy search:', event.target.value)
        this.setState({
            newGiphy: {
                ...this.state.newGiphy,
                giphy: event.target.value,
            }
        });
    }

    addNewGiphy = event => {
        event.preventDefault();
        console.log('state of newGiphy:', this.state.newGiphy);
        this.props.dispatch({ type: 'SEARCH_GIPHY', payload: this.state.newGiphy })
        this.setState({
            newGiphy: {
                giphy: '',
            }
        });
    }

    enterFavourite = (event) => {
        event.preventDefault();
        this.props.history.push('/favorites');
    }


    render() {
        return (
            <div box='col-med-6'>
                <h3>This is the form</h3>
                <form onSubmit={this.addNewGiphy}>
                    <input type='text' value={this.state.newGiphy.name} onChange={this.handleNameChange} />
                    <input type='submit' value='Add New Giphy' />

                </form>

                <button type="submit" onClick={this.enterFavourite}>Favourite</button>
            </div>
        );
    }
}


export default connect(mapReduxStateToProps) (NewInputForm);