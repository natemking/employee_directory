import React from 'react';
import './style.css';

const Table = () => {
  return (
    <table class="table table-light table-striped col-10 mx-auto mt-5">
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
          <td><img src="https://randomuser.me/api/portraits/women/67.jpg" /></td>
          <td>Kinga</td>
          <td>Nonono</td>
          <td>215-131-2222</td>
          <td>her@email.com</td>
          <td>03/23/2016</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;