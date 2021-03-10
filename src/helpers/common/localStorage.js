import ls from 'local-storage'
import { encrypt, decrypt } from './crypto'

export const setLocalStorage = (key, value) => {
    const _value = encrypt(value);
    ls.set(key, _value);
}

export const deleteLocalStorage = (key) => {
    ls.remove(key);
}

export const getLocalStorage = (key) => {
    let value = ls.get(key);
    if (value)
        value = decrypt(value);
    return value
}

//#region Account
export const getCurrentUserInformations = () => {
    return {
        CompanyType: parseInt(getLocalStorage('CompanyType')),
        CompanyID: parseInt(getLocalStorage('CompanyInformationID'))
    }
}

//#endregion