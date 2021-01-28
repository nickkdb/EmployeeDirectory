import axios from 'axios';

export default {
    listEmployees: () => {
         return axios.get("https://randomuser.me/api/?results=100&nat=us&inc=name,phone,email,dob,picture,login")
    }
}