import { ADD_AKUN, GET_AKUN, DELETE_AKUN } from './actionTypes';

export function getAkun(akun) {
    return {
        type: GET_AKUN,
        payload: akun
    }
}

export function addAkun(akun) {
    return {
        type: ADD_AKUN,
        payload: akun
    }
}

export function deleteAkun(akun) {
    return {
        type: DELETE_AKUN,
        payload: akun
    }
}
