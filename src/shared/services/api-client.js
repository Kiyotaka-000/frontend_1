import axios from 'axios';

export const ApiClient = {
    async get(URL){
        try{
            const res = await axios.get(URL);
            return res;
        }catch(err){
            throw err;
        }
    },
    async post(URL, data){
        try{
            const res = await axios.post(URL, data);
            return res;
        }catch(err){
            throw err;
        }
    }
}