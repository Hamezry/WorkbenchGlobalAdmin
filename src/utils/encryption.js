import CryptoJS from 'crypto-js'

const { REACT_APP_KEY: ENC_KEY, REACT_APP_VECTOR: ENC_VECTOR } = process.env

const key = ENC_KEY
const iv = ENC_VECTOR

export const manager = {
    encrypt: (data) => do_encrypt_data(data),
    decrypt: (data) => do_decrypt_data(data),
}


function do_encrypt_data(data) {
    if (Array.isArray(data)) {
        data.forEach((item, i) => {
            data[i] = do_encrypt_data(item)
        })
    } else if (typeof data === 'object') {
        for (let item in data) {
            if (data.hasOwnProperty(item)) {
                if (Array.isArray(data[item])) {
                    data[item] = do_encrypt_data(data[item])
                } else if (typeof data[item] === 'object') {
                    data[item] = do_encrypt_data(data[item])
                } else {
                    data[item] = do_encrypt(data[item].toString())
                }
            }
        }
    } else {
        data = do_encrypt(data.toString())
    }
    return data
}

function do_decrypt_data(data) {
    if (Array.isArray(data)) {
        data.forEach((item, i) => {
            data[i] = do_decrypt_data(item)
        })
    } else if (typeof data === 'object') {
        for (let item in data) {
            if (data.hasOwnProperty(item)) {
                if (Array.isArray(data[item])) {
                    data[item] = do_decrypt_data(data[item])
                } else if (typeof data[item] === 'object') {

                    data[item] = do_decrypt_data(data[item])
                } else {
                    data[item] = do_decrypt(data[item].toString())
                }
            }
        }
    } else {
        data = do_decrypt(data.toString())
    }
    return data
}

function do_encrypt(data) {
    let encrypted = CryptoJS.AES.encrypt(data,
        CryptoJS.enc.Utf8.parse(key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString()
    return encrypted
}

function do_decrypt(data) {
    if ((typeof data === 'string') && data.trim().length === 0) {
        return data
    }

    try {
        let decrypted = CryptoJS.AES.decrypt(data,
            CryptoJS.enc.Utf8.parse(key),
            {
                iv: CryptoJS.enc.Utf8.parse(iv),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        return decrypted
    } catch (e) {
        return data.toString()
    }

}


export default manager