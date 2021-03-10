export const SHOW_SNACK_BAR = "SHOW_SNACK_BAR";
export const HIDE_SNACK_BAR = "HIDE_SNACK_BAR";

export const TOGGLE_LOADER = "TOGGLE_LOADER";
export const TOGGLE_DISABLE = "TOGGLE_DISABLE";
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";

//Drawers
export const TOGGLE_CONFIGURATION_DRAWER = "TOGGLE_CONFIGURATION_DIALOG";

export const UpdateReducer = (type, payload) => {
    return { type, payload }
}

export const ToggleDialog = (state) => {
    return {
        type: TOGGLE_DIALOG,
        payload: state
    }
}

export const ToggleLoader = (state) => {
    return {
        type: TOGGLE_LOADER,
        payload: state
    }
}

export const ToggleDisable = (state) => {
    return {
        type: TOGGLE_DISABLE,
        payload: state
    }
}

export const ShowSnackBar = (messageType, message, autoHideDuration = 5000, vertical = "top", horizontal = "center") => {
    return {
        type: SHOW_SNACK_BAR,
        payload: { messageType, message, vertical, horizontal, autoHideDuration }
    }
}

export const HideSnackBar = () => {
    return {
        type: HIDE_SNACK_BAR,
        payload: false
    }
}

export const ToggleConfigurationDrawer = (payload) => {
    return {
        type: TOGGLE_CONFIGURATION_DRAWER,
        payload: payload
    }
}