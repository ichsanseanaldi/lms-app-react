import {
    ADD_PROFIL,
    GET_PROFIL,
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
} from "./actionTypes";

export function addProfil(profil) {
    return {
        type: ADD_PROFIL,
        payload: profil
    }
}

export function addCourse(course) {
    return {
        type: ADD_COURSE,
        payload: course
    }
}

export function addCourseMateri(materi) {
    return {
        type: ADD_MATERI,
        payload: materi
    }
}

export function addCourseExercise(exercise) {
    return {
        type: ADD_EXERCISE,
        payload: exercise
    }
}

export function addCourseExerciseSoal(soal) {
    return {
        type: ADD_EXERCISE_SOAL,
        payload: soal
    }
}

export function getProfil(profil) {
    return {
        type: GET_PROFIL,
        payload: profil
    }
}

export function getAllSiswa(akun) {
    return {
        type: GET_ALL_SISWA,
        payload: akun
    }
}

export function getCourse(course) {
    return {
        type: GET_COURSE,
        payload: course
    }
}

export function getCourseMateri(materi) {
    return {
        type: GET_MATERI,
        payload: materi
    }
}

export function getCourseExercise(exercise) {
    return {
        type: GET_EXERCISE,
        payload: exercise
    }
}

export function getCourseExerciseSoal(soal) {
    return {
        type: GET_SOAL,
        payload: soal
    }
}

export function getBadges(badges) {
    return {
        type: GET_BADGES,
        payload: badges
    }
}