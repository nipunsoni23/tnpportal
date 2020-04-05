import React, { Component } from 'react';
import { CardHeader, CardBody, Card, CardFooter, Table, Button } from 'reactstrap';

import './css/ResultCard.css';

class AdminResultCard extends Component {
    render() {
        let {result} = this.props;
        return (
            <div>
                <Card className="mb-3 custom-width custom-margin">
				<CardHeader className="dark-mode">
                    {result.companyName}            
                    <Button className="delete-button btn-sm"><i className="fa fa-trash"></i> Delete Result</Button>
                    <Button className="edit-button btn-sm"><i className="fa fa-edit"></i> Edit Result</Button>
                </CardHeader>
				<CardBody>
				<Table striped borderless>
					<tbody>
                        <tr>
						<td>Profile</td>
						<td>{result.profile}</td>
						</tr>
						<tr>
						<td>Total Number of Selects</td>
						<td>{result.numTotalSelects}</td>
						</tr>
						<tr>
						<td>Total number of selected Interns</td>
						<td>{result.numIntern}</td>
						</tr>
                        <tr>
						<td>Total number of selected FTEs</td>
						<td>{result.numFTE}</td>
						</tr>
                        { (result.numIntern > 0) ?
                            <tr>
                            <td>List of selected Interns</td>
                            <td>
                            <ul className="list-style">
                            {result.arIntern.map((enrollmentNum, index) => {
                                return <li key={index}>{enrollmentNum}</li>
                            })}
                            </ul>
                            </td>
                        </tr>
                        : null
                        }

                        { (result.numFTE > 0) ?
						<tr>
                            <td>List of selected FTEs</td>
                            <td>
                            <ul className="list-style">
                            {result.arFTE.map((enrollmentNum, index) => {
                                return <li key={index}>{enrollmentNum}</li>
                            })}
                            </ul>
                            </td>
                        </tr>
                        : null
                        }
                    </tbody>		
					</Table>
				       
				</CardBody>
				<CardFooter>
					<div>
						<i className="fa fa-clock-o"></i> 
						&nbsp; <strong>Date of announcement:</strong> {result.dateOfAnnouncement} 
					</div>
				</CardFooter>
			</Card>
            </div>
        )
    }
}

export default AdminResultCard;
