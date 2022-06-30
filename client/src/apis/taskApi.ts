import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';



// http://localhost:8004
// https://spring-boot-tasks.herokuapp.com

const baseURL = 'http://localhost:8004/tasks';

const taskApi = axios.create({
    baseURL: baseURL,
    headers: {
        Accept: 'application/json',
    },
})

// interceptor para peticiones con errores
taskApi.interceptors.request.use((
    request: AxiosRequestConfig
) => {
    if (request.headers === undefined) {
        request.headers = {};
    }
    request.headers.common = request.headers.common ?? {}
    return request;
},
    (error) => {
        return Promise.reject(error);
    }
);

// interceptor para tratar respuestas con errores
taskApi.interceptors.response.use((
    response: AxiosResponse
) => {
    return response;
}
    , (error) => {
        if (error.response.status === 404) {
            // do something
            console.log('NOT FOUND');
        }
        return Promise.reject(error);
    }
);

export default taskApi;