import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';

class FooterApp extends Component {
	render() {
		return (
			<div className="footerApp">
				<Row>

					<Col sm={{ offset: 1, size: 4 }}>
						<p className="footerApp--tg-logo"><i className="fab fa-telegram"></i> telegram</p>
						<span className="footerApp--tg-logo__descript">Telegram é um aplicativo de mensagens baseado em nuvem com foco em segurança e velocidade.</span>
					</Col>

					<Col sm={{ size: 2 }}>
						<p className="footerApp--title">Sobre</p>
						<div className="footerApp--links">
							<span>Sobre</span>
							<span>Blog</span>
							<span>FAQ</span>
							<span>Contacte-nos</span>
						</div>

					</Col>
					<Col sm={{ size: 2 }}>
						<p className="footerApp--title">Download</p>
						<div className="footerApp--links">
							<span>iPhone/iPad</span>
							<span>Android</span>
							<span>Windows Phone</span>
							<span>Pc/Mac/Linux</span>
						</div>

					</Col>
					<Col sm={{ size: 2 }}>
						<p className="footerApp--title">Plataforma</p>

						<div className="footerApp--links">
							<span>Telegram API</span>
							<span>Protocolo</span>
							<span>Telegram Bots</span>
							<span>Help</span>
						</div>
					</Col>
				</Row>
				<Container>
					<div className="footerApp--bottom">
						<hr />
						<span className="telegram-inc">© 2018 telegram Inc.</span>
						<span className="footerApp--author">Desenvolvido com <i className="fab fa-react"></i> por <a href="https://bruno.vin" target="_blank" rel="noopener noreferrer">Bruno Vinícius</a></span>
					</div>
				</Container>


			</div>
		)
	}
}

export default FooterApp