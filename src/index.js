import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDLS56jPlEmmLw0WjO9pcuT9_qKTBQoeoQ';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));