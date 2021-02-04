import axios from 'axios';
//Query 45 users from the US and exclude gender, location, login, dob, landline, and nationality
const apiUrl = 'https://randomuser.me/api/'
const apiQuery = '?results=45&nat=us&exc=gender,location,login,dob,phone,nat'

export const API = {
    search: function() {
        return axios.get(apiUrl + apiQuery)
    }
}