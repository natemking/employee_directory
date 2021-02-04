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
        search: ''
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
    

    handleInputChange = (e) => {
        e.preventDefault();
        // Destructure name & value from event.target
        const { name , value } = e.target
         // Set results to state
        this.setState({ [name]: value })

        let filtered = this.state.employees.filter((search) => {
            const fullName = `${search.name.first} ${search.name.last}`
            return  fullName.toLowerCase().includes(this.state.search.toLowerCase())
        })
       
        console.log(filtered);
        this.setState({ employees: filtered })
        
    }  

    
    render() { 
        return ( 
            <main className="wrapper">
                <SearchBar 
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}

                /> 
                <Table 
                    data={this.state.employees} 
                    sort={this.sortData}
                />
            </main>
         )
    }
}


 
export default Wrapper;
