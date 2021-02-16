import axios from "axios";

const apiPath = 'http://localhost:8888/boilerplate/wp-json/wp/v2';

export function getAPIPath() {
    return apiPath;
}

export function getRequest(resourcePath) {
    return axios.get(apiPath + resourcePath)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        })
}
