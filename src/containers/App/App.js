import React, { Component } from 'react';
import './App.css';
import NavbarApp from './NavbarApp/navbar';
import BannerHome from './BannerHome/bannerHome';
import ContentApp from './ContentApp/contentApp';
import Blog from './Blog/blog';
import FooterApp from './Footer/footer';
import ReactGA from 'react-ga';

class App extends Component {
	componentDidMount() {
		ReactGA.initialize('UA-118867430-1') // Google Analytics
		ReactGA.pageview(window.location.pathname + window.location.search) // Google Analytics
	}
	render() {
		return (
			<div className="App">
				<NavbarApp />
				<BannerHome />
				<ContentApp />
				<Blog />
				<FooterApp />
			</div>
		);
	}
}

export default App;
