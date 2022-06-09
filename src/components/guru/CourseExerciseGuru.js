import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useRefresh } from '../../hooks/useRefresh'
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle'
import { getCourseExerciseSoalThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { green } from '../../style/ColorVariable';
import { AddSoalTemplate } from '../partials/AddSoalTemplate';


export const CourseExerciseGuru = () => {

    const { id } = useParams();
    const dispatch = useDispatch()

    const [token, tokenExp] = useRefresh('guru');

    const exercise = useAxiosGetSingle(`course/get-course-exercise-id/${id}`, token, tokenExp)
    const soalstate = useSelector(state => state.user.soal)
    const soal = soalstate.filter(e => e.id_exercise == id);

    useEffect(() => {
        dispatch(getCourseExerciseSoalThunk(token, tokenExp, id))
    }, [dispatch])


    return (
        <StyledContainer flex="flex">
            <NavBarGuru />
            <StyledWrapper>
                <StyledHeading backgroundcolor={green}>
                    Soal Exercise
                </StyledHeading>

                <div>
                    {soal.length < 1 &&
                        <div>
                            <p>belum ada soal</p>
                            <Link to={`/add-soal/${exercise !== null && exercise.code_exercise}`}>Tambah Soal</Link>
                        </div>
                    }
                    {soal.length > 0 && soal.map((e) => {
                        return (
                            <div>

                                <h2 className='text-center'>{e.nomor_soal} - key : {e.option_key}</h2>
                                <AddSoalTemplate
                                    disabled='disabled'
                                    nomorSoal={e.nomor_soal}
                                    valuePS={e.pertanyaan_soal}
                                    valueA={e.option_a}
                                    valueB={e.option_b}
                                    valueC={e.option_c}
                                    valueD={e.option_d}
                                    valueE={e.option_e}
                                />
                            </div>
                        )
                    })
                    }
                </div >

            </StyledWrapper>
        </StyledContainer>


    )
}
