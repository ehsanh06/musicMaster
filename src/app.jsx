import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import Profile from './profile.component';
import './assets/css/style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        };
    }

    search() {

        // Check state
        console.log('this.state', this.state);

        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        var accessToken = 'BQBfhswTJ5jz1mAs2fdK4VSxQrQMht0Hf43DCpnAIsgO8GwzqJTOnzptXli-FQDfS4mSilM5s_l8hA5szJ-8ixdqXGLgCRSANHtbreuf7aN5SAP5mFkl6oy3puzTlFst-u45AkcCN64uC-vGZ5hNu0hHq477w_w3&refresh_token=AQCuFNf5PZTE9vuifJg3mJouLXM28m7VJapm5aWnsw7A4LzXaBJWffED-9c2iAJt0T757QBdO6gRPvMc2hZMr2aL4_XntcehZCjVvggcef6vIHtCnJBjj28RZT73HDkICWI';
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
            .then(json => {
                const artist = json.artists.items[0];
                console.log('artist', artist);

                this.setState({artist});
            });

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

                <Profile artist={this.state.artist} />

                <div className='app-gallery'>
                    Gallery
                </div>
            </div>
        );
    }
}
export default App;