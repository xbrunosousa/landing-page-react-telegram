import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';

class ContentAppPart2 extends Component {
	render() {
		return (
			<div className="ContentApp2">
				<Container>
					<p className="ContentApp--title-section">Por que mudar para o Telegram?</p>
					<span className="ContentApp--subtitle-section">Você merece ter muito...</span>
					<Row>
						<Col sm={{ size: 4 }}>
							<div className="ContentApp--items">
								<p><i className="fas fa-user-secret"></i></p>
								<span className="ContentApp--title-icon">Privado</span>
								<p className="ContentApp--subtitle-icon">mensagens no Telegram são fortemente criptografadas e podem se auto-destruir.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-globe-americas"></i></p>
								<span className="ContentApp--title-icon">Distribuído</span>
								<p className="ContentApp--subtitle-icon">servidores de Telegram estão espalhados por todo o mundo, por segurança e velocidade.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-low-vision"></i></p>
								<span className="ContentApp--title-icon">Seguro</span>
								<p className="ContentApp--subtitle-icon">Telegram mantém suas mensagens e arquivos contra <span>ataques de hackers</span>.</p>
							</div>
						</Col>

						<Col sm={{ size: 4 }}>
							<div className="ContentApp--items">
								<p><i className="fas fa-cloud"></i></p>
								<span className="ContentApp--title-icon">Baseado em nuvem</span>
								<p className="ContentApp--subtitle-icon">O Telegram permite que você acesse suas mensagens de vários dispositivos.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-lock-open"></i></p>
								<span className="ContentApp--title-icon">Aberto</span>
								<p className="ContentApp--subtitle-icon">O Telegram tem uma <span>API</span> aberta e <span>protocolo</span> livre para todos.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-database"></i></p>
								<span className="ContentApp--title-icon">Powerful</span>
								<p className="ContentApp--subtitle-icon">O Telegram não tem limites para tamanho de arquivos e conversas.</p>
							</div>

						</Col>

						<Col sm={{ size: 4 }}>
							<div className="ContentApp--items">
								<p><i className="fas fa-tachometer-alt"></i></p>
								<span className="ContentApp--title-icon">Rápido</span>
								<p className="ContentApp--subtitle-icon">O Telegram entrega mensagens mais rápido que qualquer outro aplicativo.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-money-bill-wave-alt"></i></p>
								<span className="ContentApp--title-icon">Gratuito</span>
								<p className="ContentApp--subtitle-icon">O Telegram é grátis para sempre. Sem anúncios. Nenhuma taxa de assinatura.</p>
							</div>

							<div className="ContentApp--items">
								<p><i className="fas fa-bullhorn"></i></p>
								<span className="ContentApp--title-icon">Nós podemos fazer isso</span>
								<p className="ContentApp--subtitle-icon">Ajude a tornar as mensagens seguras novamente - divulgue o Telegram!</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default ContentAppPart2