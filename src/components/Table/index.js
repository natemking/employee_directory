import React from 'react';
import './style.css';

const Table = () => {
  return (
    <table class="table table-light table-striped table-responsive-sm col-10 mx-auto mt-5">
      <thead class="thead-dark">
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
        <tr>
          <td className="align-middle"><img src="https://randomuser.me/api/portraits/women/67.jpg" /></td>
          <td className="align-middle">Kinga</td>
          <td className="align-middle">Nonono</td>
          <td className="align-middle">215-131-2222</td>
          <td className="align-middle">her@email.com</td>
          <td className="align-middle">03/23/2016</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;