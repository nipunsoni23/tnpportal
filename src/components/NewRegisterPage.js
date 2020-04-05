import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class NewRegisterPage extends Component {

    state = {
        enrollmentNum: '',
        password: '',
        role: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if(error !== prevProps.error){
            //Check for Register Error
            if(error.id === 'REGISTER_FAIL'){
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

        const { enrollmentNum, password, role } = this.state;

        //Create a user object
        const newUser = {
            enrollmentNum,
            password,
            role
        };

        //Attempt to register
        this.props.register(newUser);
    }

    render() {
        return (

            <div className="custom-width custom-margin">
                <div className="card custom-margin register-card">
                <div className="card-body">
                    <h5 className="card-title">User Registration</h5>
                    <div className="card-text">
                        { this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert>           
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
                                <br/>
                                <Label for="role">Role</Label>
                                <Input
                                    type="text"
                                    name="role"
                                    id="role"
                                    placeholder="STUDENT"
                                    onChange={this.onChange}
                                    required
                                />
                                <Button color="dark" style={{ marginTop: '2rem'}} block>
                                    Register
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
    { register, clearErrors }
)
(NewRegisterPage);
