import React, { Component } from 'react';
import API from '../../api';
import {
	Col, Card, CardImg, CardText, CardBody,
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
		let page = this.state.post.map((post, key) => {
			return (
				<div className="blog row" key={key}>
					<Col sm={{ size: 4 }}>
						<Card>
							<CardImg top width="100%" src="https://bit.ly/2tlBGgA" alt="Card image cap" />
							<CardBody>
								<CardSubtitle className="blog--date">{post[0].date}</CardSubtitle>
								<CardTitle className="blog--postname">{post[0].title.rendered.replace('&#8211;', '–')}</CardTitle>

								<CardText className="blog--descript">{post[0].excerpt.rendered.substr(3, 170) + '...'}</CardText>
								<Button size="sm" outline color="info"><a href={post[0].guid.rendered}>Leia Mais</a></Button>
							</CardBody>
						</Card>
					</Col>

					
					<Col sm={{ size: 4 }}>
						<Card>
							<CardImg top width="100%" src="https://bit.ly/2tlBGgA" alt="Card image cap" />
							<CardBody>
								<CardSubtitle className="blog--date">{post[1].date}</CardSubtitle>
								<CardTitle className="blog--postname">{post[1].title.rendered.replace('&#8211;', '–')}</CardTitle>

								<CardText className="blog--descript">{post[1].excerpt.rendered.substr(3, 200) + '...'}</CardText>
								<Button size="sm" outline color="info"><a href={post[1].guid.rendered}>Leia Mais</a></Button>
							</CardBody>
						</Card>
					</Col>

					<Col sm={{ size: 4 }}>
						<Card>
							<CardImg top width="100%" src="https://bit.ly/2tlBGgA" alt="Card image cap" />
							<CardBody>
								<CardSubtitle className="blog--date">{post[2].date}</CardSubtitle>
								<CardTitle className="blog--postname">{post[2].title.rendered.replace('&#8211;', '–')}</CardTitle>

								<CardText className="blog--descript">{post[2].excerpt.rendered.substr(3, 200) + '...'}</CardText>
								<Button size="sm" outline color="info"><a href={post[2].guid.rendered}>Leia Mais</a></Button>
							</CardBody>
						</Card>
					</Col>





				</div>
			)
		}

		)
		return page
	}

}

export default Blog