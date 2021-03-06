import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

class LoginPage extends Component {
    state = {
        modal: false,
        enrollmentNum: '',
        password: '',
        msg: null,
        userRole: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const {error, isAuthenticated, user} = this.props;
        if(error !== prevProps.error){
            //Check for Register Error
            if(error.id === 'LOGIN_FAIL'){
                this.setState({ msg: error.msg.msg });
            }
            else {
                this.setState({ msg: null });
            }
        }

        //If authenticated, close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }

        if(isAuthenticated && user && user !== prevProps.user){
            if(user.role==='ADMIN'){
                console.log("User is admin");
                this.setState({userRole: "ADMIN"});
            }
            else{
                console.log("User is student");
                this.setState({userRole: "STUDENT"});
            }
        }
        
    }

    toggle = () => {
        //Clear error
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

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
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Login
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        
                        { this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert>
                             
                        : null }
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>                                                       
                                <Label for="enrollmentNum">Enrollment Num</Label>
                                <Input
                                    type="text"
                                    name="enrollmentNum"
                                    id="enrollmentNum"
                                    placeholder="Enrollment Num"
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem'}} block>
                                    Login
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
});

export default connect(
    mapStateToProps,
    { login, clearErrors }
)
(LoginPage);
