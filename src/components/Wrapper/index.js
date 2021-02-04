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
        saved: [],
        search: ''
    }

    componentDidMount() {
        this.searchRandomUser();
    }

    // Search for Random users to populate the employee table
    searchRandomUser = async () => {
        try {
            // Call the Random User API and assign the results to the user var
            const users = await API.search();
            // Destructure the results to just the results key
            const { results } = users.data
            // Set the state to the results 
            this.setState({ employees: results, saved: results })
        } catch (err) { console.error(err) }
    }

    // Sort the data in the table columns
    sortEmployees = (key, key2) => {
        // If sort is true, sort the asc by the column clicked else sort desc and set state of the employee list. Note this is a nested ternary. Some of the data has two properties hence the 2 paramters in the function but the ternary with one or two properties.
        sort ? (
            // Ascending
            this.setState(key2 === undefined ?
            this.state.employees.sort((a, b) => (a[key] > b[key]) ? 1 : -1) :
            this.state.employees.sort((a, b) => (a[key][key2] > b[key][key2]) ? 1 : -1))
        ) : (
            // Descending
            this.setState(key2 === undefined ?
            this.state.employees.sort((a, b) => (a[key] > b[key]) ? -1 : 1) :
            this.state.employees.sort((a, b) => (a[key][key2] > b[key][key2]) ? -1 : 1))
        );

        sort = !sort
    }
    
    // Allow user to type for a name or phone number and the list dynamically filters to show the results and reveres the search as characters are deleted 
    handleInputChange = (e) => {
        e.preventDefault();
        // Destructure name & value from event.target
        const { name , value } = e.target;
        const { saved } = this.state;
         // Set results to state
        this.setState({ [name]: value })

        const updateSearchResults = async () => {
            // Reset the state to the original employee list
            await this.setState({ employees: saved });
            // Filter out employees that match user query for name or phone#
            let filtered = await this.state.employees.filter((search) => {
                const fullName = `${search.name.first} ${search.name.last}`;
                const phone = search.cell.replace(/[()-]/g, '');

                return fullName.toLowerCase().includes(this.state.search.toLowerCase()) || phone.includes(this.state.search)
            });
            // Update the state with the filtered results
            this.setState({ employees: filtered });
        }
        updateSearchResults()
    }  

    // Render the child elements
    render() { 
        return ( 
            <main className="wrapper">
                <SearchBar 
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                /> 
                <Table 
                    data={this.state.employees} 
                    sort={this.sortEmployees}
                />
            </main>
         )
    }
}

export default Wrapper;
