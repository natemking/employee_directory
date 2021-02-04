import React from 'react';
import './style.css';
import TableRow from './TableRow';

const Table = (props) => {
   
    
    // Map the data from the API and assign it to a var to be rendered
    const tR =  props.data.map( employee => (
        <TableRow key={ employee.id.value } employee={ employee }/>
    ))
     
    // Render the table with the mapped rows of employee data
    return (
        <table className="table table-light table-striped table-responsive-sm col-10 mx-auto mt-5">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th className="table__heading" scope="col">
                        First
                        <i className="fas fa-sort" onClick={() => {props.sort('name', 'first')}}></i>
                    </th>
                    <th className="table__heading" scope="col">
                        Last
                        <i className="fas fa-sort" onClick={() => { props.sort('name', 'last') }}></i>
                    </th>
                    <th className="table__heading" scope="col">
                        Cell
                        <i className="fas fa-sort" onClick={() => {props.sort('cell')}}></i>
                    </th>
                    <th className="table__heading" scope="col">
                        Email
                        <i className="fas fa-sort" onClick={() => { props.sort('email') }}></i>
                    </th>
                    <th className="table__heading" scope="col">
                        Start Date
                        <i className="fas fa-sort" onClick={() => { props.sort('registered', 'date') }}></i>
                    </th>
                </tr>
            </thead>
            <tbody>
                { tR }
            </tbody>
        </table>
    )
}

export default Table;