import { postService } from '../index'
import { getServiceErrorMessage } from '../../helpers/services'

//#region postServices
export const _login = (username, password) => new Promise((resolve, reject) => {
    postService('/api/authentication/login', { username, password }).then(response => {
        resolve(response);
    }).catch(error => {
        reject(getServiceErrorMessage(error.response));
    })
});
//#endregion