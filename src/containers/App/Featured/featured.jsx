import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Featured extends Component {
	render() {
		return (
			<div className="Featured">
				<Container>
					<p className="Featured--title">O que a mídia tem a dizer sobre o Telegram:</p>
					<span>Confira o que os maiores portais de tecnologia pensam a nosso respeito</span>
					<div className="Featured--icons">
						<img alt="Uol" className="Featured--icons__uol" src="https://bit.ly/2If3kSd" />
						<img alt="Mac Magazine" className="Featured--icons__macmagazine" src="https://bit.ly/2tseEop" />
						<img alt="Tableless" className="Featured--icons__tableless" src="https://bit.ly/2K5cIJH" />
					</div>

				</Container>
			</div>
		)
	}
}

export default Featured