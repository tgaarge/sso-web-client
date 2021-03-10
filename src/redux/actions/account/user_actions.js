import { _login } from '../../../services/account'
import { ShowSnackBar, ToggleLoader } from '../view'
import { RemoveAuthorization, getAuthorizationKey } from '../../../helpers/account/authorization'
import { translateKeyword } from '../../../helpers/common/localization'
import { messages } from '../../../translation/messages'
import jwt_decode from 'jwt-decode'

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const LoginUser = (username, password) => {
    return dispatch => {
        dispatch(ToggleLoader(true));
        _login(username, password).then(response => {
            dispatch(ToggleLoader(false));
            if (response.success) {
                dispatch(ShowSnackBar('success', translateKeyword(messages.LOGIN_SUCCESS_TEXT), 10000));
            } else {
                dispatch(ShowSnackBar('error', translateKeyword(messages.LOGIN_ERROR_TEXT), 10000));
            }
            // dispatch({
            //     type: LOGIN_USER,
            //     payload: true
            // });
        }).catch(message => {
            dispatch(ToggleLoader(false));
            dispatch(ShowSnackBar('error', message, 10000));
        });
    }
}

export const checkAuth = () => (dispatch) => {
    const token = getAuthorizationKey();
    if (token) {
        const dateNow = new Date();
        const { exp } = jwt_decode(token);
        if (exp < (dateNow.getTime() / 1000)) {
            RemoveAuthorization();
            dispatch({
                type: LOGOUT_USER,
                payload: false
            });
            return false;
        } else
            return true;
    } else
        return false;
}

export const LogoutUser = () => {
    return dispatch => {
        RemoveAuthorization();
        dispatch({
            type: LOGOUT_USER,
            payload: false
        });
    }
}



