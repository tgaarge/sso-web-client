import axios from 'axios'
import jwt_decode from 'jwt-decode'
import ls from 'local-storage'
import { deleteLocalStorage } from '../common/localStorage'

export const getCurrentUser = () => {
    const authorizaitonKey = ls.get('Authorization');
    var decoded = jwt_decode(authorizaitonKey.replace("bearer ", ""));
    return decoded;
}

export const checkAuthorizaiton = () => {
    var result = false;
    const authorizaitonKey = ls.get('Authorization');
    if (authorizaitonKey) {
        result = true;
    }
    return result;
}

export const getAuthorizationKey = () => {
    return ls.get('Authorization');
}

export const setAuthorizationKey = (value) => {
    value = "bearer " + value;
    return ls.set('Authorization', value);
}

export const RemoveAuthorization = () => {
    deleteLocalStorage("Authorization");
    deleteLocalStorage("refreshToken");
    deleteLocalStorage("expiration");
}

export const setAuthorizationToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
};