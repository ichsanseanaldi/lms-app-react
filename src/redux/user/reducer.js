import {
    ADD_PROFIL,
    GET_PROFIL,
    ADD_AKUN_SISWA,
    GET_ALL_SISWA,
    ADD_COURSE,
    ADD_MATERI,
    ADD_EXERCISE,
    ADD_EXERCISE_SOAL,
    GET_COURSE,
    GET_MATERI,
    GET_EXERCISE,
    GET_SOAL,
    GET_BADGES,
    GET_COURSE_BY_CODE
} from "./actionTypes";

import { initValUser } from "../initVal";

export default function userReducer(state = initValUser, action) {

    switch (action.type) {

        case ADD_PROFIL:
            return {
                ...state,
                profil: action.payload
            }
        case ADD_AKUN_SISWA:
            return {

                ...state,
                akunSiswa: [...state.akunSiswa, action.payload]
            }
        case ADD_COURSE:
            return {
                ...state,
                course: [...state.course, action.payload]
            }
        case ADD_MATERI:
            return {
                ...state,
                materi: [...state.materi, action.payload]
            }
        case ADD_EXERCISE:
            return {
                ...state,
                exercise: [...state.exercise, action.payload]
            }
        case ADD_EXERCISE_SOAL:
            return {
                ...state,
                soal: [...state.soal, action.payload]
            }
        case GET_ALL_SISWA:
            return {
                ...state,
                siswalist: action.payload
            }
        case GET_PROFIL:
            return {
                ...state,
                profil: action.payload
            }
        case GET_COURSE:
            return {
                ...state,
                course: action.payload
            }
        case GET_COURSE_BY_CODE:
            return {
                ...state,
                course: action.payload
            }
        case GET_MATERI:
            return {
                ...state,
                materi: action.payload
            }
        case GET_EXERCISE:
            return {
                ...state,
                exercise: action.payload
            }
        case GET_SOAL:
            return {
                ...state,
                soal: action.payload
            }
        case GET_BADGES:
            return {
                ...state,
                badges: action.payload
            }
        default:
            return state

    }

}