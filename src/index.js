import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import YT_API_KEY from './config';

class App extends Component {
	render() {
		return (
			<div>
			Hi! <SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));