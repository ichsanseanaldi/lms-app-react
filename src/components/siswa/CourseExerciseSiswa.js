import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useRefresh } from '../../hooks/useRefresh'
import { getCourseExerciseSoalThunk, verifyAnswerThunk } from '../../redux/user/thunk';
import { AddSoalTemplate } from '../partials/AddSoalTemplate';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { primary, white, yellow } from '../../style/ColorVariable';
import { StyledButton } from '../../style/components/StyledButton'
import { NavBarSiswa } from '../partials/NavBarSiswa';
import { Modal } from '../partials/Modal';

export const CourseExerciseSiswa = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [token, tokenExp] = useRefresh('siswa');
    const [optionKey, setOptionKey] = useState([]);

    const soalstate = useSelector(state => state.user.soal)
    const soal = soalstate.filter(e => e.id_exercise == id);
    const [toggle, setToggle] = useState(false);
    const [toggletwo, setToggletwo] = useState(false);
    const [data, setData] = useState([]);
    const [result, setResult] = useState({});
    const [load, setLoad] = useState(false)

    useEffect(() => {
        dispatch(getCourseExerciseSoalThunk(token, tokenExp, id))
    }, [dispatch])

    const body = {
        jawaban: optionKey,
        idexercise: id
    }

    const post = async () => {
        setToggle(false)
        setLoad(true)
        const res = await dispatch(verifyAnswerThunk(body, token, tokenExp))
        setData(res.data.data)
        setResult(res.data.result)
        setLoad(false)
        setToggletwo(true)
    }

    const toggler = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    const handleChange = (e) => {
        const obj = {
            idSoal: e.target.name,
            answer: e.target.value
        }
        if (optionKey.length > 0) {
            setOptionKey([...optionKey.filter(e => e.idSoal !== obj.idSoal), obj])
        }
        else {
            setOptionKey([obj])
        }

    }

    const done = () => {
        navigate(`/dashboard-siswa`, { replace: true })
    }

    return (
        <StyledContainer flex="flex">
            <NavBarSiswa />
            <StyledWrapper>
                <StyledHeading backgroundcolor={yellow}>
                    Soal Exercise
                </StyledHeading>
                <div>
                    {soal.length > 0 ?
                        <form onSubmit={toggler}>
                            <p>Pilih Jawaban dengan benar..</p>
                            {soal.map((e) => {
                                return (
                                    <AddSoalTemplate
                                        siswa={true}
                                        read={true}
                                        id={e.id_soal}
                                        nomorSoal={e.nomor_soal}
                                        valuePS={e.pertanyaan_soal}
                                        valueA={e.option_a}
                                        valueB={e.option_b}
                                        valueC={e.option_c}
                                        valueD={e.option_d}
                                        onChangeKey={e => handleChange(e)}

                                    />
                                )
                            })
                            }
                            <StyledButton width="100%" backgroundcolor={primary} color={white}>Submit</StyledButton>
                        </form>
                        :
                        <div>
                            <h1>Soal empty..</h1>
                        </div>
                    }
                </div >
                {
                    toggle &&

                    <Modal
                        data={data}
                        ask='Apakah kamu yakin dengan jawaban mu?'
                        desc='Exercise tidak akan bisa di akses setelah selesai!'
                        toggle={toggler}
                        onClick={post}
                    />
                }
                {
                    toggletwo &&

                    <Modal
                        data={data}
                        result={result}
                        ask='Apakah kamu sudah memahami materi nya?'
                        desc='Materi tidak akan bisa di akses setelah selesai!'
                        onClick={done}
                    />

                }
                {
                    load &&

                    <Modal
                        load={true}
                    />

                }
            </StyledWrapper>
        </StyledContainer >

    )
}
