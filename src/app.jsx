import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import accessTokenCode from './access-token';
import './assets/css/style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    search() {

        // Check state
        console.log('this.state', this.state);

        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        var accessToken = accessTokenCode;
        var myHeaders = new Headers();

        var myOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => console.log(json))

        console.log('FETCH_URL', FETCH_URL);
    }

    render() {
        return (
            <div className='app'>
                <h1 className='app-title'>Music Master</h1>

                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search an Artist'
                            value={this.state.query}
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>

                </FormGroup>

                <div className='app-profile'>
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className='app-gallery'>
                    Gallery
                </div>
            </div>
        );
    }
}
export default App;