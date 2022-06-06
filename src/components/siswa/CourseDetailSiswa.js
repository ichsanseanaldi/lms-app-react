import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import { useDispatch, useSelector } from 'react-redux';
import { getCourseExerciseThunk, getCourseMateriThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { yellow } from '../../style/ColorVariable';
import { TableSiswa } from '../partials/TableSiswa';
import { NavBarSiswa } from '../partials/NavBarSiswa';
import { Modal } from '../partials/Modal';

export const CourseDetailSiswa = () => {

    const { id } = useParams()
    const dispatch = useDispatch();

    const [token, tokenExp] = useRefresh('siswa');
    const course = useSelector(state => state.user.course);
    const exercise = useSelector(state => state.user.exercise);
    const materi = useSelector(state => state.user.materi);
    const detail = course.filter(e => e.id_course == id);
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        dispatch(getCourseMateriThunk(token, tokenExp, id))
        dispatch(getCourseExerciseThunk(token, tokenExp, id))
        setLoad(false)
    }, [dispatch])


    return (

        <StyledContainer flex="flex">
            <NavBarSiswa />
            <StyledWrapper>
                <StyledHeading backgroundcolor={yellow}>
                    Detail Course Siswa
                </StyledHeading>
                <div className='flex'>
                    {detail && detail.map((e, i) => {
                        return (
                            <div key={i} className="desc-wrapper">
                                <div className='flex p-10-all desc'>
                                    <strong>Judul:</strong>
                                    <p className='p-10-lr' >{e.course.judul_course}</p>
                                </div>
                                <div className='flex p-10-all desc'>
                                    <strong>Code:</strong>
                                    <p className='p-10-lr'>{e.course.code_course}</p>
                                </div>
                                <div className='flex p-10-all desc'>
                                    <strong>Deskripsi:</strong>
                                    <p className='p-10-lr'>{e.course.deskripsi_course}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                {materi !== undefined && exercise !== undefined &&
                    <div>
                        <div className='flex flex-column '>
                            <TableSiswa
                                id={id}
                                title="Materi"
                                value={materi}
                            />
                        </div>
                        <div className='flex flex-column'>
                            <TableSiswa
                                id={id}
                                title="Exercise"
                                value={exercise}
                            />
                        </div>
                    </div>
                }
                {
                    load &&

                    <Modal
                        load={true}
                    />

                }
            </StyledWrapper>
        </StyledContainer>


    )
}