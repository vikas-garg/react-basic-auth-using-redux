import React, { Component } from 'react'
import { connect } from "react-redux";
import userActions from "../actions/userActions"
import { Redirect } from 'react-router-dom'


class Login extends Component {

	state = {
		data: {
			email: "",
			password: ""
		},
		validationError: {
			ERROR: false,
			errors: {}
		},
		loader: false,
		auth: this.props.user.token.length ? true : false,
	}
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.user.token !== this.props.user.token) {
			this.setState({
				auth: this.props.user.token.length ? true : false
			})
		}
	}


	handleChange(_event) {
		const { data } = this.state
		const { name, value, type } = _event.target

		if (type !== "number" || (_event.target.max && (parseInt(value, 10) <= parseInt(_event.target.max, 10))) || value === '') {
			this.setState({
				data: {
					...data,
					[name]: value
				}
			})
		}
	}

	handleSubmit(event) {
		const { data } = this.state
		const validationError = validate(data)
		if (validationError.ERROR) {
			this.setState({ validationError })
		} else {
			this.props.authenticate(data)
		}


		event.preventDefault();
	}

	render() {
		const { data, validationError, auth } = this.state
		const { email, password } = data
		const { errors } = validationError

		return (
			<React.Fragment>
				{
					auth ? <Redirect to={'/dashboard'} /> :
						<div className="container">
							<h2>Login form</h2>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="email">Email:</label>
									<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
									{
										validationError.ERROR && errors.email && errors.email.length
											? <div className="alert alert-danger">{errors.email}</div>
											: <React.Fragment />
									}
								</div>
								<div className="form-group">
									<label htmlFor="pwd">Password:</label>
									<input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={password} onChange={this.handleChange} />
									{
										validationError.ERROR && errors.password && errors.password.length
											? <div className="alert alert-danger">{errors.password}</div>
											: <React.Fragment />
									}
								</div>
								<button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>
							</form>
						</div>
				}
			</React.Fragment>
		)
	}

}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = {
	authenticate: userActions.auth
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const validate = (data) => {
	let errors = {}
	let ERROR = false

	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!data.email.length) {
		ERROR = true
		errors.email = 'Kindly Enter Your Email'
	} else if (!re.test(data.email)) {
		ERROR = true
		errors.email = 'Email is not correct!'
	}

	if (!data.password || !data.password.length) {
		ERROR = true
		errors.password = 'Password is Required'
	}

	return { ERROR, errors }
}