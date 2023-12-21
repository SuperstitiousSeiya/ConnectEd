
const apiUrl = 'http://localhost:4000/api/v1';

let authenticateToken = localStorage.getItem('authenticateToken') || "";


const makeRequest = async (url, method, data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${authenticateToken}`
    };

    const options = {
        method,
        headers,
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (!response.ok) {
            return result;
        }

        return result;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};


const fetchData = async (type, id) => {
    let endpoint = type;

    if (id) {
        endpoint = `${type}/${id}`;
    }

    try {
        const result = await makeRequest(`${apiUrl}/${endpoint}`, 'GET');
        return result
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};


const postData = async (type, data) => {
    
    try {
        const result = await makeRequest(`${apiUrl}/${type}`, 'POST', data);
        return result;
    } catch (error) {
       
    }
};


const updateData = async(type, id, data) => {

    let endpoint = type;

    if (id) {
        endpoint = `${type}/${id}`;
    }
    console.log(endpoint)

    try {
        const result = await makeRequest(`${apiUrl}/${endpoint}`, 'PUT', data);
        return result
    } catch (error) {
        // return error;
        console.error('Error updating data:', error.message);
    }
};


const deleteData = async () => {
    let endpoint = type;

    if (id) {
        endpoint = `${type}/${id}`;
    }
    try {
        const result = await makeRequest(`${apiUrl}/endpoint/123`, 'DELETE');
        return result
    } catch (error) {
        console.error('Error deleting data:', error.message);
    }
};