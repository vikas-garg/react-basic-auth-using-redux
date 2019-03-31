import axios from 'axios';



let headers = {
    'Content-Type': 'application/json'
}

const apiBaseUrl = 'https://reqres.in/'

let axiosObj = {
    baseURL : apiBaseUrl,
    headers
}

const auth = async (_data) => {
    try {
        let result = await axios({
            ...axiosObj,
            method : 'post',
            url : `api/login`,
            data : _data
        })
        if(result.status === 200){
            console.log(result)
            return result.data  
        } else{
            //handle ERROR
        }
    }
    catch(error){
        console.error(error)
        //handle ERROR
    }
}

const userServices = {
    auth,
};

export default userServices