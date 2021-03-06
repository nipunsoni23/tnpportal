import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getResults } from '../actions/resultActions';
import AdminResultCard from './AdminResultCard';

import {Button} from 'reactstrap';

class AdminResultPage extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        results: PropTypes.array.isRequired,
        getResults: PropTypes.func.isRequired
    };
    
    componentDidMount() { 
        this.props.getResults();     
    }

    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                <div className="col">
                    <div className="col-xl-12 custom-margin custom-width">
                        <Button>
                            Add new result
                        </Button>
                    </div>
                    <div className="col-xl-12">
                {this.props.results.map(function(result, index) {
                    return <AdminResultCard key={result.companyName} result = {result}/>;
                })}
                </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    results: state.result.results
});

export default connect(
    mapStateToProps,
    { getResults }
)
(AdminResultPage);
