import React, { Component } from 'react';
import './style.css';
import { API } from '../../utils/API'
import Table from '../Table'
import SearchBar from '../SearchBar'

// Var for the sort on click functionality
let sort = true

class Wrapper extends Component {
    
    state = {
        employees: [],
    }

    componentDidMount() {
        this.searchRandoUser();
    }

    // Search for Random Users to populate the employee table
    searchRandoUser = async () => {
        try {
            // Call the Random User API and assign the results to the user var
            const users = await API.search();
            // Destructure the results to just the results key
            const { results } = users.data
            // Set the state to the results 
            this.setState({ employees: results })
            // console.log(results);
        } catch (err) { console.error(err) }
    }

    // Sort the data in the table coloumns
    sortData = (key, key2) => {
        // If sort it true, sort the asc by the column clicked else sort desc and set state. Note this is a nested ternary.
        sort ? (
            this.setState(key2 === undefined ?
            this.state.employees.sort((a, b) => (a[key] > b[key]) ? 1 : -1) :
            this.state.employees.sort((a, b) => (a[key][key2] > b[key][key2]) ? 1 : -1))
        ) : (
            this.setState(key2 === undefined ?
            this.state.employees.sort((a, b) => (a[key] > b[key]) ? -1 : 1) :
            this.state.employees.sort((a, b) => (a[key][key2] > b[key][key2]) ? -1 : 1))
        );
        
        sort = !sort
    }
    
    render() { 
        return ( 
            <main className="wrapper">
                <SearchBar /> 
                <Table 
                    data={this.state.employees} 
                    sort={this.sortData}
                />
            </main>
         )
    }
}
 
export default Wrapper;
