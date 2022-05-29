import { getAkun, addAkun, deleteAkun, } from "./actionCreator";
import { axiosInstanceIntercept } from "../../api/axiosInstance";

const config = (token, tokenExp) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
        tokenExp: tokenExp
    }

}

export function getAkunThunk(token, tokenExp) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get('admin/get-akun', config(token, tokenExp))
            console.log(res);
            dispatch(getAkun(res.data))
        } catch (error) {
            console.log(error);
        }

    }

}

export function addAkunThunk(body, token, tokenExp) {

    return async dispatch => {

        try {
            await axiosInstanceIntercept.post('admin/register-akun', body, config(token, tokenExp))
            dispatch(addAkun(body))
        } catch (error) {
            console.log(error);
        }

    }

}

export function deleteAkunThunk(id, token, tokenExp) {

    return async dispatch => {

        try {

            await axiosInstanceIntercept.delete(`admin/delete-akun/${id}`, config(token, tokenExp));

            dispatch(deleteAkun(id));

        } catch (error) {

            console.log(error);

        }
    }

}