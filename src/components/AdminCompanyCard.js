import React, { Component } from 'react';
import { CardHeader, CardBody, Card, CardFooter, Table } from 'reactstrap';
import {Button} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

class AdminCompanyCard extends Component {
    render() {
		let batches = "";
		this.props.job.targetBatchYear.forEach(batch => {
			batches = batches + " " + batch;
		})

		let courses = "";
		this.props.job.targetCourses.forEach(course => {
			courses = courses + " " + course;
		})

        return (
			<Card className="mb-3 custom-width custom-margin">
                <CardHeader className="dark-mode">
                    {this.props.job.drive}          
                    <Button className="delete-button btn-sm"><i className="fa fa-trash"></i> Delete Job</Button>
                    <Button className="edit-button btn-sm"><i className="fa fa-edit"></i> Edit Job</Button>
                </CardHeader>
				<CardBody>
				<Table striped borderless>
					<tbody>
						<tr>
						<td>Visit Date</td>
						<td>{this.props.job.visitDate}</td>
						</tr>
						<tr>
						<td>Profile</td>
						<td>{this.props.job.profile}</td>
						</tr>
						<tr>
						<td>Domain</td>
						<td>{this.props.job.domain}</td>
						</tr>
						<tr>
						<td>Role</td>
						<td>{this.props.job.role}</td>
						</tr>
						<tr>
						<td>Location</td>
						<td>{this.props.job.location}</td>
						</tr>
						<tr>
						<td>Job Description</td>
						<td>{this.props.job.description}</td>
						</tr>
						<tr>
						<td>Target Batches</td>
						<td>{batches}</td>
						</tr>
						<tr>
						<td>Target Courses</td>
						<td>{courses}</td>
						</tr>
						<tr>
						<td>Other information</td>
						<td>{this.props.job.otherInfoForStudents}</td>
						</tr>
							
						<tr>
							<th>Eligibility Criteria</th>
							<th></th>
						</tr>
						{this.props.job.eligibilityCriteria.cutoffPercentage ? 
							<tr>
								<td>Cutoff percentage</td>
								<td>{this.props.job.eligibilityCriteria.cutoffPercentage}</td>
							</tr>
							: null
						}	
						{this.props.job.eligibilityCriteria.activeBacklogs ? 
							<tr>
								<td>Active Backlogs</td>
								<td>{this.props.job.eligibilityCriteria.activeBacklogs}</td>
							</tr>
							: null
						}	
						{this.props.job.eligibilityCriteria.deadBacklogs ? 
							<tr>
								<td>Dead Backlogs</td>
								<td>{this.props.job.eligibilityCriteria.deadBacklogs}</td>
							</tr>
							: null
						}	

						<tr>
							<th>Selection Procedure</th>
							<th></th>
						</tr>
						{this.props.job.selectionProcedure.writtenTest ? 
							<tr>
								<td>Written Test</td>
								<td>{this.props.job.selectionProcedure.writtenTest}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.onlineTest ? 
							<tr>
								<td>Online Test</td>
								<td>{this.props.job.selectionProcedure.onlineTest}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.groupDiscussion ? 
							<tr>
								<td>Group Discussion</td>
								<td>{this.props.job.selectionProcedure.groupDiscussion}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.technicalRound ? 
							<tr>
								<td>Technical Round</td>
								<td>{this.props.job.selectionProcedure.technicalRound}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.hrRound ? 
							<tr>
								<td>HR Round</td>
								<td>{this.props.job.selectionProcedure.hrRound}</td>
							</tr>
							: null
						}
						
						<tr>
							<th>Compensation Offered</th>
							<th></th>
						</tr>
						{this.props.job.compensationOffered.stipend ? 
							<tr>
								<td>Stipend</td>
								<td>{this.props.job.compensationOffered.stipend} per month</td>
							</tr>
							: null
						}
						
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.fixed ? 
							<tr>
								<td>Fixed pay</td>
								<td>{this.props.job.compensationOffered.breakupCTC.fixed} LPA</td>
							</tr>
							: null
						}
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.variable ? 
							<tr>
								<td>Variable pay</td>
								<td>{this.props.job.compensationOffered.breakupCTC.variable} LPA</td>
							</tr>
							: null
						}	
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.bonds ? 
							<tr>
								<td>Bonds</td>
								<td>{this.props.job.compensationOffered.breakupCTC.bonds} LPA</td>
							</tr>
							: null
						}	
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.otherAllowances ? 
							<tr>
								<td>Other allowances</td>
								<td>{this.props.job.compensationOffered.breakupCTC.otherAllowances} LPA</td>
							</tr>
							: null
						}
						{this.props.job.compensationOffered.totalCTC ? 
							<tr>
								<th>Total CTC</th>
								<th>{this.props.job.compensationOffered.totalCTC} LPA</th>
							</tr>
							: null
						}		
						</tbody>
					</Table>
				
					<button type="button" className="btn btn-outline-success">Register</button>         
				</CardBody>
				<CardFooter>
					<div>
						<i className="fa fa-clock-o"></i> 
						&nbsp; <strong>Last date to register:</strong> {this.props.job.lastDateToRegister}
					</div>
				</CardFooter>
			</Card> 
        )
    }
}

export default AdminCompanyCard;
