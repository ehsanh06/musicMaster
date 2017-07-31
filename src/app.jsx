import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import Profile from './profile.component';
import Gallery from './gallery.component';
import './assets/css/style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null,
            tracks: []
        };
    }

    search() {

        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

        // Access Token expires every hour, change accordingly
        var accessToken = 'BQDTl3ex7a-j0RNwfq9FGJHQ0mvN_Sn7TydA8zUnYoMsuDfte2rtkW40_Y7NMXysNHCNzd4QwHe-asmm6E_mOgcI_ouZv_7LBOCGKlknMnaV56CVcgwColc00wUgpT0ry_dgC4Rqqnhb2Jqyllzo_NdmYgDzeZ7h&refresh_token=AQBnqZv1hfeYu92r_TW-MY2xp_IWre8Ziu2-rLp0iLT4oBrftuRJneVLOhKgiC8WhfiEzmWVz3qrv4V1X3xOoI4Vt1S-SFJbkinzixQ56w5lfE66B8D_J_wVqt3cGNc_Vu4';
        
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
                this.setState({ artist });

                FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`

                fetch(FETCH_URL, myOptions)
                    .then(response => response.json())
                    .then(json => {
                        console.log('artist\'s top tracks:', json);
                        const { tracks } = json;
                        this.setState({tracks})
                    })
            });
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
                {
                    this.state.artist !== null
                    ?
                        <div>
                            <Profile artist={this.state.artist} />
                            <Gallery tracks={this.state.tracks} />
                        </div>

                    : <div></div>
                }
            </div>
        );
    }
}
export default App;