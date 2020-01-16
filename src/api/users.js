import axios from "axios";

export const getUsers = () => {
    return axios.get('/users.json', {
        params: {
            limit: 1000
        }
    })
};


export const addUser = ({firstName, lastName, id}) => {
    return axios.put(`/users/${id}.json`, {
        'firstName': firstName,
        'lastName': lastName,
        'id': id
    })
};

export const deleteUser = (userId) => {
    return axios.delete(`https://saga-6b530.firebaseio.com/users/${userId}.json`)
};
