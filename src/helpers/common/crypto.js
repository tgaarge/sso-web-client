import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

const secretKey = "_TGA_A_TGA_SSO"

export const encrypt = (text) => {
    return CryptoAES.encrypt(text.toString(), secretKey).toString();
}

export const decrypt = (text) => {
    var _decrptText = CryptoAES.decrypt(text.toString(), secretKey);
    return _decrptText.toString(CryptoENC);
}