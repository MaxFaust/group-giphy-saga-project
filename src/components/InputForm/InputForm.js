import React, { Component } from 'react';
// import { connect } from 'react-redux';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

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
        //this.props.dispatch({ type: 'SEARCH_GIPHY', payload: this.state.newGiphy })
        this.setState({
            newGiphy: {
                giphy: this.state.newGiphy,
            }
        });
    }

    render() {
        return (
            <div box='col-med-6'>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewGiphy}>
                    <input type='text' value={this.state.newGiphy.name} onChange={this.handleNameChange} />
                    <input type='submit' value='Add New Giphy' />
                </form>
            </div>
        );
    }
}

// Need to add: connect(mapReduxStateToProps)
export default (NewInputForm);