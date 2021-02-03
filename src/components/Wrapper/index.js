import React, { Component } from 'react';
import './style.css';
import { API } from '../../utils/API'
import Table from '../Table'
import SearchBar from '../SearchBar'

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
            console.log(results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
        } catch (err) { console.error(err) }
    }

    sortAlpha = () => {
        // this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        console.log("click");
    }
    
    render() { 
        return ( 
            <main className="wrapper">
                <SearchBar /> 
                <Table 
                    data={this.state.employees} 
                    sort={this.sortAlpha}
                />
            </main>
         )
    }
}
 
export default Wrapper;
