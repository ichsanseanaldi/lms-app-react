import React, { useEffect, useRef, useState } from 'react'
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle';
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addExerciseSoalThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { primary, white, yellow } from '../../style/ColorVariable';
import { AddSoalTemplate } from '../partials/AddSoalTemplate';
import { StyledButton } from '../../style/components/StyledButton'
import { StyledSelect } from '../../style/components/StyledSelect';

export const TambahSoal = () => {

    const { randomcode } = useParams();

    const nomorSoal = useRef(1);
    const [pertanyaanSoal, setPertanyaanSoal] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [optionKey, setOptionKey] = useState('');
    const [pointSoal, setPointSoal] = useState(20);

    const [token, tokenExp] = useRefresh('guru');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const exercise = useAxiosGetSingle(`course/get-course-exercise/${randomcode}`, token, tokenExp);

    const body = {
        nomorSoal: nomorSoal.current,
        pertanyaanSoal: pertanyaanSoal,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        optionKey: optionKey,
        pointSoal: pointSoal,
        idExercise: exercise !== null && exercise.id_exercise
    }

    const post = (e) => {
        e.preventDefault();
        dispatch(addExerciseSoalThunk(body, token, tokenExp))
        navigate(`/dashboard-guru`, { replace: true });
    }

    const next = (e) => {
        e.preventDefault();
        dispatch(addExerciseSoalThunk(body, token, tokenExp))
        nomorSoal.current = nomorSoal.current + 1
        setPertanyaanSoal('')
        setOptionKey('')
        setOptionA('')
        setOptionB('')
        setOptionC('')
        setOptionD('')
        setPointSoal(20)
    }

    return (
        <StyledContainer flex="flex">
            <NavBarGuru />
            <StyledWrapper>
                <StyledHeading backgroundcolor={yellow}>
                    Tambah Soal
                </StyledHeading>
                <div>

                    <>
                        <form onSubmit={post}>
                            <input type="hidden" name="nomorSoal" placeholder='nomorSoal' value={nomorSoal.current} />
                            <AddSoalTemplate
                                border={true}
                                nomorSoal={nomorSoal.current}
                                PPS='Pertanyaan Soal'
                                valuePS={pertanyaanSoal}
                                valueA={optionA}
                                valueB={optionB}
                                valueC={optionC}
                                valueD={optionD}
                                onChangePS={e => setPertanyaanSoal(e.target.value)}
                                onChangeA={e => setOptionA(e.target.value)}
                                onChangeB={e => setOptionB(e.target.value)}
                                onChangeC={e => setOptionC(e.target.value)}
                                onChangeD={e => setOptionD(e.target.value)}
                                onChangeKey={e => setOptionKey(e.target.value)}
                            />
                            <div className='p-10-all '>
                                <p>Point Soal</p>
                                <StyledSelect value={pointSoal} onChange={e => setPointSoal(e.target.value)}>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </StyledSelect >
                            </div>
                            <div>
                                <StyledButton width="100%" backgroundcolor={primary} color={white}>Submit</StyledButton>
                            </div>
                        </form>
                        {nomorSoal.current < 10 &&
                            <StyledButton onClick={next} width="100%" backgroundcolor={yellow}>Next</StyledButton>
                        }
                    </>

                </div>

            </StyledWrapper>
        </StyledContainer>

    )
}
