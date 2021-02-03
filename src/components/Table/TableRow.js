import React from 'react';

const TableRow = (props) => {
    return (
        <tr>
            <td className="align-middle" type="photo"><img src={props.employee.picture.large} alt="employee" /></td>
            <td className="align-middle" type="firstName">{props.employee.name.first}</td>
            <td className="align-middle" type="lastName">{props.employee.name.last}</td>
            <td className="align-middle" type="phone">{props.employee.cell}</td>
            <td className="align-middle" type="email">{props.employee.name.email}</td>
            <td className="align-middle" type="startDate">
                {/* Convert the ISO date returned from the API into mm/dd/yyyy format */}
                {new Date(props.employee.registered.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
            </td>
        </tr>
    )
}

export default TableRow;