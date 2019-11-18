import React, { Component } from 'react';
import Navbar from 'components/Navbar';
import BannerHome from 'components/BannerHome';
import ContentApp from 'components/ContentApp';
import Pros from 'components/Pros';
import Blog from 'components/Blog';
import Featured from 'components/Featured';
import FooterApp from 'components/Footer';
import ReactGA from 'react-ga';

export default class Home extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-121994767-1'); // Google Analytics
    ReactGA.pageview(window.location.pathname + window.location.search); // Google Analytics
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <BannerHome />
        <ContentApp />
        <Pros />
        <Blog />
        <Featured />
        <FooterApp />
      </div>
    );
  }
}
