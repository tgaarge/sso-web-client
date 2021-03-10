import { LOGOUT_USER, LOGIN_USER } from '../../actions/account/user_actions'
import { checkAuthorizaiton } from '../../../helpers/account/authorization';

const initialState = {
    Id: 0,
    UserName: "",
    FirstName: "",
    LastName: "",
    loggedIn: checkAuthorizaiton()
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            return { ...state, ...payload, loggedIn: true }
        case LOGOUT_USER:
            return { ...state, loggedIn: payload }
        default:
            return { ...state };
    }
}

export default reducer;