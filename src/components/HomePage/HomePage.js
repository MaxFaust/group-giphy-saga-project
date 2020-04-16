import React, { Component } from 'react';
import InputForm from '../InputForm/InputForm';
import SearchResults from '../SearchResults/SearchResults';



class HomePage extends Component {
    render() { 
        return ( 
            <>
                <InputForm />
                <SearchResults />
            </>
         );
    }
}
 
export default HomePage;