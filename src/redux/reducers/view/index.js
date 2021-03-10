import {
    SHOW_SNACK_BAR,
    HIDE_SNACK_BAR,
    TOGGLE_DISABLE,
    TOGGLE_LOADER,
    TOGGLE_DIALOG,
    TOGGLE_CONFIGURATION_DRAWER
} from '../../actions/view'

const initialState = {
    snackBar: {
        showSnackBar: false,
        message: '',
        autoHideDuration: 5000,
        messageType: 'success',
        vertical: 'top',
        horizontal: 'center'
    },
    loader: {
        showLoader: false,
        disabled: false
    },
    dialog: {
        show: false
    },
    drawer: {
        configuration: {
            show: false
        }
    }
};

function viewReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SHOW_SNACK_BAR:
            const { messageType, message, vertical, horizontal, autoHideDuration } = payload;
            return { ...state, snackBar: { ...state.snackBar, showSnackBar: true, message, messageType, vertical, horizontal, autoHideDuration } };
        case HIDE_SNACK_BAR:
            return { ...state, snackBar: { ...state.snackBar, showSnackBar: false, message: '' } };
        case TOGGLE_LOADER:
            return { ...state, loader: { ...state.loader, showLoader: payload, disabled: payload } };
        case TOGGLE_DISABLE:
            return { ...state, loader: { ...state.loader, disabled: payload } };
        case TOGGLE_DIALOG:
            return { ...state, dialog: { ...state.dialog, show: payload } };
        case TOGGLE_CONFIGURATION_DRAWER:
            return { ...state, drawer: { ...state.drawer, configuration: { ...state.drawer.configuration, show: payload } } };
        default:
            return { ...state };
    }
}

export default viewReducer;