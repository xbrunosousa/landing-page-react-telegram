import React, { Component } from 'react';
import './App.css';
import NavbarApp from './NavbarApp/navbar';
import BannerHome from './BannerHome/bannerHome';
import ContentApp from './ContentApp/contentApp';
import ContentApp2 from './ContentApp2/contentApp2';
import Blog from './Blog/blog';
import Featured from './Featured/featured';
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
				<ContentApp2 />
				<Blog />
				<Featured />
				<FooterApp />
			</div>
		);
	}
}

export default App;
