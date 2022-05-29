import { ADD_AKUN, GET_AKUN, DELETE_AKUN } from "./actionTypes";
import { initValAdmin } from "../initVal";

export default function adminReducer(state = initValAdmin, action) {

    switch (action.type) {

        case ADD_AKUN:
            return {
                akun: [...state.akun, action.payload]
            }

        case GET_AKUN:
            return {
                akun: action.payload
            }

        case DELETE_AKUN:
            return {
                akun: state.akun.filter(akun => akun.id_akun !== action.payload)
            }

        default:
            return state

    }



}