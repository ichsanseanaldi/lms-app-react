import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import { useDispatch, useSelector } from 'react-redux';
import { getCourseExerciseThunk, getCourseMateriThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { NavBarGuru } from '../partials/NavBarGuru';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { Table } from '../partials/Table';
import { yellow } from '../../style/ColorVariable';

export const CourseDetailGuru = () => {

    const { id } = useParams()
    const dispatch = useDispatch();

    const [token, tokenExp] = useRefresh('guru');
    const course = useSelector(state => state.user.course);
    const exercise = useSelector(state => state.user.exercise);
    const detail = course.filter(e => e.id_course == id);
    const materi = useSelector(state => state.user.materi);

    useEffect(() => {
        dispatch(getCourseMateriThunk(token, tokenExp, id))
        dispatch(getCourseExerciseThunk(token, tokenExp, id))
    }, [dispatch])

    return (

        <StyledContainer flex="flex">
            <NavBarGuru />
            <StyledWrapper>
                <StyledHeading backgroundcolor={yellow}>
                    Detail Course
                </StyledHeading>
                <div className='flex'>
                    {detail && detail.map((e) => {
                        return (
                            <div key={e.id_course}>
                                <div className='flex p-10-all'>
                                    <h2>Judul:</h2>
                                    <p className='brand p-10-lr' >{e.judul_course}</p>
                                </div>
                                <div className='flex p-10-all'>
                                    <h2>Code:</h2>
                                    <p className='brand p-10-lr'>{e.code_course}</p>
                                </div>
                                <div className='flex p-10-all'>
                                    <h2>Deskripsi:</h2>
                                    <p className='brand p-10-lr'>{e.deskripsi_course}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className='flex flex-column '>
                    <Table
                        id={id}
                        title="Materi"
                        value={materi}
                    />
                </div>
                <div className='flex flex-column'>
                    <Table
                        id={id}
                        title="Exercise"
                        value={exercise}
                    />
                </div>
            </StyledWrapper>
        </StyledContainer>
    )
}

