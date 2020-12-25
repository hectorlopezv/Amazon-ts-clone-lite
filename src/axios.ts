import axios from 'axios';


//THE API Call To process Payment
//STRIPE NEED A SERVER
//WE WILL USE CLOUD FUNCTIONS FORTHIS SERVER    
const instance = axios.create({
    baseURL: 'http://'
}
);

export default instance;

