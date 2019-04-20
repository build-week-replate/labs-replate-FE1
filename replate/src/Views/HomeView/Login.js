import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import { login } from '../../actions/login'

class Login extends React.Component {
    state = {
        credentials: {
            email: '',
            password: '',
            type: ''
        }
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
        .then(() => {
          this.props.history.push('/protected')
        });
      };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='email'
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button>
                        {this.props.loggingIn ? (
                            '...Logging In'
                        ) : (
                            'Log In'
                        )}
                    </button>
                </form>
                {this.props.error && <p className="error">{this.props.error}</p>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggingIn: state.isLoggingIn
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login)