import axios from 'axios';


//THE API Call To process Payment
//STRIPE NEED A SERVER
//WE WILL USE CLOUD FUNCTIONS FORTHIS SERVER    
const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-ts/us-central1/api',
}
);

export default instance;

