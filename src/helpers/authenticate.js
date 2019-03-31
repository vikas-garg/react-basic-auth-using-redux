import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'


class authenticate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.user.token.length ? true : false
        };
    }
    render() {
        const { auth } = this.state
        return (
            <React.Fragment>
                {auth
                    ? this.props.children
                    : <Redirect to={'/'} />
                }
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(authenticate);
