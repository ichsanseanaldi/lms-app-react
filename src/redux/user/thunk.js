import { axiosInstanceIntercept } from "../../api/axiosInstance";
import {
    getProfil,
    getAkunSiswa,
    getBadges,
    getCourse,
    getCourseExercise,
    getCourseMateri,
    getCourseExerciseSoal,
    getCourseDetail,
    getCourseMateriDetail,
    addProfil,
    addCourse,
    addCourseMateri,
    addCourseExercise,
    addCourseExerciseSoal,
    getAllSiswa
} from "./actionCreator";


const config = (token, tokenExp) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
        tokenExp: tokenExp
    }

}

export function addProfilThunk(body, token, tokenExp, role) {

    return async dispatch => {

        try {
            await axiosInstanceIntercept.post(`${role}/add-profil`, body, config(token, tokenExp))
            dispatch(addProfil(body))
        } catch (error) {
            console.log(error);
        }

    }

}

export function addCourseThunk(body, token, tokenExp) {

    return async dispatch => {

        try {
            await axiosInstanceIntercept.post('guru/add-course', body, config(token, tokenExp))
            dispatch(addCourse(body))
        } catch (error) {
            console.log(error);
        }

    }

}

export function addMateriThunk(body, token, tokenExp) {

    return async dispatch => {

        try {
            await axiosInstanceIntercept.post(`guru/add-materi`, body, config(token, tokenExp))
            dispatch(addCourseMateri(body))
        } catch (error) {
            console.log(error);
        }

    }

}

export function addExerciseThunk(body, token, tokenExp) {

    return async dispatch => {

        try {
            await axiosInstanceIntercept.post(`guru/add-exercise`, body, config(token, tokenExp))
            dispatch(addCourseExercise(body))
        } catch (error) {
            console.log(error);
        }

    }

}

export function addExerciseSoalThunk(body, token, tokenExp) {

    return async dispatch => {

        try {
            await axiosInstanceIntercept.post(`guru/add-exercise-soal`, body, config(token, tokenExp))
            dispatch(addCourseExerciseSoal(body))
        } catch (error) {
            console.log(error);
        }

    }

}

export function addSiswaThunk(body, token, tokenExp) {

    return async dispatch => {

        try {
            await axiosInstanceIntercept.post(`guru/add-akun-siswa`, body, config(token, tokenExp))
        } catch (error) {
            console.log(error);
        }

    }

}

export function getProfilThunk(token, tokenExp, role) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get(`${role}/get-profil`, config(token, tokenExp))

            dispatch(getProfil(res.data))

        } catch (error) {

            console.log(error);

        }

    }

}

export function getCourseThunk(token, tokenExp) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get(`course/get-course`, config(token, tokenExp))
            dispatch(getCourse(res.data))
        } catch (error) {
            console.log(error);
        }

    }

}

export function getCourseByCodeThunk(token, tokenExp, code) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get(`course/get-course-detail-code/${code}`, config(token, tokenExp))
            dispatch(getCourse(res.data))
        } catch (error) {
            console.log(error);
        }

    }

}

export function getCourseExerciseThunk(token, tokenExp, id) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get(`course/get-course-exercise-all/${id}`, config(token, tokenExp))
            dispatch(getCourseExercise(res.data))
        } catch (error) {
            console.log(error);
        }

    }

}

export function getCourseExerciseSoalThunk(token, tokenExp, id) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get(`course/get-course-exercise/${id}/soal`, config(token, tokenExp))
            dispatch(getCourseExerciseSoal(res.data))
        } catch (error) {
            console.log(error);
        }

    }

}

export function getCourseMateriThunk(token, tokenExp, id) {

    return async dispatch => {

        console.log(id);

        try {
            const res = await axiosInstanceIntercept.get(`course/get-course-materi/${id}`, config(token, tokenExp))
            dispatch(getCourseMateri(res.data))
        } catch (error) {
            console.log(error);
        }

    }

}

export function getAllSiswaThunk(token, tokenExp) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get(`guru/get-profil-siswa`, config(token, tokenExp))
            dispatch(getAllSiswa(res.data))
        } catch (error) {
            console.log(error);
        }

    }
}

export function getBadgesThunk(token, tokenExp) {

    return async dispatch => {

        try {
            const res = await axiosInstanceIntercept.get(`siswa/get-badges`, config(token, tokenExp))
            dispatch(getBadges(res.data))
        } catch (error) {
            console.log(error);
        }

    }
}



export function verifyMateriThunk(body, token, tokenExp) {

    return async dispatch => {

        try {

            await axiosInstanceIntercept.post(`course/verify-materi`, body, config(token, tokenExp))

        } catch (error) {
            console.log(error);
        }

    }

}

export function verifyAnswerThunk(body, token, tokenExp) {

    return async dispatch => {

        try {

            console.log(body);

            await axiosInstanceIntercept.post(`course/verify-answer`, body, config(token, tokenExp))

        } catch (error) {
            console.log(error);
        }

    }

}

export function joinCourseThunk(body, token, tokenExp) {

    return async dispatch => {

        try {

            const res = await axiosInstanceIntercept.post(`course/join`, body, config(token, tokenExp))
            console.log(res);

        } catch (error) {
            console.log(error);
        }

    }

}