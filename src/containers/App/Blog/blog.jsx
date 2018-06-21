import React, { Component } from 'react';
import API from '../../api';
import {
	Col, Container, Card, CardImg, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			post: [],
		}
	}

	componentDidMount() {
		this.setState({ isLoading: true })
		fetch(`${API}`)
			.then(res => res.json())
			.then(res => {
				this.setState({
					post: [res],
					isLoading: false,
				})
			})

	}

	render() {
		const page = this.state.post.map((post, key) => {
			return (
				<div className="blog" key={key}>
					<p className="blog--section--title">O que estamos pensando:</p>
					<span className="blog--section--subtitle">Novidades e notícias sobre o Telegram...</span>
					<Container>
						<div className="row">

							<Col sm={{ size: 4 }}>
								<div className="cardd">
									<div className="front">
										<Card>
											<CardImg top width="100%" src="https://bit.ly/2tlBGgA" alt="Imagem do Post" />
											<CardBody>
												<CardSubtitle className="blog--date">{post[0].date}</CardSubtitle>
												<CardTitle className="blog--postname">{post[0].title.rendered.replace('&#8211;', '–')}</CardTitle>
											</CardBody>
										</Card>
									</div>
									<div className="back">
										<p className="blog--post--descript">{post[0].excerpt.rendered.substr(3, 240) + '...'}</p>
										<a target="_blank" href={post[0].guid.rendered}><Button>Continuar lendo...</Button></a>
									</div>
								</div>
							</Col>


							<Col sm={{ size: 4 }}>
								<div className="cardd">
									<div className="front">
										<Card>
											<CardImg top width="100%" src="https://bit.ly/2tlBGgA" alt="Imagem do Post" />
											<CardBody>
												<CardSubtitle className="blog--date">{post[1].date}</CardSubtitle>
												<CardTitle className="blog--postname">{post[1].title.rendered.replace('&#8211;', '–')}</CardTitle>
											</CardBody>
										</Card>
									</div>
									<div className="back">
										<p className="blog--post--descript">{post[1].excerpt.rendered.substr(3, 240) + '...'}</p>
										<a target="_blank" href={post[1].guid.rendered}><Button>Continuar lendo...</Button></a>
									</div>
								</div>
							</Col>


							<Col sm={{ size: 4 }}>
								<div className="cardd">
									<div className="front">
										<Card>
											<CardImg top width="100%" src="https://bit.ly/2tlBGgA" alt="Imagem do Post" />
											<CardBody>
												<CardSubtitle className="blog--date">{post[2].date}</CardSubtitle>
												<CardTitle className="blog--postname">{post[2].title.rendered.replace('&#8211;', '–')}</CardTitle>
											</CardBody>
										</Card>
									</div>
									<div className="back">
										<p className="blog--post--descript">{post[2].excerpt.rendered.substr(3, 240) + '...'}</p>
										<a target="_blank" href={post[2].guid.rendered}><Button>Continuar lendo...</Button></a>
									</div>
								</div>
							</Col>


						</div>
					</Container>



				</div>
			)
		}

		)
		return page
	}

}

export default Blog


/* 
<div className="blog--social">
	<span className="blog--social__icon"><i className="fab fa-telegram"></i>Compartilhar</span>
	<span className="blog--social__icon"><i className="fab fa-twitter"></i>Tweet</span>
</div> 
*/