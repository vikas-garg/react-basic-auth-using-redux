import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		return (
			<React.Fragment>
				<div>DashBoard</div>
				<Link to={'/logout'}>LOGOUT</Link>
			</React.Fragment>

		);
	}
}

export default dashboard;