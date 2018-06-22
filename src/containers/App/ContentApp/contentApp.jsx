import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';

class ContentApp extends Component {
	render() {
		return (
			<div className="ContentApp">
				<Container>
					<p className="ContentApp--title-section">O que você pode fazer com Telegram?</p>
					<span className="ContentApp--subtitle-section">Fácil para suas conversas pessoais e de negócios</span>
					<Row>
						<Col sm={{ size: 4 }}>
							<div className="ContentApp--items">
								<p><i className="far fa-file-code"></i></p>
								<span className="ContentApp--title-icon">Envie</span>
								<p className="ContentApp--subtitle-icon">arquivos de quaisquer tipos.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-sync"></i></p>
								<span className="ContentApp--title-icon">Sincronize</span>
								<p className="ContentApp--subtitle-icon">suas conversas em todos seus dispositivos.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-users"></i></p>
								<span className="ContentApp--title-icon">Grupos</span>
								<p className="ContentApp--subtitle-icon">com até 10000 membros</p>
							</div>
						</Col>

						<Col sm={{ size: 4 }}>
							<div className="ContentApp--items">
								<p><i className="fas fa-lock"></i></p>
								<span className="ContentApp--title-icon">Secreto</span>
								<p className="ContentApp--subtitle-icon">segredos pessoais e comerciais.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-wrench"></i></p>
								<span className="ContentApp--title-icon">Construa</span>
								<p className="ContentApp--subtitle-icon">suas ferramentas com nossa API.</p>
							</div>
							<div className="ContentApp--items">
								<p><i className="fas fa-comments"></i></p>
								<span className="ContentApp--title-icon">Avaliações</span>
								<p className="ContentApp--subtitle-icon">receba de seus clientes.</p>
							</div>

						</Col>

						<Col sm={{ size: 4 }}>
							<div className="ContentApp--items">
								<p><i className="fas fa-cloud"></i></p>
								<span className="ContentApp--title-icon">Guarde</span>
								<p className="ContentApp--subtitle-icon">seus arquivos na nuvem</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-bomb"></i></p>
								<span className="ContentApp--title-icon">Destrua</span>
								<p className="ContentApp--subtitle-icon">mensagens com tempo pre-definido</p>
							</div>
							<div className="ContentApp--items">
								<p><i className="fas fa-location-arrow"></i></p>
								<span className="ContentApp--title-icon">Conecte-se</span>
								<p className="ContentApp--subtitle-icon">das localizações mais remotas</p>
							</div>

						</Col>

					</Row>
					<div className="vimeo">
						<iframe title="Telegram on Vimeo" src="https://bit.ly/2MH5DAR" frameBorder="0" allowFullScreen></iframe>
					</div>

				</Container>
			</div>
		)
	}
}

export default ContentApp