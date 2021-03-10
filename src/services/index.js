import axios from 'axios'
import AppConfig from '../config.json'
import { getAuthorizationKey } from '../helpers/account/authorization'
import { getLocale } from '../helpers/common/localization'

export const getService = (url, setAuthroziation = true) => new Promise((resolve, reject) => {
    url = AppConfig.serviceUrl + url;
    var config = {};
    if (setAuthroziation) {
        config.headers = {
            "Authorization": getAuthorizationKey(),
            "Accept-Language": getLocale()
        }
    }
    axios.get(url, config)
        .then(response => resolve(response.data))
        .catch(err => { reject(err); });
});

export const postService = (url, data, setAuthroziation = true) => new Promise((resolve, reject) => {
    url = AppConfig.serviceUrl + url;
    var config = {};
    if (setAuthroziation) {
        config.headers = {
            "Authorization": getAuthorizationKey(),
            "Accept-Language": getLocale(),
            "Content-Type": "application/json"
        }
    }
    axios.post(url, data, config)
        .then(response => resolve(response.data))
        .catch(err => { reject(err); });
});


export const deleteService = (url, setAuthroziation = true) => new Promise((resolve, reject) => {
    url = AppConfig.serviceUrl + url;
    var config = {};
    if (setAuthroziation) {
        config.headers = {
            "Authorization": getAuthorizationKey(),
            "Accept-Language": getLocale()
        }
    }
    axios.delete(url, config)
        .then(response => resolve(response.data))
        .catch(err => {
            reject(err)
        });
});