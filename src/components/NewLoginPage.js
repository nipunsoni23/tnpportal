import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, Label, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class NewLoginPage extends Component {
    
    state = {
        enrollmentNum: null,
        password: null,
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if(error !== prevProps.error){
            //Check for Login Error
            if(error.id === 'LOGIN_FAIL'){
                this.setState({ msg: error.msg.msg });
            }
            else {
                this.setState({ msg: null });
            }
        }

        //If authenticated, reset form
        if(isAuthenticated !== prevProps.isAuthenticated && isAuthenticated){
            this.props.clearErrors();
        }      
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { enrollmentNum, password } = this.state;

        const user = {
            enrollmentNum,
            password
        };

        //Attempt to login
        this.props.login(user);
    }

    render() {

        return (
                <div className="custom-width custom-margin">
                        <div className="card login-card custom-margin">
                        <div className="card-body">
                            <h5 className="card-title">User Login</h5>
                            <div className="card-text">
                            { this.state.msg ? 
                            <Alert color="danger">{ this.state.msg }</Alert>
                             
                             : null }
                             <br/>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>                                                       
                                    <Label for="enrollmentNum">Username</Label>
                                    <Input
                                        type="text"
                                        name="enrollmentNum"
                                        id="enrollmentNum"
                                        placeholder="Username"
                                        onChange={this.onChange}
                                        required
                                    />
                                    <br/>
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={this.onChange}
                                        required
                                    />
                                    <Button color="dark" style={{ marginTop: '2rem'}} block>
                                        Login
                                    </Button>
                                </FormGroup>
                            </Form>                      
                            </div>
                        </div>
                        </div>
                    </div>

        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { login, clearErrors }
)
(NewLoginPage);

