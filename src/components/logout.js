import React, { Component } from 'react';
import {updateLOGOUT} from "../actions/sync/userActions"
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";


class logout extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
		this.props.updateLOGOUT();
	}
	render() {
		return (
			<Redirect to={'/'} />
		);
	}
}


const mapStateToProps = state => ({})

const mapDispatchToProps = {
	updateLOGOUT: updateLOGOUT
}

export default connect(mapStateToProps, mapDispatchToProps)(logout);
