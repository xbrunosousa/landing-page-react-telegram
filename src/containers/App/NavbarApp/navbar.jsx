import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

class NavbarApp extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div className="navbar-app">
				<div className="container">
					<Navbar color="light" light expand="md">
						<NavbarBrand href="#"><i className="fab fa-telegram"></i> telegram</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="#">Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#">FAQ</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#">Apps</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#">API</NavLink>
								</NavItem>								
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			</div>
		)
	}
}

export default NavbarApp