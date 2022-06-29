import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseUrl = 'http://localhost:8004/tasks';
// axios.defaults.headers.common['Accept'] = 'application/json';

const taskApi = axios.create({
    baseURL: baseUrl,
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