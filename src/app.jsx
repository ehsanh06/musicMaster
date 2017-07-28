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
        var accessToken = 'BQC57qUZGe-tYDSHvT9vXtTb1N8BX7wLZzMxnDeiZCxEPFVpDr6lOsNmYqrfK1hgjxRmQFZkVkH62HnEQJj_siyRv3oBZR0PkseO-gwNM1RJqUtR5sPhQkcc0MFrKlQb5pH4Vzd6yVvoAA-YphOAHz04e7467xFa&refresh_token=AQAuYsjLu3mj8xj3Yi5FwlW2EOSBApi-cm9WJ43RwOmPpm9OUeDngQHLlLuf6KleQ436nmxi3g6g1ntwhql_nGstkXKXXLkAVx7ogNDp_be3bIww-qB1QsS5ZkTwJaQQiEk';
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