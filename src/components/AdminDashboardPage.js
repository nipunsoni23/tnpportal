import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobs } from '../actions/jobActions';
import AdminCompanyCard from './AdminCompanyCard';
import {Button} from 'reactstrap';

class DashboardPage extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        jobs: PropTypes.array.isRequired,
        getJobs: PropTypes.func.isRequired
    };
    
    componentDidMount() { 
        this.props.getJobs();     
    }

    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                <div className="col">
                    <div className="col-xl-12 custom-margin custom-width">
                        <Button>
                            Add new job
                        </Button>
                    </div>
                    <div className="col-xl-12">
                {this.props.jobs.map(function(job, index) {
                    return <AdminCompanyCard key={job.drive} job = {job}/>;
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
    jobs: state.job.jobs
});

export default connect(
    mapStateToProps,
    { getJobs }
)
(DashboardPage);
