import React from 'react';
import { connect } from 'react-redux'
import UiField from '../../components/ui/field/UiField';
import { auth, resetError } from '../../actions/user';

class AuthForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    login = e => {
        e.preventDefault();
        this.props.auth({
            login: this.state.login,
            password: this.state.password
        });
    };

    setField = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    render () {
        console.log(this.props);
        const errorRender = err => <div className="error">{ err }</div>;

        return (
            <form className="auth-form" onSubmit={ this.login }>
                <UiField
                    value={this.state.login}
                    label="Login:"
                    type="text"
                    name="login"
                    required
                    autoComplete="login"
                    onChange={v => this.setField('login', v)}
                    onFocus={() => this.props.resetError()}
                />
                <UiField
                    value={this.state.password}
                    label="Password:"
                    type="password"
                    name="password"
                    required
                    autoComplete="password"
                    onChange={v => this.setField('password', v)}
                    onFocus={() => this.props.resetError()}
                />
                { this.props.error && errorRender(this.props.error) }
                <button type="submit">Auth</button>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    isAuth: state.user.isAuth,
    error: state.user.error
});

const mapDispatchToProps = dispatch => ({
    auth: data => dispatch(auth(data)),
    resetError: () => dispatch(resetError()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthForm);
