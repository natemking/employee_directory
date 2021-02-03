import React, { Component } from 'react';
import './style.css';
import { API }from '../../utils/API'



class Table extends Component {
  state = { 
    employee: [],
  }

  componentDidMount(){
    this.searchRandoUser();
  }

  searchRandoUser = async () => {
    try {
      const users = await API.search();
      const  { results } = users.data
      
      this.setState({ employee: results })
      console.log(this.state.employee)
    } catch (err) { console.error(err) }
  }
  
  render() { 
    return ( 
        <table className="table table-light table-striped table-responsive-sm col-10 mx-auto mt-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Cell</th>
              <th scope="col">Email</th>
              <th scope="col">Start Date</th>
            </tr>
          </thead>
          <tbody>
          {/* Map the employees returned from the API call in state to the table rows */}
          {this.state.employee.map((employee, i) => (
            <tr key={`row-${i}`}>
              <td className="align-middle" type="photo" key={`photo-${i}`}><img src={employee.picture.large} alt="employee" /></td>
              <td className="align-middle" type="firstName" key={`first-${i}`}>{employee.name.first}</td>
              <td className="align-middle" type="lastName" key={`last-${i}`}>{employee.name.last}</td>
              <td className="align-middle" type="phone" key={`cell-${i}`}>{employee.cell}</td>
              <td className="align-middle" type="email" key={`email-${i}`}>{employee.name.email}</td>
              <td className="align-middle" type="startDate" key={`startDate-${i}`}>
                {/* Convert the ISO date returned from the API into mm/dd/yyyy format */}
                {new Date(employee.registered.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
     );
  }
}
 
export default Table;


 