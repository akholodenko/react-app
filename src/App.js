import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Results from "./containers/results";
import MilesRadius from "./containers/miles_radius";
import PageSelector from "./containers/page_selector";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<div>
					<MilesRadius/>
					<PageSelector/>
				</div>
				<Results/>
			</div>
		);
	}
}

export default App;
