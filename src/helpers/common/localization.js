import { setLocalStorage, getLocalStorage } from './localStorage'
import languages from '../../translation'


export const setLocale = (lang) => {
    setLocalStorage('locale', lang);
    window.location.reload();
}

export const getLocale = () => {
    let lang = navigator.language || navigator.userLanguage;
    return getLocalStorage('locale') ? getLocalStorage('locale').toLowerCase() : lang.toLowerCase();
}

export const translateKeyword = (keyword) => {
    let result = "Message Not Found. Please Contact Us";
    const defaultLanguage = "en-us";
    if (!keyword)
        return result;

    const { id } = keyword;
    const locale = "tr-tr";

    const currentLanguagePacket = { ...languages[locale] };

    if (!currentLanguagePacket)
        return result;

    let message = currentLanguagePacket[id];

    if (message !== undefined)
        result = message;
    else {
        const defaultLanguagePacket = { ...languages[defaultLanguage] };
        message = defaultLanguagePacket[id];
        if (message !== undefined) {
            result = message;
        }
    }

    return result;
}