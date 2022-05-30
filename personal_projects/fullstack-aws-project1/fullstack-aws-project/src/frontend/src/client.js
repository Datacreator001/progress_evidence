import fetch from "unfetch";

const checkStatus = res => {
    if (res.ok) { // .ok equals status code of 200{
        return res // return response
    }
    ;
    //convert non-2xx HTTP responses into errors
    const error = new Error(res.statusText); //If not a status code of 200, it will return error
    error.response = res; // returns error as response
    return Promise.reject(error)
}

export const getAllStudents = () =>
    fetch("api/v1/students")
        .then(checkStatus)