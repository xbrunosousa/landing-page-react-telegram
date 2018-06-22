import React, { Component } from 'react';
import { Button, Row, Container } from 'reactstrap';
import bannerTelegramMac from '../../../assets/telegram-mac-os-screenshot-min.png';

class BannerHome extends Component {
	render() {
		return (
			<Container>
				<div className="BannerHomeApp">
					<p className="banner--init">A nova era das <span>mensagens</span></p>
					<p className="banner--sub">Telegram é um aplicativo de mensagens móveis e desktop baseado em nuvem com foco em segurança e velocidade.</p>
					<Row>
						<div className="banner--buttons">
							<a href="https://telegram.org/apps" target="_blank" rel="noopener noreferrer"><Button className="banner--buttons__download" size="sm">Download</Button></a>
							<a href="https://web.telegram.org" target="_blank" rel="noopener noreferrer"><Button className="banner--buttons__web" size="sm">Telegram WEB</Button></a>
						</div>
					</Row>
					<img alt="Telegram Mac OS" src={bannerTelegramMac} className="banner--telegramMac" />
				</div>
			</Container>
		)
	}
}

export default BannerHome